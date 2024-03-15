interface ButtonParams {
  text: string;
  size: string;
  link?: string;
}

interface Size {
  sm: string;
  md: string;
}

const sizeVariants: Size = {
  sm: 'py-2 px-4',
  md: 'py-4 px-8'
}

export default function Button({ text, size, link }: ButtonParams): JSX.Element  {
  return (
    <div className="my-5">
      <a 
        href={link}
        className={`text-base font-semibold 
          text-white bg-my-orange
          ${sizeVariants[size as keyof Size]} rounded-2xl
          hover:border-my-orange hover:bg-my-white hover:text-my-orange
          transition duration-300 ease-in-out`}
      >
        {text}
      </a>
    </div>
  )
}