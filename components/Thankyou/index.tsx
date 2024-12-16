"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";

const Thankyou = () => {
  const [showFireworks, setShowFireworks] = useState(true);

  // Hide fireworks after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(false);
    }, 10000); // Show fireworks for 5 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="container">
      {/* Fireworks animation */}
      {showFireworks && (
        <div className="fireworks-container">
          {/* You can add CSS animation here for the fireworks effect */}
          <div className="fireworks"></div>
        </div>
      )}

      {/* framer motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="row h-screen flex justify-center items-center relative">
          <div className="py-10 md:10/12 bg-black/70 lg:w-8/12 flex flex-col justify-center items-center text-center border-2 border-iceblue p-6 rounded-lg z-10">
            <h1 className="py-5 text-2xl md:text-4xl font-bold text-white">Your form has been submitted successfully!</h1>
            <Link href="/">
              <button className="bg-black border-2 border-iceblue hover:bg-iceblue hover:text-black hover:border-black text-white font-bold py-2 px-10 rounded mt-4">
                 Go to Homepage
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

    </div>

    
  );
};

export default Thankyou;
