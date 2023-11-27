import { useEffect, useState, useRef } from "react";
import { Icon } from '@iconify/react'
import figlet from 'figlet'
import Tree from "../utils/datastructure/tree";

figlet.defaults({fontPath: window.location.origin + '/assets/ascii-fonts'})

export default function Terminal() {
  const filesystem = new Tree()
  filesystem.makedir('totally_secret')
  const [ input, setInput ] = useState("")
  const [ output, setOutput ] = useState("")
  const inputRef = useRef<HTMLInputElement|null>(null)


  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return 

    let out = 'Unknown Bash Command'

    if (input === 'whoami') out = 'Devan Ferrel'
    if (input === '') out = ''

    const splitted = input.split(" ")

    if (splitted[0] === 'clear') {
      setOutput('')
      setInput('')
      return
    }

    if (splitted[0] === 'pwd') {
      out = "Devan's Web Profile"
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
      filesystem.cd(splitted[1])
      out = ''
    }

    const newOutput = '$ ' + input + '\n' + out + '\n' + output + '\n'

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
            $&nbsp;&nbsp;
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