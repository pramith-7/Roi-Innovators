"use client";
import { useState, useRef } from 'react';
import { WebDesign, SocialMediaManagement } from '@/components/Roadmap';
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

        {/* Tabs Content */}
        <div id="default-styled-tab-content">
          {/* Web Development & Web Design Tab Content */}
          {activeTab === 'webdesign' && (
            <>

              <div
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
                id="styled-webdesign"
                role="tabpanel"
                aria-labelledby="webdesign-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality.
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized
                      websites that deliver a seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform,
                      we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
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
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
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
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'>
                    At ROIInnovators, we manage your social media so you can focus on growing your business. We create engaging content, build brand awareness, 
                    and foster meaningful connections with your audience across platforms like Facebook, Instagram, TikTok and LinkedIn. Our data-driven strategies 
                    ensure consistent growth and measurable results. Let us handle your social media presence, and watch your business thrive!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
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
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality.
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized
                      websites that deliver a seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform,
                      we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <WebDesign />
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
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality.
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized
                      websites that deliver a seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform,
                      we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <WebDesign />
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
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality.
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized
                      websites that deliver a seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform,
                      we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <WebDesign />
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
                className="p-4 rounded-lg bg-slate-950/40 bg-cover bg-center border-2 border-gray-800"
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className='md:text-4xl text-black my-7 py-3 text-center font-bold bg-sky-600 rounded-md'> Web Design </h1>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (01). Introduction </h1>
                    <p className='p-2 text-md text-gray-300 font-extralight text-justify'> At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality.
                      Our web design services ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized
                      websites that deliver a seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform,
                      we bring your vision to life and drive real business results. Let us transform your online presence today!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className='pb-5'>
                    <h1 className='my-2 border-iceblue border p-2 font-semibold md:text-2xl rounded-md shadow-[0_0_15px_5px_rgba(56,182,255,0.1)]'> (02). Milestone Map </h1>
                    <WebDesign />
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
    </section>
  );
}

function CoursePreview({ title, videoTitle, videoDescription, modules }) {
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 p-6 lg:p-12 bg-gray-900 text-white min-h-screen">
      {/* Video Section */}
      <div className="w-full lg:w-2/3">
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Video Placeholder"
            className="w-full h-auto rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">{videoTitle}</h2>
          <hr className="border-gray-700 mb-4" />
          <p className="text-sm text-gray-400">{videoDescription}</p>
        </div>
      </div>

      {/* Module List Section */}
      <div className="w-full lg:w-1/3">
        <div className="bg-gray-800 rounded-lg p-4">
          {modules.map((module, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleModule(index)}
                className={`w-full flex justify-between items-center p-4 text-left rounded-lg transition ${activeModule === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
              >
                <span>{module.title}</span>
                <span>{activeModule === index ? '-' : '+'}</span>
              </button>
              {activeModule === index && (
                <div className="p-4 bg-gray-700 mt-2 rounded-lg">
                  <p className="text-sm text-gray-300">{module.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}

