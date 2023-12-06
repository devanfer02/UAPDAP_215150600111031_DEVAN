import { useEffect } from "react"
import Socials from "../components/Socials"
import Button from "../components/Button"
import preview from '../assets/images/projects/terminal2.png'
import hero from '../assets/images/profile/hero.png'
import { works } from "../utils/assets/assets.home"

function Hero() {
  return (
    <section 
      id="home" 
      className="pt-[7.3em] bg-my-navy pb-10 text-my-white bg-network bg-center lg:bg-left md:pb-[6.25rem]"
    >
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
            <div className="lg:flex lg:flex-wrap">
              <Button text="About Me" link="/about" size="md"/>
              <Socials fontColor="orange" hoverColor="white"/>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0 h-[400px]">
              <span className="absolute -bottom-0 left-1/2 z-0 -translate-x-1/2 md:scale-125">
                <svg viewBox="0 0 200 200" height="400" width="400" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FF782D" d="M34.3,-65.3C43.6,-54.1,49.5,-43.1,57.6,-32.2C65.8,-21.3,76.1,-10.7,79.4,1.9C82.8,14.6,79.2,29.1,70.4,38.7C61.5,48.2,47.3,52.7,34.6,54.1C22,55.5,11,53.9,-1.8,56.9C-14.5,60,-29.1,67.8,-41.7,66.3C-54.3,64.9,-64.9,54.3,-71.7,41.7C-78.5,29.1,-81.4,14.5,-80.1,0.8C-78.7,-13,-73.1,-26,-63.2,-33.3C-53.4,-40.6,-39.4,-42.3,-28.2,-52.4C-17,-62.4,-8.5,-80.8,2,-84.3C12.5,-87.9,25.1,-76.5,34.3,-65.3Z" transform="translate(100 100) scale(1.1)" />
                </svg>
              </span>
              <img 
                src={hero} 
                alt="devan" 
                className="mx-auto max-w-full lg:max-h-[500px] max-h-[400px] brightness-90 z-10" 
                draggable="false"
              />
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

function Works() {
  return (
    <section className="bg-my-navy py-[7.3em] bg-network4 bg-cover bg-no-repeat bg-center text-white">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 self-center pr-5 ">
            <div className="columns-2 space-y-5 gap-5">
              { works.map((work, index) => (
                <img src={work.src} alt="" className="" key={index} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 self-center mt-5 lg:pl-5">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Projects
            </h1>
            <p className="w-4/5">
              I've been working on many projects and side projects.
              Every project i have worked on, i always learned something new.
            </p>
            <Button text="Projects" size="md" link="/portfolio"/>
          </div>
        </div>
      </div>
    </section>
  )
}

function Terminal() {
  return (
    <section className="bg-my-navy py-[7em] text-white bg-network2 lg:bg-cover bg-center">
      <div className="container py-5 ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 self-center pr-5">
            <div className="relative bg-my-orange rounded-xl">
              <img src={preview} alt="terminal" className="h-full z-90" draggable="false"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 self-center mt-5 lg:pl-5">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Check out my mini terminal!
            </h1>
            <p className="">
              Built with tree data structure to mimick linux filesystem.
            </p>
            <Button text="Mini Terminal" size="md" link="/terminal"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <>
      <Hero/>
      <Works/> 
      <Terminal/>
    </>
  )
}