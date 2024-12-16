"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  WebDesign,
  SocialMediaManagement,
  PaidAdvertising,
  MobileAppDevelopment,
  Copywriting,
  Contentcreation,
} from "@/components/Roadmap";

const tabConfig = [
  {
    id: "webdesign",
    label: "Web Design",
    introduction: `At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality. Our web design services
     ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized websites that deliver a 
     seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform, we bring your vision to 
     life and drive real business results. Let us transform your online presence today!`,
    component: <WebDesign />,
  },
  {
    id: "socialmediamanagement",
    label: "Social Media Management",
    introduction: `At ROIInnovators, we manage your social media so you can focus on growing your business. We create engaging content, build brand awareness, 
    and foster meaningful connections with your audience across platforms like Facebook, Instagram, TikTok and LinkedIn. Our data-driven strategies ensure consistent
    growth and measurable results. Let us handle your social media presence, and watch your business thrive!`,
    component: <SocialMediaManagement />,
  },
  {
    id: "paidadvertising",
    label: "Paid Advertising",
    introduction: `At ROIInnovators, our paid advertising services are designed to drive targeted traffic and boost conversions.
     We create tailored ad campaigns across platforms like Google, Facebook, TikTok and Instagram, optimizing every dollar to ensure 
     maximum ROI. From strategy to execution, we help you reach the right audience and achieve measurable results that grow your business. 
     Let’s turn clicks into customers!`,
    component: <PaidAdvertising />,
  },
  {
    id: "mobileappdevelopment",
    label: "Mobile App Development",
    introduction: `At ROIInnovators, we create custom mobile apps that elevate your business. From concept to launch, we develop intuitive, 
    high-performance apps for iOS and Android, designed to engage users and streamline your operations. Whether it’s an app to boost customer
     interaction or simplify internal processes, we deliver innovative solutions tailored to your goals. Let’s turn your app idea into reality!`,
    component: <MobileAppDevelopment />,
  },
  {
    id: "copywriting",
    label: "Copy Writing",
    introduction: `At ROIInnovators, our copywriting services focus on crafting compelling text that grabs attention and drives action. Copywriting 
    is the art of creating persuasive content for websites, ads, and social media that speaks directly to your audience and encourages them to engage 
    with your business. Whether you need catchy headlines or engaging product descriptions, we’ll help tell your story and boost conversions with words that work!`,
    component: <Copywriting />,
  },
  {
    id: "contentcreation",
    label: "Content Creation",
    introduction: `At ROIInnovators, we create captivating content that speaks to your audience and elevates your brand. From eye-catching visuals to 
    engaging videos, we craft content tailored to your business goals. To get you started, we’re offering one free video—no strings attached! Let’s showcase 
    what we can do and help your business stand out online.`,
    component: <Contentcreation />,
  },
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(tabConfig[0].id);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="service"
      className="relative"
    >
      {/* Header Section */}
      <div className="text-center">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-3xl leading-tight md:text-[45px] font-bold p-4 xl:px-72 my-14"
        >
          Here&apos;s What You&apos;re Gonna Get in Each Service
        </motion.h1>

        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('https://data.moonscdn.com/prompt/slices/2/watermarked/blue-road-black-background_JAKLl.png')" }}
        >
          <div className="bg-slate-950/85">
            <div className="py-5 mt-10 container mx-auto z-10">
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: -40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-body-color text-xl md:text-2xl pt-10 pb-2"
              >
                Select a Service
              </motion.p>


              {/* Tabs */}
              <motion.ul
                ref={ref}
                initial={{ opacity: 0, y: -40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                transition={{ duration: 0.5, delay:0.3, ease: "easeOut" }}
                className="flex flex-wrap justify-center text-center text-xs md:text-base mb-4"
                role="tablist"
              >
                {tabConfig.map(({ id, label }) => (
                  <li key={id} className="lg:w-auto w-1/2 p-1" role="presentation">
                    <button
                      className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === id
                        ? "text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]"
                        : "text-white hover:border-iceblue border-white hover:text-iceblue"
                        }`}
                      onClick={() => setActiveTab(id)}
                      type="button"
                      role="tab"
                      aria-controls={id}
                      aria-selected={activeTab === id}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </motion.ul>
              {/* Tab Content */}
              <div>
                {tabConfig.map(
                  ({ id, label, introduction, component }) =>
                    activeTab === id && (
                      <motion.div
                        key={id}
                        ref={ref}
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                        transition={{ duration: 0.5, delay:0.5 ,ease: "easeOut" }}
                        role="tabpanel"
                        aria-labelledby={`${id}-tab`}
                      >
                        <h1 className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                          {label}
                        </h1>
                        <div className="pb-5">
                          <h1 className="border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center">
                            Introduction
                          </h1>
                          <p className="pt-2 text-md text-gray-300 font-extralight text-justify">
                            {introduction}
                          </p>
                        </div>
                        <div className="pb-5">
                          <h1 className="my-2 border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center">
                            Milestone Map
                          </h1>
                          {component}
                        </div>
                        <div className="flex justify-center">
                          <Link href={`/${id}form`}>
                            <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold rounded-xl border-primary border hover:scale-110 transition-all duration-300 text-white">
                              Get Started
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
