import figlet from 'figlet'
import Tree from "../datastructure/tree"

figlet.defaults({fontPath: window.location.origin + '/assets/ascii-fonts'})

export const executeBash = (
    event: React.KeyboardEvent<HTMLElement>,
    input: string,
    output: string,
    terminal: string,
    filesystem: Tree,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    setOutput: React.Dispatch<React.SetStateAction<string>>,
    setTerminal: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (event.ctrlKey && event.keyCode === 68) {
      setTerminal('$ ')
      setInput('')
    }

    if (event.key !== 'Enter') return 

    let out = 'Unknown Bash Command'

    if (terminal === '[sudo]pass:' && input === 'exit') {
      setTerminal('$ ')
      setInput('')
      return
    }

    if (terminal === '[sudo]pass:' && input !== 'zyphobia78') {
      out = 'Sorry, wrong passsword'
      const newOutput = terminal + '  ' + input + '\n' + out + '\n' + output + '\n'

      setOutput(newOutput)
      setInput('')
      return
    } else if (terminal === '[sudo]pass:') {
      setTerminal('dvnnfrr#root ')
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

    if (splitted[0] === './me') {
      out = `Hello, my name is Devan Ferrel. Currently,  i'm a student studying in Universitas Brawijaya. 
      I have 3 organization experiences, 
      being a Lead of Documentation Division at Rohkris SMAN 14 Bekasi, 
      being a Staff of Informatics Division Medkominfo Departement at KBMDSI UB,
      being a Staff of Competitive Programmer Division at BCC FILKOM UB.
      Sometimes, i do some quick bullet or blitz game becase it was a pretty quick game and you had to think and make a move quickly before the times out.
      I used to love playing online games such as CSGO, Rainbow Six and Genshin. Now i only play game at game corner only because i like driving game in console`
    }

    if (splitted[0] === 'help') {
      out = `
      ----------------------------------------------------------------------------------------
      List of available commands : 
      ----------------------------------------------------------------------------------------
      ./me    : execute a exe file about my information
      whoami  : see the current user
      pwd     : print full path of the working directory from root
      ls      : display all files and directories in the current directory
      cd      : change directory
      mkdir   : make a directory
      rmdir   : remove an empty directory
      rm -rf  : remove a file or directory recursively and forcefully
      ----------------------------------------------------------------------------------------
      `
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

