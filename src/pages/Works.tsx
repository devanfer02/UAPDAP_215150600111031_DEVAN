import { organization } from "../utils/assets/assets.organization"

export default function WorksPage() {
  
  return (
    <section 
      id="works" 
      className="pt-[7em] lg:pt-[5.3em] bg-my-navy bg-network4"
    >
      <div className="container">
        <h1 className="text-my-orange font-bold uppercase text-4xl text-center">
          Works
        </h1>
        <p className="text-my-white text-center mt-5 lg:text-xl">
          Here's my work and organization activies throughout my life.  
        </p>
        <div className="container pt-[1em] pb-[3em]">
          { organization.map((org, index) => (
            <div key={index} className="lg:mx-16 bg-my-orange flex flex-wrap my-7 border-2 border-my-white rounded-lg">
              <div className="bg-white flex justify-center items-center w-full lg:w-1/5">
                <img src={org.src} alt="" className="max-h-[150px] lg:mx-auto rounded-l-lg" />
              </div>
              <div className="w-full lg:w-4/5 self-center p-8">
                <h1 className="uppercase text-2xl text-my-navy font-bold mb-0">
                  {org.name}
                </h1>
                <span className="font-semibold block">{org.position}</span>
                <div className="h-[1px] bg-my-navy mb-2 "></div>
                <p 
                  className=""
                  dangerouslySetInnerHTML={ { __html: org.desc} }
                >
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}