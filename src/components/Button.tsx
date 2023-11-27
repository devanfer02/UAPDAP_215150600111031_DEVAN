interface ButtonParams {
  text: string;
  link?: string;
}

export default function Button({ text, link }: ButtonParams)  {
  return (
    <div className="my-5">
      <a 
        href={link}
        className="text-base font-semibold 
          text-white bg-my-orange
          py-4 px-8 rounded-full
          hover:border-my-orange hover:bg-my-white hover:text-my-orange
          transition duration-300 ease-in-out"
      >
        {text}
      </a>
    </div>
  )
}