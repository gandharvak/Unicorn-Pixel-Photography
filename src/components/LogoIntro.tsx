import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

const LogoIntro = ({ onComplete }) => {
  const [moveToCorner, setMoveToCorner] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [target, setTarget] = useState({ top: 0, left: 0, scale: 1 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const navbarLogo = document.querySelector("#navbar-logo");
    if (navbarLogo) {
      const rect = navbarLogo.getBoundingClientRect();
      setTarget({
        top: rect.top + window.scrollY - 25,
        left: rect.left + window.scrollX - 15,
        scale: isMobile ? 0.8 : 0.8,
      });
    }

    // 🕒 Animation timings
    const timer1 = setTimeout(() => setMoveToCorner(true), 1500);
    const timer2 = setTimeout(() => setFadeOut(true), 1000);
    const timer3 = setTimeout(() => onComplete(), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete, isMobile]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-[60] pointer-events-none"
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ delay: 2.3, duration: 0.6 }}
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
                top: target.top,
                left: target.left,
                x: 0,
                y: 0,
                scale: target.scale,
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
