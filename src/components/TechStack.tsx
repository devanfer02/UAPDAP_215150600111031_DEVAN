import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Card from './Card'

const skills = [
  {
    name: 'C++',
    icon: 'devicon:cplusplus',
    link: 'https://www.w3schools.com/cpp/'
  },
  {
    name: 'Java',
    icon: 'devicon:java',
    link: 'https://www.java.com/en/'
  },
  {
    name: 'Javascript',
    icon: 'devicon:javascript',
    link: 'https://www.w3schools.com/js/'
  },
  {
    name: 'Typescript',
    icon: 'devicon:typescript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Golang',
    icon: 'skill-icons:golang',
    link: 'https://go.dev/'
  },
  {
    name: 'Linux',
    icon: 'devicon:linux',
    link: 'https://ubuntu.com/'
  },
  {
    name: 'Laravel',
    icon: 'devicon:laravel',
    link: 'https://laravel.com/'
  },
  {
    name: 'Python',
    icon: 'devicon:python',
    link: 'https://www.python.org/'
  },
  {
    name: 'MySQL',
    icon: 'devicon:mysql-wordmark',
    link: 'https://www.mysql.com/'
  },
  {
    name: 'Nodejs',
    icon: 'devicon:nodejs',
    link: 'https://nodejs.org/en'
  },
  {
    name: 'Gin',
    icon: 'logos:gin',
    link: 'https://gin-gonic.com/'
  },
  {
    name: 'React',
    icon: 'logos:react',
    link: 'https://react.dev/'
  },
  {
    name: 'Bootstrap',
    icon: 'devicon:bootstrap',
    link: 'https://getbootstrap.com/'
  },
  {
    name: 'Tailwindcss',
    icon: 'devicon:tailwindcss',
    link: 'https://tailwindcss.com/'
  }
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