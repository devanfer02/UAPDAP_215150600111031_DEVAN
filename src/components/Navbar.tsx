import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

const navItems= [
  {
    name: 'Home',
    icon: 'mdi:home',
    path: '/'
  },
  {
    name: 'About',
    icon: 'mdi:account-box',
    path: '/about'
  },
  {
    name: 'Contact',
    icon: 'fluent:contact-card-20-filled',
    path: '/contact'
  },
  {
    name: 'Portfolio',
    icon: 'mdi:briefcase',
    path: '/portfolio'
  },
]

export default function Navbar() {
  const [ isScrolled, setIsScrolled ] = useState(window.scrollY > 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    console.log(isScrolled)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <nav 
      className='flex flex-col 
        items-center lg:justify-center gap-y-4
        fixed h-max mt-auto lg:right-[2%] z-50 top-0
        w-full lg:w-16 lg:max-w-md lg:h-screen'
    >
      <div 
        className={`flex w-full lg:flex-col items-center 
        justify-between lg:justify-center gap-y-10 px-10 md:px-40
        lg:px-0 h-[60px] ${isScrolled ? 'bg-my-white/30' : 'bg-my-white'} 
        lg:bg-my-white lg:h-max py-8 backdrop-blur-sm text-3xl
        lg:text-xl lg:rounded-full`}
      >
        { navItems.map((nav, index) => (
          <NavLink className='' to={nav.path} key={index}>
            <div>
              <Icon icon={nav.icon} width={'30px'} className="hover:text-my-orange transition duration-300 ease-in-out"/>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}