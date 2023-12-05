enum Type {
  FILE, 
  DIRECTORY
}

class TreeNode {
  constructor(
    public name: string, 
    public type: Type,
    public children: TreeNode[] | null,
    public parrent: TreeNode | null,
    public content?: string
  ) {
    if(this.type === Type.FILE) {
      this.children = null
    }
  }
}

class Tree {
  private root: TreeNode;
  private currNode: TreeNode;
  constructor(
    root: TreeNode = new TreeNode('/', Type.DIRECTORY, [], null),
    currNode: TreeNode = root
  ) { 
    this.root = root
    this.currNode = currNode
  }

  private findIndex(dirName: string): number {
    const index = this.currNode.children!.findIndex((dir) => dir.name === dirName)

    return index
  }

  private getRootToDest(): string[] {
    const arr = []
    let curr = this.currNode

    while (curr != this.root) {
      arr.push(curr.name)
      curr = curr.parrent!
    }
    arr.push("Devan's Web Profile")

    return arr
  }

  makedir(dirName: string): void {
    if(dirName.includes("/") && dirName.indexOf("/") !== dirName.length - 1) {
      const dirs = dirName.split("/")
      const tempCurr = this.currNode
  
      for (const dir of dirs) {
        this.currNode.children!.push(new TreeNode(dir, Type.DIRECTORY, [], this.currNode))
        this.cd(dir)
      }
      
      this.currNode = tempCurr
      return
    }

    if (dirName.includes("/")) {
      dirName = dirName.substring(0, dirName.indexOf("/"))
    }
    this.currNode.children!.push(new TreeNode(dirName, Type.DIRECTORY, [], this.currNode))
  }

  rmdir(dirName: string): string {
    const index = this.findIndex(dirName)

    if (index !== -1) {
      if (this.currNode.children![index].children!.length !== 0) {
        return `rmdir: failed to remove '${dirName}': Directory not empty`
      }
      this.currNode.children!.splice(index, 1)
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
      this.currNode.children!.splice(index, 1)
      return '' 
    } 

    return ''
  }

  ls(dirName: string = this.currNode.name): string {
    if (dirName === this.currNode.name) {
      const lists = this.currNode.children!.map(node => {
        return node.type === Type.DIRECTORY ? node.name + '/' : node.name
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")
    } else {
      const index = this.currNode.children!.findIndex(node => {
        return node.name === dirName
      })

      if (index === -1) {
        return `ls: cannot access '${dirName}': No such file or directory`
      }

      const lists = this.currNode.children![index].children!.map(node => {
        return node.type === Type.DIRECTORY ? node.name + '/' : node.name
      })
  
      return lists.length === 0 ? '' : lists.toString().replace(",", " ")      
    }
  }

  cd(dirName: string): string {
    if(dirName === undefined) {
      this.currNode = this.root
      return ''
    }
    if(dirName.includes("/") && dirName.indexOf("/") !== dirName.length - 1) {
      const dirs = dirName.split("/")
      const dirToGo = dirs[0]
      const newDirs = dirs.splice(1)
      this.cd(dirToGo)
      this.cd(newDirs.join("/"))
      return ''
    }
    if (dirName.includes("/")) {
      dirName = dirName.substring(0, dirName.indexOf("/"))
    }
    switch(dirName) {
      case '..' : {
        if (this.currNode === this.root) return ''

        this.currNode = this.currNode.parrent!
        return ''
      }
      case '.' :
        return '' 
      case '/' :
        this.currNode = this.root;
        return ''
      
      default : {
        const index = this.currNode.children!.findIndex(node => {
          return node.name === dirName
        })
        
        if (index === -1) return `cd: no such file or directory: ${dirName}` 

        this.currNode = this.currNode.children![index]

        return ''
      }
    }
  }

  touch(fileName: string): string {
    if(fileName === undefined) {
      return 'touch: missing file operand'
    }
    this.currNode.children!.push(new TreeNode(fileName, Type.FILE, null, this.currNode)) 
    return ''
  }

  pwd(): string {
    const arr = this.getRootToDest()

    return arr.reduceRight((acc, curr) => {
      return acc + (curr + '/')
    }, '') 
  }

  whoami(): string {
    return 'Devan Ferrel'
  }

}

export default Tree;