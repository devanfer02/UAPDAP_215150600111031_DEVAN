import { Link } from "react-router-dom"
import { Icon } from '@iconify/react'

interface SocialParams {
  fontColor: string;
  hoverColor: string;
}

const links = [
  {
    icon: 'mdi:instagram',
    path: 'https://www.instagram.com/dvnf20/'
  },
  {
    icon: 'mdi:linkedin',
    path: 'https://www.linkedin.com/in/devanferrel/'
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

export default function Socials( {fontColor, hoverColor}: SocialParams ) {
  return (
    <section className="flex my-auto">
      { links.map(link => (
        <div className="mx-2 p-2" key={link.path}>
          <Link to={link.path} className={`hover:${hoverColor}`} target="_blank">
            <Icon 
              icon={link.icon} 
              width={'35px'}
              className={`
                ${fontColor} hover:${hoverColor} 
                transition duration-300 ease-in-out`
              }/>
          </Link>
        </div>
      ))}
    </section>
  )
}