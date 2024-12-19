'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const RoadMapItem = ({ id, stage, goal, activities, isEven }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <div
          className={`roadmap-item transition duration-500 hover:-translate-y-3  ${isEven ? 'roadmap-item--even' : 'roadmap-item--odd'
            }`}
        >
          <div className="roadmap-item__marker text-iceblue font-bold lg:text-lg text-sm lg:pt-0 pt-[2px]"> {id} </div>
          <div className="roadmap-item__content bg-black/70 shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]">
            <h3 className="roadmap-item__stage"> {stage} </h3>
            <dl className="text-left align-top">
              <dl className="font-semibold"> Goal : </dl>
              <dd className="font-extralight text-sm">  {goal} </dd>
              <dl className="font-semibold"> Activities : </dl>
              <dd className="font-extralight text-sm"> {activities} </dd>
            </dl>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RoadMapItem;
