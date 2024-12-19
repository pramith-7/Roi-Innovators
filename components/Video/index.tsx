"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";


const Video = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="video" className="relative overflow-x-clip py-20">
      <div className="container xl:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }} 
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center w-full">
            <div className="w-full h-[300px] md:h-[400px] max-w-4xl aspect-w-16 aspect-h-80">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UK1zH4L2DOQ?si=U01QUBkIwOQbquQ_"
                title="YouTube video player"
                allow=""
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full m-auto">
        <motion.div
          ref={ref} // Attach the ref to the element
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }} // Only animate when in view
          transition={{ duration: 0.5, delay: 0.5 , ease: "easeOut" }}
        >
          <a href="#service">
          <button className="bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
            Get a Free Consultation
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
