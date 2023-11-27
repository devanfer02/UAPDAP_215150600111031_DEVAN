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

  rmdir(dirName: string): string {
    const index = this.findIndex(dirName)

    if (index !== -1) {
      if (this.currNode.children[index].children.length !== 0) {
        return `rmdir: failed to remove '${dirName}': Directory not empty`
      }
      this.currNode.children.splice(index, 1)
      return '' 
    } 

    return `rmdir: failed to remove '${dirName}': No such file or directory`
  }

  rmrf(dirName: string): string {
    if (dirName === undefined) {
      return ''
    }
    const index = this.findIndex(dirName)

    if (index !== -1) {
      this.currNode.children.splice(index, 1)
      return '' 
    } 

    return ''
  }

  ls(dirName: string = this.currNode.name): string {
    if (dirName === this.currNode.name) {
      const lists = this.currNode.children.map(node => {
        return node.name + '/'
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")
    } else {
      const index = this.currNode.children.findIndex(node => {
        return node.name === dirName
      })

      if (index === -1) {
        return `ls: cannot access '${dirName}': No such file or directory`
      }

      const lists = this.currNode.children[index].children.map(node => {
        return node.name + '/'
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")      
    }
  }

  private getRootToDest(): string[] {
    const arr = []
    let curr = this.currNode

    while (curr != this.root) {
      console.log("STUCK")
      arr.push(curr.name)
      curr = curr.parrent!
    }
    arr.push("Devan's Web Profile")

    return arr
  }

  pwd(): string {
    const arr = this.getRootToDest()

    return arr.reduceRight((acc, curr) => {
      return acc + (curr + '/')
    }, '') 
  }

  cd(dirName: string): string {
    switch(dirName) {
      case '..' : {
        if (this.currNode === this.root) return ''

        this.currNode = this.currNode.parrent!
        return ''
      }
      case undefined :
        this.currNode = this.root
        return ''
      case '.' :
        return '' 
      
      default : {
        const index = this.currNode.children.findIndex(node => {
          return node.name === dirName
        })
        
        if (index === -1) return `cd: no such file or directory: ${dirName}` 

        this.currNode = this.currNode.children[index]

        return ''
      }
    }
  }
}

export default Tree;