"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  { id: 1, name: "Innovative Pricing for Financial Flexibility", image: "/images/testimonials/1.png", delay: 0.1 },
  { id: 2, name: "Strategic Partnership", image: "/images/testimonials/1.png", delay: 0.3 },
  { id: 3, name: "Tailored Solutions", image: "/images/testimonials/1.png", delay: 0.6 },
  { id: 4, name: "Comprehensive Services", image: "/images/testimonials/1.png", delay: 0.9 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="benefits" className="relative py-16 md:py-20 lg:py-28 overflow-x-clip">
      <div className="absolute opacity-20 justify-center z-[-1] transition-all translate-x-80 translate-y-24">
        <div className="w-[800px] h-[600px] rounded-full blur-[100px] bg-gradientbg"></div>
      </div>

      <div className="container px-10">
        <motion.div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="wow fadeInUp"
        >
          <SectionTitle
            title="Why Choose Us"
            paragraph="Here are the benefits we offer for you"
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 xl:gap-x-8 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {testimonialData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: testimonial.delay, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-5 right-0 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.3 422.819 -70.8145)"
            fill="url(#paint0_linear)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.3 426.568 144.886)"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute left-0 bottom-5 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            {[12, 1, 23, 35].map((offset, index) => (
              <path
                key={index}
                d={`M-57 ${offset}L50.0728 ${offset + 62}C55.5501 ${offset + 67} 70.8513 ${
                  offset + 73
                } 88.2373 ${offset + 66}C109.97 ${offset + 59} 116.861 ${
                  offset + 48
                } 156.615 ${offset + 51}C178.778 ${offset + 53} 195.31 ${
                  offset + 57
                } 205.911 ${offset + 50}C216.513 ${offset + 43} 224.994 ${
                  offset + 35
                } 243.016 ${offset + 37}C255.835 ${offset + 38} 265.278 ${
                  offset + 38
                } 278 ${offset + 33}`}
                stroke={`url(#paint${index}_linear)`}
              />
            ))}
          </g>
          <defs>
            {[...Array(4)].map((_, i) => (
              <linearGradient
                key={i}
                id={`paint${i}_linear`}
                x1="256.267"
                y1={i * 12 - 8}
                x2="-40.8688"
                y2={i * 14}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
