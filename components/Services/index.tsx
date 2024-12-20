'use client';
import { motion } from "framer-motion";
import ServiceBlock from "./serviceBlock";

export const Services = () => {
  const services = [
    { title: "Web Design", imgSrc: "/images/services/Web-Design.png", order: "textFirst" },
    { title: "Social Media Management", imgSrc: "/images/services/Social-Media-Managment.png", order: "imageFirst" },
    { title: "Paid Advertising", imgSrc: "/images/services/Paid-Ads.png", order: "textFirst" },
    { title: "Mobile App Development", imgSrc: "/images/services/mobile-app-dev.png", order: "imageFirst" },
    { title: "Copy Writing", imgSrc: "/images/services/Copywriting.png", order: "textFirst" },
    { title: "Content Writing", imgSrc: "/images/services/Content-Creation.png", order: "imageFirst" },
  ];

  return (
    <section id="services" className="relative overflow-x-clip">
    <div className="font-sans">
      <div className="absolute opacity-20 md:opacity-55 justify-center z-[-1] transition -translate-x-96">
        <div className="w-[400px] h-[1000px] rounded-full blur-[100px] bg-gradientbg2 "> </div>
      </div>
      <div className="absolute right-0 translate-x-80 opacity-20 md:opacity-55 z-[-1]">
        <div className="w-[340px] h-[1000px] rounded-full blur-[100px] bg-gradientbg2"></div>
      </div>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-3xl leading-tight md:text-[45px] font-bold p-4 xl:px-72"
          >
            Our Digital Marketing Services
          </motion.h1>
        </div>

        {/* Services List */}
        {services.map((service, index) => (
          <ServiceBlock
            key={index}
            title={service.title}
            imgSrc={service.imgSrc}
            order={service.order}
            index={index + 1}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default Services;
 