import { useEffect } from "react"
import hero from '../assets/images/profile/hero.png'
import Socials from "../components/Socials"
import Button from "../components/Button"

function Hero() {
  return (
    <section id="hero" className="pt-[7.3em] bg-my-navy text-my-white bg-network bg-center lg:bg-left md:pb-[6.25rem]">
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
              <Button text="Contact Me" link="/about"/>
              <Socials fontColor="text-my-orange" hoverColor="text-white"/>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0 h-[400px]">
              <span className="absolute -bottom-0 left-1/2 z-0 -translate-x-1/2 md:scale-125">
                <svg viewBox="0 0 200 200" height="400" width="400" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FF782D" d="M34.3,-65.3C43.6,-54.1,49.5,-43.1,57.6,-32.2C65.8,-21.3,76.1,-10.7,79.4,1.9C82.8,14.6,79.2,29.1,70.4,38.7C61.5,48.2,47.3,52.7,34.6,54.1C22,55.5,11,53.9,-1.8,56.9C-14.5,60,-29.1,67.8,-41.7,66.3C-54.3,64.9,-64.9,54.3,-71.7,41.7C-78.5,29.1,-81.4,14.5,-80.1,0.8C-78.7,-13,-73.1,-26,-63.2,-33.3C-53.4,-40.6,-39.4,-42.3,-28.2,-52.4C-17,-62.4,-8.5,-80.8,2,-84.3C12.5,-87.9,25.1,-76.5,34.3,-65.3Z" transform="translate(100 100) scale(1.1)" />
                </svg>
              </span>
              <img src={hero} alt="devan" className="mx-auto max-w-full max-h-[500px] brightness-90 " style={{zIndex: '2'}} draggable="false"/>
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