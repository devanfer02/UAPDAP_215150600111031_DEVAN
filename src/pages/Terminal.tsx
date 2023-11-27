import { useEffect, useState, useRef } from "react";
import { Icon } from '@iconify/react'
import figlet from 'figlet'
import Tree from "../utils/datastructure/tree";

figlet.defaults({fontPath: window.location.origin + '/assets/ascii-fonts'})
const filesystem = new Tree()
filesystem.makedir('totally_secret')

export default function Terminal() {
  const [ input, setInput ] = useState("")
  const [ output, setOutput ] = useState("")
  const [ terminal, setTerminal ] = useState("$")
  const inputRef = useRef<HTMLInputElement|null>(null)


  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.keyCode === 68) {
      setTerminal('$ ')
      setInput('')
    }

    if (event.key !== 'Enter') return 

    let out = 'Unknown Bash Command'

    if (terminal === '[sudo]pass:' && input === 'exit') {
      setTerminal('$ ')
      return
    }

    if (terminal === '[sudo]pass:' && input !== 'zypbohia78') {
      out = 'Sorry, wrong passsword'
      const newOutput = terminal + '  ' + input + '\n' + out + '\n' + output + '\n'

      setOutput(newOutput)
      setInput('')
      return
    }

    if (input === 'whoami') out = filesystem.whoami()
    if (input === '') out = ''

    const splitted = input.split(" ")

    if (splitted[0] === 'clear') {
      setOutput('')
      setInput('')
      return
    }

    if (splitted[0] === 'pwd') {
      out = filesystem.pwd()
    }
    
    if (splitted[0] === 'figlet') {
      figlet.text(splitted[1], {
        font: 'ANSI Shadow',
        horizontalLayout: "default",
        verticalLayout: "default"
      } ,(err, data) => {
        if (err) {
          console.error(err)
        }
        
        const newOutput = output + '\n' + '$ ' + input + '\n' + data + '\n'  
        console.log(newOutput)
        setOutput(newOutput)
        setInput('')

        return
      })
    }

    if (splitted[0] === 'ls') {
      out = splitted.length > 1 ? filesystem.ls(splitted[1]) : filesystem.ls() 
    }

    if (splitted[0] === 'cd') {
      out = filesystem.cd(splitted[1])
    }

    if (splitted[0] === 'mkdir') {
      out = splitted.length > 1 ? '' : 'mkdir: missing operand'
      if (out === '') {
        filesystem.makedir(splitted[1])
      }
    }

    if (splitted[0] === 'rmdir') {
      out = splitted.length > 1 ? '' : 'rmdir: missing operand'
      if (out === '') {
        out = filesystem.rmdir(splitted[1])
      }
    }

    if (splitted[0] === 'rm') {
      if (splitted[1] === '-rf') {
        out = filesystem.rmrf(splitted[2])
      }
    }

    if (input === 'sudo su') {
      // BIKIN REQUIRED PASSWORD
      setTerminal('[sudo]pass:')
      out = ''
    }

    if (input === 'exit') {
      setTerminal('$ ')
      out = ''
    }

    const newOutput = terminal + '  ' + input + '\n' + out + '\n' + output + '\n'

    setOutput(newOutput)
    setInput('')
  }

  useEffect(() => {
    document.title = 'Terminal'

    if (inputRef.current !== undefined) {
      inputRef.current!.focus()
    }
  }, [])

  return (
    <section className="pt-[5em] bg-my-navy text-my-white h-screen">
      <div className="text-center flex">
        <Icon 
          icon={'mdi:ssh'} 
          width={'80px'}
          className="text-center mb-3 mx-auto text-my-orange"
        />
      </div>
      <section className="px-10 lg:px-28 w-full">
        <div 
          className="flex p-4"
          onClick={() => {
            inputRef.current!.focus()
          }}
        >
          <h1 className="text-my-orange">
            {terminal}&nbsp;&nbsp;
          </h1>
          <input 
            ref={inputRef}
            className={`bg-transparent w-full h-full
            resize-none focus:outline-none`}
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            onKeyDown={handleInput}
          />
        </div>
        <div className="overflow-y-scroll h-96">
          <div className="py-4 pl-4 whitespace-pre-line" id="terminal-history">
            { output }
          </div>
        </div>
      </section>
    </section>
  )
}