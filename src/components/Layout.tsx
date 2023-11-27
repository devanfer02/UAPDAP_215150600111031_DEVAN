import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Transition from "./Transition";
import Navbar from './Navbar'

interface LayoutParams {
  children: ReactNode
}

export default function Layout({ children }: LayoutParams) {
  const path = useLocation().pathname

  return (
    <>
      <Navbar/>
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition key={path}/>
          { children }
        </motion.div>
      </AnimatePresence>
    </>
  )
}