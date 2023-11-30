import { useEffect, useState, useRef } from "react";
import { Icon } from '@iconify/react'

import Tree from "../utils/datastructure/tree";
import { executeBash } from "../utils/algorithm/bash";

const filesystem = new Tree()
filesystem.makedir('totally_secret')

export default function Terminal() {
  const [ input, setInput ] = useState("")
  const [ output, setOutput ] = useState("")
  const [ terminal, setTerminal ] = useState("$")
  const inputRef = useRef<HTMLInputElement|null>(null)

  const handleBashInput = (event : React.KeyboardEvent<HTMLElement>) => {
    executeBash(
      event, 
      input, 
      output, 
      terminal, 
      filesystem, 
      setInput, 
      setOutput, 
      setTerminal
    )
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
            onKeyDown={handleBashInput}
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