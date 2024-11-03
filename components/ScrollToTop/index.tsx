import { useEffect, useState } from "react";

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
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => { 
      setIsVisible(true);   
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
<div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToService}
          aria-label="scroll to service"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-black border-2 border-iceblue text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg hover:scale-105"
        >
          <span className="text-center leading-1 text-sm"> Start </span>
        </div>
      )}
    </div>

<div className="fixed top-8 right-8 z-[99]">
{isVisible && (

 <img src="/images/whatsapp.png" className="w-10 h-10 items-center justify-center hover:scale-105"/>
)}
</div>
</>
  );
}
