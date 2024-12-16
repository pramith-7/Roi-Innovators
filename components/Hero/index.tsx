"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particle from "./Particle";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="hero" className="relative h-screen overflow-hidden">
            <div id="tsparticles" className="absolute inset-0 -z-10">
                <Particle />
            </div>

            <div className="absolute inset-0 flex justify-center opacity-70 -translate-y-60 -z-10">
                <div className="w-[1000px] h-[400px] bg-gradientbg blur-[100px] rounded-full"></div>
            </div>

            <div className="absolute inset-0 md:bg-transparent bg-black/60 -z-10"></div>

            <div className="container flex items-center justify-center h-full">
                <div className="text-center" ref={ref}>
                
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-white font-bold text-4xl md:text-5xl lg:text-7xl mb-4 tracking-widest"
                    >
                        WHAT WE ARE <br /> CAPABLE DOING
                    </motion.h1>

                
                    <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                        className="text-iceblue font-semibold tracking-widest text-sm md:text-md lg:text-xl leading-relaxed lg:px-20 py-5 bg-gradient-to-r from-primary via-iceblue to-blue-700 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient"
                    >
                        RoiInnovator Is a Place, Where We Transform <br /> Your Middle-Class Business Into a Powerful Digital Presence Tool for Business Growth.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
