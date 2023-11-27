class TreeNode {
  constructor(
      public name: string, 
      public children: TreeNode[],
      public parrent: TreeNode | null
    ) {}
}

class Tree {
  private root: TreeNode;
  private currNode: TreeNode;
  constructor(
    root: TreeNode = new TreeNode('/', [], null),
    currNode: TreeNode = root
  ) { 
    this.root = root
    this.currNode = currNode
  }

  makedir(dirName: string): void {
    this.currNode.children.push(new TreeNode(dirName, [], this.currNode))
  }

  private findIndex(dirName: string): number {
    const index = this.currNode.children.findIndex((dir) => dir.name === dirName)

    return index
  }

  whoami(): string {
    return 'Devan Ferrel'
  }

  rmdir(dirName: string): boolean {
    const index = this.findIndex(dirName)

    if (index !== -1) {
      this.currNode.children.splice(index, 1)
      return true 
    } 

    return false
  }

  ls(dirName: string = this.currNode.name): string {
    if (dirName === this.currNode.name) {
      console.log(dirName)      
      const lists = this.currNode.children.map(node => {
        return node.name + '/'
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")
    } else {
      const index = this.currNode.children.findIndex(node => {
        return node.name === dirName
      })

      if (index === -1) {
        return "directory doesn't exist"
      }

      const lists = this.currNode.children[index].children.map(node => {
        return node.name + '/'
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")      
    }
  }

  cd(dirName: string): boolean {
    switch(dirName) {
      case '..' : {
        if (this.currNode === this.root) return false

        this.currNode = this.currNode.parrent!
        return true
      }
      case undefined :
        return false 
      case '.' :
        return true 
      
      default : {
        const index = this.findIndex(dirName)

        if (index === -1) return false

        this.currNode = this.currNode.children[index]
        return true
      }
    }
  }
}

export default Tree;