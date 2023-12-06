import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Transition from "./Transition";
import Navbar from './Navbar'
import Footer from "./Footer";

interface LayoutParams {
  children: ReactNode
}

export default function Layout({ children }: LayoutParams): JSX.Element {
  const path = useLocation().pathname

  return (
    <>
      <Navbar/>
      <AnimatePresence mode="popLayout">
        <motion.div className="h-full">
          <Transition key={path}/>
          { children }
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </>
  )
}