"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Image from "next/image";

export default function ScrollToService() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the "service" section
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Check visibility of "pagination" section
    const paginationSection = document.getElementById("service");
    if (!paginationSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      }
    );

    observer.observe(paginationSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[99]">
        {isVisible && (
          <div
            onClick={scrollToService}
            aria-label="scroll to service"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-black border-2 border-iceblue text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg hover:scale-105"
          >
            <span className="text-center leading-1 text-lg"> <FaAngleUp /> </span>
          </div>
        )}
      </div>

      <div className="fixed top-8 right-8 z-[99]">
          <Image
            src="/images/whatsapp.png"
            alt="whatsapp"
            width={35}
            height={35}
            className="cursor-pointer"
            onClick={() => window.open("https://wa.me/2348137877395", "_blank")}
          />     
      </div>
    </>
  );
}
