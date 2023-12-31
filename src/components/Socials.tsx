import { Link } from "react-router-dom"
import { Icon } from '@iconify/react'
import { colorTailwind, Color } from "../utils/color";

interface SocialParams {
  fontColor: string;
  hoverColor: string;
  className?: string;
}

const links = [
  {
    icon: 'mdi:instagram',
    path: 'https://www.instagram.com/dvnf20/'
  },
  {
    icon: 'mdi:linkedin',
    path: 'https://www.linkedin.com/in/dvnnfrr/'
  },
  {
    icon: 'mdi:github',
    path: 'https://github.com/devanfer02'
  },
  {
    icon: 'mdi:email-outline',
    path: 'https://mail.google.com/mail/?view=cm&fs=1&to=ubdevanferrel04@student.ub.ac.id'
  }
]

export default function Socials( {fontColor, hoverColor, className }: SocialParams ): JSX.Element {

  return (
    <section className="flex my-auto">
      { links.map((link, index) => (
        <Link 
          to={link.path} 
          className={`mr-3 mt-1 lg:mt-0 lg:mx-2 lg:p-2`} 
          target="_blank"
          key={index}
        >
          <Icon 
            icon={link.icon} 
            width={'35px'}
          className={`
              ${className ? className : colorTailwind[fontColor as keyof Color]} hover:${colorTailwind[hoverColor as keyof Color]} 
              transition duration-300 ease-in-out`}/>
        </Link>
        
      ))}
    </section>
  )
}