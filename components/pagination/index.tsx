"use client";
import { useState, useRef } from 'react';
import { WebDesign, SocialMediaManagement , PaidAdvertising , MobileAppDevelopment , Copywriting , Contentcreation } from '@/components/Roadmap';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="service">
      <div className="mt-10 m-auto container lg:px-10">
        <div className="mb-4 border-gray-700">
          <motion.div
            ref={ref} // Attach the ref to the element
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            className="wow fadeInUp"
          >
            <h1 className='text-white mbtext-3xl font-bold !leading-tight text-3xl md:text-[45px] text-center p-4 xl:px-72 '>
              Here&apos;s What You&apos;re Gonna Get in Each Service
            </h1>

            <p className="!leading-relaxed text-body-color md:text-lg text-sm text-center pt-10 pb-2">
              Select a Service
            </p>
          </motion.div>

          <ul
            className="flex flex-wrap text-xs md:text-base text-center justify-center"
            role="tablist"
          >
            {/* Web Design Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'webdesign'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)]'
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('webdesign')}
                  type="button"
                  role="tab"
                  aria-controls="webdesign"
                  aria-selected={activeTab === 'webdesign'}
                >
                  Web Design
                </button>
              </motion.div>
            </li>

            {/* Social Media Management Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'socialmediamanagement'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('socialmediamanagement')}
                  type="button"
                  role="tab"
                  aria-controls="socialmediamanagement"
                  aria-selected={activeTab === 'socialmediamanagement'}
                >
                  Social Media Management
                </button>
              </motion.div>
            </li>

            {/* Paid Advertising Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'settings'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('settings')}
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected={activeTab === 'settings'}
                >
                  Paid Advertising
                </button>
              </motion.div>
            </li>

            {/* Mobile App Development Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'contacts'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('contacts')}
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected={activeTab === 'contacts'}
                >
                  Mobile App Development
                </button>
              </motion.div>
            </li>

            {/* Copy Writing Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'Copy Writing'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('Copy Writing')}
                  type="button"
                  role="tab"
                  aria-controls="Copy Writing"
                  aria-selected={activeTab === 'Copy Writing'}
                >
                  Copy Writing
                </button>
              </motion.div>
            </li>

            {/* Content Creation Tab */}
            <li className="lg:w-auto w-1/2 p-1" role="presentation">
              <motion.div
                ref={ref} // Attach the ref to the element
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
                className="wow fadeInUp"
              >
                <button
                  className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'Content Creation'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                    : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('Content Creation')}
                  type="button"
                  role="tab"
                  aria-controls="Content Creation"
                  aria-selected={activeTab === 'Content Creation'}
                >
                  Content Creation
                </button>
              </motion.div>
            </li>
          </ul>
        </div>
        </div>

        {/* Tabs Content */}
        <div id="default-styled-tab-content" className="bg-[url('https://data.moonscdn.com/prompt/slices/2/watermarked/blue-road-black-background_JAKLl.png')] bg-cover">
        <div className='bg-black/50'>
        <div className="container lg:px-10">
          {/* Web Development & Web Design Tab Content */}
          {activeTab === 'webdesign' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-webdesign"
                role="tabpanel"
                aria-labelledby="webdesign-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='text-2xl md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                 
                     <Image
                      src="/images/services/Web-Design.png"
                      alt="Web Design"
                      width={300}
                      height={260}
                      className='w-[300px] h-[260px] m-auto'  
                    />
                  </div>
                  <div className='pb-5 md:w-7/12'>
                    <h1 className='border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='pt-2 text-md text-gray-300 font-extralight text-justify'> 
                      At <span className='font-bold'>ROIInnovators</span>, we craft custom websites that blend stunning design with flawless functionality. 
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized websites that deliver a seamless user experience across all devices. 
                      Whether it’s a sleek landing page or a full e-commerce platform, we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <WebDesign />
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                   <a href="/webdesignform">
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                 </a>
                  </div>
                </motion.div>

              </div>
            </>
          )}


          {/* Social Media Management Tab Content */}
          {activeTab === 'socialmediamanagement' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-socialmediamanagement"
                role="tabpanel"
                aria-labelledby="socialmediamanagement-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Social Media Management </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                      <Image
                        src="/images/services/Social-Media-Managment.png"
                        alt="Social Media Management"
                        width={300}
                        height={260}
                        className='w-[300px] h-[260px] m-auto'
                      />
                  </div>
                  <div className='md:w-7/12 pb-5'>
                    <h1 className='border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='pt-2 text-md text-gray-300 font-extralight text-justify'>
                    At <span className='font-bold'>ROIInnovators</span>, our paid advertising services are designed to drive targeted traffic and boost conversions. 
                      We create tailored ad campaigns across platforms like Google, Facebook, TikTok and Instagram, optimizing every dollar to ensure maximum ROI. 
                      From strategy to execution, we help you reach the right audience and achieve measurable results that grow your business. Let’s turn clicks into customers!
                    </p>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <SocialMediaManagement />
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                  </div>
                </motion.div>

              </div>
            </>
          )}

          {/* Paid Advertising Tab Content */}
          {activeTab === 'settings' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Paid Advertising </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                 <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                      <Image
                          src="/images/services/Paid-Ads.png"
                          alt="Paid Advertising"
                          width={300}
                          height={260}
                          className='w-[300px] h-[260px] m-auto'
                        />
                  </div>
                  <div className='md:w-7/12 pb-5'>
                    <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, our paid advertising services are designed to drive targeted traffic and boost conversions. 
                      We create tailored ad campaigns across platforms like Google, Facebook, TikTok and Instagram, optimizing every dollar to ensure maximum ROI. 
                      From strategy to execution, we help you reach the right audience and achieve measurable results that grow your business. Let’s turn clicks into customers!

                    </p>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <PaidAdvertising />
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                  </div>
                </motion.div>

              </div>
            </>
          )}

          {/* Mobile App Development Tab Content */}
          {activeTab === 'contacts' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Mobile App Development </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                 <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                      <Image
                          src="/images/services/mobile-app-dev.png"
                          alt="Mobile App Development"
                          width={300}
                          height={260}
                          className='w-[300px] h-[260px] m-auto'
                        />
                  </div>
                  <div className='md:w-7/12 pb-5'>
                    <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> <span className="font-bold">ROIInnovators</span>, we create custom mobile apps that elevate your business. 
                    From concept to launch, we develop intuitive, high-performance apps for iOS and Android, designed to engage users and streamline your operations. 
                    Whether it’s an app to boost customer interaction or simplify internal processes, we deliver innovative solutions tailored to your goals. Let’s turn your app idea into reality!
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <MobileAppDevelopment/>
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                  </div>
                </motion.div>

              </div>
            </>
          )}

          {/* Copy Writing Tab Content */}
          {activeTab === 'Copy Writing' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Copy Writing </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                 <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                      <Image
                            src="/images/services/Copywriting.png"
                            alt="Copy Writing"
                            width={300}
                            height={260}
                            className='w-[300px] h-[260px] m-auto'
                          />
                  </div>
                  <div className='md:w-7/12 pb-5'>
                    <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, our copywriting services focus on crafting compelling text that grabs attention and drives action. 
                      Copywriting is the art of creating persuasive content for websites, ads, and social media that speaks directly to your audience and encourages them to engage with your business. 
                      Whether you need catchy headlines or engaging product descriptions, we’ll help tell your story and boost conversions with words that work!

                    </p>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <Copywriting />
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                  </div>
                </motion.div>

              </div>
            </>
          )}

          {/* Content Creation Tab Content */}
          {activeTab === 'Content Creation' && (
            <>

              <div
                className="p-4 rounded-lg"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Content Creation </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                 <div className='md:flex w-full'>
                  <div className='pb-5 md:w-5/12 bg-black/90 border shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] border-iceblue mb-5 md:mr-5 p-5 rounded-lg'>
                      <Image
                          src="/images/services/Content-Creation.png"
                          alt="Content Creation"
                          width={300}
                          height={260}
                          className='w-[300px] h-[260px] m-auto'
                        />
                  </div>
                  <div className='md:w-7/12 pb-5'>
                    <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, we create captivating content that speaks to your audience and elevates your brand. 
                      From eye-catching visuals to engaging videos, we craft content tailored to your business goals. To get you started, we’re offering one free video—no strings attached! 
                      Let’s showcase what we can do and help your business stand out online.

                    </p>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <Contentcreation />
                    <hr className='border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]' />
                  </div>
                  <div className='flex w-full justify-center'>
                    <button className="shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
                      Get Started
                    </button>
                  </div>
                </motion.div>

              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}



