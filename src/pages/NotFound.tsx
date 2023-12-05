import { useEffect } from "react"
import ParticleContainer from "../components/ParticleContainer"

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found'
  })
  return (
    <section className="bg-my-navy h-screen">
      <ParticleContainer lineColor="white" squareColor="orange" front={true}/>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-my-orange text-5xl font-bold uppercase">
          Page Not Found
        </h1>
      </div>
    </section>
  )
}