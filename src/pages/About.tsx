import { useEffect } from "react"
import Socials from "../components/SocialIcons"

export default function About() {
  useEffect(() => {
    document.title = 'About Me'
  })

  return (
    <section id="about" className="pt-[7.3em] pb-28 lg:px-28 bg-network2 bg-cover bg-center">
      <div className="container">
        <h1 className="font-bold text-my-orange text-4xl mb-4 uppercase text-center">
          About Me
        </h1>
        <div className="bg-my-navy h-[4px] mb-5"/>
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:px-8">
            <h3 className="font-bold text-my-orange text-2xl mb-4 lg:text-3xl">
              Who am I?
            </h3>
            <p className="font-medium text-base text-my-navy max-w-xl lg:text-lg">
              My name is Devan Ferrel, you can call me Devan.
              I'm currently enrolled as a student in Universitas Brawijaya, majoring
              Information Technology Education with NIM 225150600111031. I'm from Bekasi, West Java.
              I have many hobbies, such as coding, solving programming problems, listening to music
              and watch some animes. Mainly, i do backend stuff with golang or typescript, but 
              you can definitely count me on simple frontend work.
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
            <Socials fontColor="text-my-navy" hoverColor="text-my-orange"/>
          </div>
        </div>
      </div>
    </section>
  )
}