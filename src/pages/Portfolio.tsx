import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { portfolios, categories, Portfolio } from "../utils/assets/assets.portfolio"
import Card from "../components/Card"
import ParticleContainer from "../components/ParticleContainer"
import { Icon } from "@iconify/react"

const getMatrixVer = (arr: Portfolio[]) => {
  const newArr = []
  const copy = arr.slice()
  while(copy.length) newArr.push(copy.splice(0,1))

  return newArr
}

export default function PortfolioPage() {
  const [ listPortfolios, setListPortfolios ] = useState(getMatrixVer(portfolios))
  const [ active, setActive ] = useState(categories[2])

  const getCategoryClass = (category: string): string => {
    if (category === active ) {
      return 'text-my-orange bg-my-navy'
    }

    return 'text-my-navy bg-my-orange'
  }

  useEffect(() => {
    const filtered = portfolios.filter(portfolio => {
      if (active === categories[2]) return portfolio
      return portfolio.category === active
    })

    setListPortfolios(getMatrixVer(filtered))

  }, [active])

  return (
    <section id="portfolio" className="pt-[7em] pb-28 lg:px-28 bg-cover bg-center z-100">
      <ParticleContainer lineColor="navy" squareColor="navy" front={false}/>
      <div className="flex items-center text-center justify-center">
        <h1 className="text-my-orange uppercase text-4xl font-bold text-center mb-5 bg-my-navy py-3 lg:w-1/2 px-5 lg:px-2">
          My Portfolio
        </h1>
      </div>
      <div className="flex flex-wrap text-center justify-center">
        { categories.map((category, index) => (
          <p 
            key={index} 
            className={`
              lg:mx-2 mx-1 w-50 ${getCategoryClass(category)} 
              lg:px-3 px-2 py-1 rounded-2xl uppercase font-bold
              cursor-pointer duration-300 ease-in-out text-sm mt-1 lg:mt-0`
            }
            onClick={() => setActive(category)}
            >
            {category}
          </p>
        ))}
      </div>
      <div className="w-full pb-100 mt-5 px-5 mx-auto mb-10 gap-5 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid">
        { listPortfolios.map((portfolios, index) => (
          <div className="grid gap-4" key={index}>
            { portfolios.map((portfolio) => (
              <Card className="group" key={portfolio.name}>
                <Link to={portfolio.link} target="_blank" className="flex justify-center items-center bg-my-orange rounded-t-lg h-[300px] lg:h-[200px] ">
                  <img 
                    src={portfolio.img} 
                    alt={portfolio.name} 
                    className="cursor-pointer group-hover:brightness-50 duration-200 ease-in-out rounded-t-lg object-cover w-full h-full" 
                    loading="lazy"
                  />
                </Link>
                <div className="items-center justify-center my-2 pb-3 container text-my-white">
                  <h1 
                    className="text-my-orange uppercase font-bold 
                    group-hover:text-my-lightgray duration-200 ease-in-out 
                    text-center xl:text-lg text-sm md:text-md"
                    >
                    {portfolio.name}
                  </h1>
                  <p className="italic text-center text-sm lg:text-md">
                    {portfolio.category}
                  </p>
                  <p className="text-sm my-2 pb-2">
                    {portfolio.desc}
                  </p>
                  { !!portfolio.techstacks.length && (
                    <div className="">
                      <p>Tech Stacks </p>
                      <div className="flex my-2">
                        { portfolio.techstacks.map(techstack => (
                          <Icon 
                            icon={techstack} 
                            key={techstack} 
                            width={34} height={34} 
                            className="mr-2 bg-white rounded-xl"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
          )) }
      </div>
    </section>
  )
}