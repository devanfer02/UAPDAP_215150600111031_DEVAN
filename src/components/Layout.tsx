import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Transition from "./Transition";
import Navbar from './Navbar'
import Footer from "./Footer";

interface LayoutParams {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutParams): JSX.Element {
  const path = useLocation().pathname

  useEffect(() => {
    document.title = pageTitle
  })

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