import { useEffect } from "react";

class Node {
  constructor(
      public name: string, 
      public children: Node[],
      public parrent: Node | null
    ) {}
}

class Tree {
  private root: Node;
  private currNode: Node;
  constructor(
    root: Node = new Node('/', [], null),
    currNode: Node = root
  ) { 
    this.root = root
    this.currNode = currNode
  }

  makedir(dirName: string): void {
    this.currNode.children.push(new Node(dirName, [], this.currNode))
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

  cd(dirName: string): boolean {
    switch(dirName) {
      case '..' : {
        if (this.currNode === this.root) return false

        this.currNode = this.currNode.parrent!
        return true
      }
      
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

export default function Terminal() {
  const filesystem = new Tree()
  console.log(filesystem)

  useEffect(() => {
    document.title = 'Terminal App'
  })

  return (
    <section className="pt-[5em] bg-my-navy text-my-white h-screen">
      <h1 className="text-center mb-3 text-bold lg:text-2xl">
        Bash Terminal
      </h1>
      <section className="px-28 w-full">
        <input className={`bg-transparent w-full h-full border border-white p-4 
          resize-none focus:outline-none cursor-block`}/>
        <div className="" id="terminal-history">

        </div>
      </section>
    </section>
  )
}