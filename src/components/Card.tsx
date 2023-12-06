import { ReactNode } from "react";

interface CardParams {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardParams ): JSX.Element {
  return (
    <div 
      className={`bg-my-navy border-2
      border-[#112857] rounded-lg shadow ${className}
      shadow-lg`}
    >
      { children }
    </div>
  )
}