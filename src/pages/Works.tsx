import { useEffect } from "react"
import { organization } from "../utils/assets/assets.organization"

export default function WorksPage() {
  useEffect(() => {
    document.title = 'My Works'
  })
  return (
    <section 
      id="works" 
      className="pt-[7.3em] bg-my-navy"
    >
      <div className="container">
        <h1 className="text-my-orange font-bold uppercase text-4xl text-center">
          Works
        </h1>
        <div className="flex flex-wrap container mx-auto justify-center pt-[3em] pb-[3em]">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            { organization.map((org, index) => (
              <div key={index} className="lg:text-center">
                <img src={org.src} alt="" className="max-h-[150px] lg:mx-auto" />
                <h1>
                  {org.name}
                </h1>
                <p>
                  {org.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}