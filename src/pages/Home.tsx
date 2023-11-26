import { useEffect } from "react"
import Socials from "../components/SocialIcons"
import Button from "../components/Button"

function Hero() {
  return (
    <section id="hero" className="pt-36 bg-my-navy text-my-white bg-network bg-center lg:bg-left">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-xl font-semibold md:text-xl">
              Hello everyone 👋, 
            <span className="block font-bold text-my-orange text-4xl mt-1 lg:text-5xl">
                I'm Devan Ferrel
              </span>
            </h1>
            <h2 className="font-medium text-lg lg:text-2xl">
              Student | Backend Developer | Competitive Programmer
            </h2>
            <blockquote className="font-medium mb-2 text-my-lightgray">
              "It's not always as we wanted, but we grow <span className="text-berry">stronger</span> when we <span className="text-berry">break</span>."
            </blockquote>
            <div className="flex flex-wrap">
              <Button text="Contact Me" link=""/>
              <Socials/>
            </div>
          </div>
          <div className="w-full self-start px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-0 lg:right-0 h-[400px]">
              <span className="absolute -bottom-0 -z-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FF782D" d="M31.9,-32.2C43.6,-20.2,56.8,-10.1,62.7,5.8C68.5,21.7,66.9,43.5,55.2,52.3C43.5,61.1,21.7,56.9,6.3,50.7C-9.2,44.4,-18.4,36,-32.2,27.2C-46,18.4,-64.5,9.2,-69.2,-4.7C-73.9,-18.6,-64.8,-37.2,-51,-49.1C-37.2,-61,-18.6,-66.2,-4.2,-62C10.1,-57.8,20.2,-44.1,31.9,-32.2Z" transform="translate(100 100) scale(1.3)"/>
                </svg>
              </span>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <>
      <Hero/>
    </>
  )
}