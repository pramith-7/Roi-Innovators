"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brandsData: Brand[] = [
  { id: 1, name: "Immediate Access",  image: "/images/brands/1.png" },
  { id: 2, name: "7-day Guarantee", image: "/images/brands/3.png" },
  { id: 3, name: "Always Up-to-date", image: "/images/brands/2.png" },
  { id: 4, name: "Secure Purchase", image: "/images/brands/4.png" },
];

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="border-t-2 border-b-2 border-gray-400 grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-4 place-items-center">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="grayscale hover:grayscale-0 flex items-center justify-center py-2">
      <div className="relative h-8 w-8 md:h-10 md:w-10">
        <Image src={image} alt={name} fill priority />
      </div>
      <p className="text-iceblue text-xs md:text-lg ml-2"> {name} </p>
    </div>
  );
};
