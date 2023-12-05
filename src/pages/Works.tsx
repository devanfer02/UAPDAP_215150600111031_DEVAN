import { useEffect } from "react"

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
          My Works
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full">
            <img src="" alt="" />
          </div>
          <div className="w-full">

          </div>
        </div>
      </div>
      
    </section>
  )
}