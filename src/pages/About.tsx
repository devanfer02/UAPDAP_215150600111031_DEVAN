import { useEffect } from "react"
import meback from '../assets/images/organization/bcc.jpg'
import Socials from "../components/Socials"
import TechStack from "../components/TechStack"
import Input from "../components/Input"
import Card from "../components/Card"
import Button from "../components/Button"

function ContactForm() {
  return (
    <Card className="flex flex-wrap bg-my-white bg-opacity-70 border-my-navy">
      <div className="lg:w-1/2 p-2">
        <img 
          src={meback} 
          alt="devan" 
          className="lg:rounded-l-xl rounded-t-xl"
          loading="lazy"
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <form action="" className="container p-5">
          <Input type="text" placeholder="Devan F" label="Your Name"/>
          <Input type="text" placeholder="devan@gmail.com" label="Your Email"/>
          <div className="">
            <label 
              htmlFor=""
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <textarea 
              className="border-2 border-my-navy rounded-lg 
              focus:ring-my-orange focus:border-my-orange 
                w-full focus:outline-none p-[0.3em] resize-none"
              placeholder="message"
              rows={2}
            />
          </div>
          <div className="justify-end ">
            <Button text="Send" size="sm"/>
          </div>
        </form>
      </div>
    </Card>
  )
}

function AboutInfo() {
  return (
    <div className="flex flex-wrap bg-my-white bg-opacity-20">
      <div className="w-full px-4 mb-10 lg:w-1/2 lg:px-8">
        <h3 className="font-bold text-my-orange text-2xl mb-4 lg:text-3xl">
          Who am I?
        </h3>
        <p className="font-medium text-base text-my-navy max-w-xl lg:text-lg">
          My name is Devan Ferrel, you can call me Devan.
          I'm currently enrolled as a student in Universitas Brawijaya, majoring
          Information Technology Education. I'm from Bekasi, West Java.
          I have many hobbies, such as coding, solving programming problems, playing bullet and blitz chess, 
          listening to music
          and watch some animes. Mainly, i do backend stuff with golang or typescript, but 
          you can definitely count me on simple frontend work.
          I also like to teach people because it helped me to communicate better, express
          my thoughts clearly to them and understand more about my knowledge that i already learned.
        </p>
      </div>
      <div className="w-full px-4 lg:w-1/2 lg:px-8">
        <h3 className="font-bold text-my-orange text-2xl mb-4 lg:text-3xl">
          Let's Connect
        </h3>
        <p className="font-medium text-base text-my-navy mb-6 lg:text-lg">
          Let's connect through my social media so we can discuss about 
          our hobbies, especially if we share same hobby and make a project together!
        </p>
        <Socials fontColor="navy" hoverColor="orange"/>
      </div>
    </div>
  )
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me'
  })

  return (
    <section id="about" className="pt-[7.3em] pb-28 lg:px-28 bg-network3 bg-contain lg:bg-center">
      <div className="container ">
        <h1 className="font-bold text-my-orange text-4xl mb-4 uppercase text-center">
          About Me
        </h1>
        <div className="bg-my-navy h-[4px] mb-5"/>
        <AboutInfo/>
        <h1 className="font-bold text-my-orange text-4xl mb-4 uppercase text-center mt-10 lg:mt-3">
          Tech Stack
        </h1>
        <TechStack/>
        <div className="text-center mt-12 mb-5">
          <h1 className="font-bold text-my-orange text-4xl mt-10 mb-4 uppercase text-center">
            Contact Me
          </h1>
          <p className="text-my-navy text-lg font-semibold">
            Get in touch with me if you need something to discuss with me.
          </p>
        </div>
        <ContactForm/>
      </div>
    </section>
  )
}