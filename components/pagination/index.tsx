"use client";
import { useState, useRef } from 'react';
import { WebDesign, SocialMediaManagement, PaidAdvertising, MobileAppDevelopment, Copywriting, Contentcreation } from '@/components/Roadmap';
import { motion, useInView } from 'framer-motion';

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="service">
      <div className="mt-10 m-auto container lg:px-10">
        <div className="mb-4 border-gray-700">
          <motion.div
            ref={ref} 
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} 
            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            className="wow fadeInUp"
          >
            <h1 className='text-white mbtext-3xl font-bold !leading-tight text-3xl md:text-[45px] text-center p-4 xl:px-72 '>
              Here&apos;s What You&apos;re Gonna Get in Each Service
            </h1>

            <p className="!leading-relaxed text-body-color md:text-2xl text-xl text-center pt-10 pb-2">
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'webdesign'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'socialmediamanagement'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'settings'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'contacts'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'Copy Writing'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
                  className={`p-2 border rounded-lg w-full lg:w-48 lg:h-20 ${activeTab === 'Content Creation'
                    ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]'
                    : 'text-white hover:border-iceblue border-white hover:text-iceblue'
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
        <div className='bg-slate-950/85'>
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Web Design
                    </h1>

                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >

                    <div className='pb-5'>
                      <h1 className='border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='pt-2 text-md text-gray-300 font-extralight text-justify'>
                        At <span className='font-bold'>ROIInnovators</span>, we craft custom websites that blend stunning design with flawless functionality.
                        Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized websites that deliver a seamless user experience across all devices.
                        Whether it’s a sleek landing page or a full e-commerce platform, we bring your vision to life and drive real business results. Let us transform your online presence today!
                      </p>
                    </div>

                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'>  Milestone Map </h1>
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Social Meida Management
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >

                    <div className='pb-5'>
                      <h1 className='border-iceblue bg-black/90 border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='pt-2 text-md text-gray-300 font-extralight text-justify'>
                        At <span className='font-bold'>ROIInnovators</span>, we manage your social media so you can focus on growing your business. 
                        We create engaging content, build brand awareness, and foster meaningful connections with your audience across platforms like Facebook, 
                        Instagram, TikTok and LinkedIn. Our data-driven strategies ensure consistent growth and measurable results. Let us handle your social media 
                        presence, and watch your business thrive!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Milestone Map </h1>
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Paid Advertising
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className='pb-5'>
                      <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, our paid advertising services are designed to drive targeted traffic and boost conversions.
                        We create tailored ad campaigns across platforms like Google, Facebook, TikTok and Instagram, optimizing every dollar to ensure maximum ROI.
                        From strategy to execution, we help you reach the right audience and achieve measurable results that grow your business. Let’s turn clicks into customers!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Milestone Map </h1>
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Mobile App Development
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className='pb-5'>
                      <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='p-2 text-md text-gray-300 font-extralight text-justify'> <span className="font-bold">ROIInnovators</span>, we create custom mobile apps that elevate your business.
                        From concept to launch, we develop intuitive, high-performance apps for iOS and Android, designed to engage users and streamline your operations.
                        Whether it’s an app to boost customer interaction or simplify internal processes, we deliver innovative solutions tailored to your goals. Let’s turn your app idea into reality!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Milestone Map </h1>
                      <MobileAppDevelopment />
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Copy Writing
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className='pb-5'>
                      <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, our copywriting services focus on crafting compelling text that grabs attention and drives action.
                        Copywriting is the art of creating persuasive content for websites, ads, and social media that speaks directly to your audience and encourages them to engage with your business.
                        Whether you need catchy headlines or engaging product descriptions, we’ll help tell your story and boost conversions with words that work!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Milestone Map </h1>
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
                    <h1
                      className="text-4xl md:text-6xl my-7 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
                      Content Creation
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className='pb-5'>
                      <h1 className='border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Introduction </h1>
                      <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At <span className='font-bold'>ROIInnovators</span>, we create captivating content that speaks to your audience and elevates your brand.
                        From eye-catching visuals to engaging videos, we craft content tailored to your business goals. To get you started, we’re offering one free video—no strings attached!
                        Let’s showcase what we can do and help your business stand out online.
                      </p>
                    </div>

                  </motion.div>

                  <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className='pb-5'>
                      <h1 className='my-2 border-iceblue border bg-black/90 p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] text-center'> Milestone Map </h1>
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



