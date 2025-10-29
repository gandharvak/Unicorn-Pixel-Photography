import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";


const LogoIntro = ({ onComplete }) => {
  const [moveToCorner, setMoveToCorner] = useState(false);
   const [fadeOut, setFadeOut] = useState(false);
  const isMobile = useIsMobile();

useEffect(() => {
    const timer1 = setTimeout(() => setMoveToCorner(true), 1500); // move
    const timer2 = setTimeout(() => setFadeOut(true), 500); // fade out bg
    const timer3 = setTimeout(() => onComplete(), 1500); // notify done
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);


  // ✅ Responsive end position for logo
  const finalTop = isMobile ? -16 : -12;
  const finalLeft = isMobile ? 0 : "8.7rem";
  const finalScale = isMobile ? 0.8 : 0.8;


  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
       animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-32 h-32 object-contain absolute"
        initial={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale: 1,
        }}
        animate={
          moveToCorner
            ? {
                top: finalTop, // distance from top (adjust as per navbar)
                left: finalLeft, // distance from left (adjust as per navbar)
                x: 0,
                y: 0,
                scale: finalScale, // shrink a bit
                transition: {
                  duration: 1.2,
                 ease: [0.6, 0.05, -0.01, 0.99],
                },
              }
            : {}
        }
      />
    </motion.div>
  );
};

export default LogoIntro;