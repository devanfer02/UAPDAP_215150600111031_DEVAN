import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Card from './Card'

const skills = [
  {
    name: 'C++',
    icon: 'skill-icons:cpp',
    link: 'https://www.w3schools.com/cpp/'
  },
  {
    name: 'Bootstrap',
    icon: 'skill-icons:bootstrap',
    link: 'https://getbootstrap.com/'
  },
  {
    name: 'Docker',
    icon: 'skill-icons:docker',
    link: 'https://www.docker.com/'
  },
  {
    name: 'Javascript',
    icon: 'skill-icons:javascript',
    link: 'https://www.w3schools.com/js/'
  },
  {
    name: 'Typescript',
    icon: 'skill-icons:typescript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Golang',
    icon: 'skill-icons:golang',
    link: 'https://go.dev/'
  },
  {
    name: 'Linux',
    icon: 'skill-icons:linux-light',
    link: 'https://ubuntu.com/'
  },
  {
    name: 'Laravel',
    icon: 'skill-icons:laravel-light',
    link: 'https://laravel.com/'
  },
  {
    name: 'Java',
    icon: 'skill-icons:java-light',
    link: 'https://www.java.com/en/'
  },
  {
    name: 'PHP',
    icon: 'skill-icons:php-light',
    link: 'https://www.php.net'
  },
  {
    name: 'Python',
    icon: 'skill-icons:python-light',
    link: 'https://www.python.org/'
  },
  {
    name: 'MySQL',
    icon: 'skill-icons:mysql-light',
    link: 'https://www.mysql.com/'
  },
  {
    name: 'Nodejs',
    icon: 'skill-icons:nodejs-light',
    link: 'https://nodejs.org/en'
  },
  {
    name: 'Gin',
    icon: 'logos:gin',
    link: 'https://gin-gonic.com/'
  },
  {
    name: 'React',
    icon: 'skill-icons:react-light',
    link: 'https://react.dev/'
  },
  {
    name: 'Tailwindcss',
    icon: 'skill-icons:tailwindcss-light',
    link: 'https://tailwindcss.com/'
  },
]

export default function TechStack(): JSX.Element {
  const wh = '48px'

  return (
    <Card
      className='flex flex-wrap justify-center text-center bg-my-white py-5 my-2 border-my-navy bg-opacity-40'
    >
      { skills.map((skill, index) => (
        <Link
          to={skill.link}
          key={index}
        >
          <Icon
            icon={skill.icon}
            width={wh}
            height={wh}
            className='text-my-orange lg:mx-3 mx-2 my-2'
          />
        </Link>
        
      ))}
    </Card>
  )
}