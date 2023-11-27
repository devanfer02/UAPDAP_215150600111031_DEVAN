const dotNames = [
  'dot one', 'dot two', 'dot three', 'dot four'
]

export default function Loading() {
  
  return (
    <section className="bg-my-navy h-screen">
      <div className="flex items-center justify-center h-full">
        <div>
          <h1 className="text-my-orange text-5xl font-bold uppercase">
            Loading
          </h1>
          <div className="flex text-center justify-center">
            { dotNames.map((dot, index) => (
              <h1 className={`${dot} text-white text-7xl font-bold inline relative mx-3 -top-[0.5em]`} key={index}>
                .
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}