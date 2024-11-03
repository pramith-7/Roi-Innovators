"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";


const Video = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="home" className="relative">
            <div className="absolute md:left-[15%] opacity-55 justify-center z-[-1] transition -translate-y-72">
                <div className="w-[1000px] h-[400px] rounded-full bg-gradientbg blur-[100px]"> </div>
            </div>

            <div className="h-screen bg-[url('/images/wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/60 to-black"></div>

                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: -40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                            className="wow fadeInUp"
                        >
                            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl mb-4 tracking-widest">
                                WHAT WE ARE <br /> CAPABLE DOING
                            </h1>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: -40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="wow fadeInUp"
                        >
                            <p className="text-iceblue font-semibold tracking-widest leading-normal text-sm md:text-md lg:px-54 lg:text-xl py-5">
                                RoiInnovator Is a Place , Where We Transform <br /> Your Middle-Class Business Into a Powerful Digital Presence Tool for Business Growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Video;