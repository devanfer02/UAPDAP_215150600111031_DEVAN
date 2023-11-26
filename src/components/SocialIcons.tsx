import { Link } from "react-router-dom"
import { Icon } from '@iconify/react'

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
]

export default function Socials() {
  return (
    <section className="flex my-auto">
      { links.map(link => (
        <div className="mx-2 p-2" key={link.path}>
          <Link to={link.path}>
            <Icon icon={link.icon} width={'30px'} className="hover:text-my-orange transition duration-300 ease-in-out"/>
          </Link>
        </div>
      ))}
    </section>
  )
}