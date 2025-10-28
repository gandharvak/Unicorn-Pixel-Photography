import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";


const LogoIntro = ({ onAnimationComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onAnimationComplete(); // tells parent animation done
        }, 2500); // 2.5 sec
        return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-white z-50"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                >
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-32 h-32 object-contain"
                        initial={{ scale: 0, opacity: 0, y: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LogoIntro;
