"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Immediate Access",
    href: "https://uideck.com",
    image: "/images/brands/1.png",
  },
  {
    id: 2,
    name: "7-day Gurrantee",
    href: "https://lineicons.com",
    image: "/images/brands/3.png",
  },
  {
    id: 3,
    name: "Always Up-to-date",
    href: "https://tailgrids.com",
    image: "/images/brands/2.png",
  },
  {
    id: 4,
    name: "Secure Purchase",
    href: "https://graygrids.com",
    image: "/images/brands/4.png",
  },

];

const Brands = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-16">   
     <motion.div
                ref={ref} 
                initial={{opacity: 0 }}
                animate={isInView ? { opacity: 1} : { opacity: 0}}
                transition={{ duration: 1, delay: 0, ease: "easeOut" }}
                className="wow fadeInUp"
              >
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className="wow border-t-4 border-b-4 border-iceblue fadeInUp m-auto grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-full px-8 py-4"
            
          >
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
      </motion.div> 
    </section>
  );
};

export default Brands;


const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="grayscale hover:grayscale-0 flex w-full items-center justify-center py-[5px] max-w-full">
      <p className="relative md:h-10 md:w-10 h-8 w-8">
        <Image src={image} alt={name} fill />  
      </p>
      <p className="font-blue text-iceblue md:text-xl text-xs line-height-2 text-left ml-2"> {name} </p>
    </div>
  );
};
