"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const WebDesignForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  return (
    <>
      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue">- Web Design - </h2>
      <div className="container mx-auto px-2 md:px-20 flex flex-col lg:flex-row lg:space-x-12" id="Contact">
        {/* Contact Form */}

        <div className="lg:w-full">
          <form className="">
            <motion.div
              ref={ref1} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (1) Business Overview </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
                What is the nature of your business?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='ecommerce'>
                    <input
                      id='ecommerce'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='ecommerce'> E-commerce </label>
                </div>

                <div>
                  <input
                    id='service-based'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='service-based'> Service-Based </label>
                </div>

                <div>
                  <input
                    id='informational'
                    name="nature"
                    type="radio"
                    value="informational"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='informational'> Informational </label>
                </div>

                <div>
                  <input
                    id='blog'
                    name="nature"
                    type="radio"
                    value="blog"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='blog'> Blog </label>
                </div>
              </div>


              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="product">
                  What products or services do you offer ?
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="audience">
                  Who is your target audience ?
                </label>
                <input
                  id="audience"
                  name="audience"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
            </motion.div>


            <motion.div
              ref={ref2} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (02) Website Goals </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="goal">
                  What are the primary goals of your website ?
                </label>
                <input
                  id="goal"
                  name="goal"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="ex:- Sell products, Generate leads, Provide information, Showcase a portfolio"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="secondarygoal">
                  Are there any secondary goals ?
                </label>
                <input
                  id="secondarygoal"
                  name="secondarygoal"
                  type="text"
                  placeholder='ex:- Building community, SEO ranking, Offering resources'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              ref={ref3} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (04)  Core Features </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="feature">
                What core features do you need on your website ?
              </label>

              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='shopping-cart'>
                    <input
                      id='shopping-cart'
                      name="feature"
                      type="checkbox"
                      value="shopping-cart"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='shopping-cart'> Shopping Cart </label>
                </div>

                <div>
                  <input
                    id='booking-system'
                    name="feature"
                    type="checkbox"
                    value="booking-system"
                    className="w-4 h-4"
                  />
                  <label htmlFor='booking-system'> Booking System </label>
                </div>

                <div>
                  <input
                    id='contact-form'
                    name="feature"
                    type="checkbox"
                    value="contact-form"
                    className="w-4 h-4"
                  />
                  <label htmlFor='contact-form'> Contact Form </label>
                </div>

                <div>
                  <input
                    id='user-account'
                    name="feature"
                    type="checkbox"
                    value="user-account"
                    className="w-4 h-4"
                  />
                  <label htmlFor='user-account'> User Account </label>
                </div>
              </div>



              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="intergration">
                Are there any specific integrations required?
              </label>

              <div className='grid lg:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='payment-gateway'
                    name="intergration"
                    type="checkbox"
                    value="payment-gateway"
                    className="w-4 h-4"
                  />
                  <label htmlFor='payment-gateway'> Payment Gateway </label>
                </div>

                <div>
                  <input
                    id='CRM-system'
                    name="intergration"
                    type="checkbox"
                    value="CRM-system"
                    className="w-4 h-4"
                  />
                  <label htmlFor='CRM-system'> CRM System </label>
                </div>

                <div>
                  <input
                    id='social-media'
                    name="intergration"
                    type="checkbox"
                    value="social-media"
                    className="w-4 h-4"
                  />
                  <label htmlFor='social-media'> Social Media </label>
                </div>

                <div>
                  <input
                    id='E-mail marketing'
                    name="intergration"
                    type="checkbox"
                    value="E-mail marketing"
                    className="w-4 h-4"
                  />
                  <label htmlFor='E-mail marketing'> Email Marketing Tools </label>
                </div>
              </div>


              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="cms">
                Do you need a content management system (CMS) like WordPress, Shopify, or custom-built?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 '>
                <div>
                  <label htmlFor='yes'>
                    <input
                      id='yes'
                      name="cms"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='yes'> Yes </label>
                </div>

                <div>
                  <input
                    id='no'
                    name="cms"
                    type="radio"
                    value="no"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='no'> No </label>
                </div>
              </div>
            </motion.div>


            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (04) Design & User Experience </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="preferences">
                  Do you have any specific design preferences or brand guidelines? (e.g., color schemes, fonts, logos)
                </label>
                <input
                  id="preferences"
                  name="preferences"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                  Are there any websites that you admire and would like to model your site after?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='send website link here or type "none"'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="ux">
                What is the desired user experience?
              </label>

              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='easy-navigation'
                    name="ux"
                    type="checkbox"
                    value="easy-navigation"
                    className="w-4 h-4"
                  />
                  <label htmlFor='easy-navigation'> Easy Navigation</label>
                </div>

                <div>
                  <input
                    id='fast-loading'
                    name="ux"
                    type="checkbox"
                    value="fast-loading"
                    className="w-4 h-4"
                  />
                  <label htmlFor='fast-loading'>  Fast Loading  </label>
                </div>

                <div>
                  <input
                    id='mobile-responsive'
                    name="ux"
                    type="checkbox"
                    value="mobile-responsive"
                    className="w-4 h-4"
                  />
                  <label htmlFor='mobile-responsive'> Mobile Responsive </label>
                </div>

              </div>




              <h1 className='text-2xl font-bold py-3'> (05) Content </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
                What kind of content will be on the website?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='text'
                    name="content"
                    type="checkbox"
                    value="text"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='text'> Text </label>
                </div>

                <div>
                  <input
                    id='images'
                    name="content"
                    type="checkbox"
                    value="images"
                    className="w-4 h-4"
                  />
                  <label htmlFor='images'>  Images </label>
                </div>

                <div>
                  <input
                    id='videos'
                    name="content"
                    type="checkbox"
                    value="videos"
                    className="w-4 h-4"
                  />
                  <label htmlFor='videos'> Videos </label>
                </div>

                <div>
                  <input
                    id='blogs'
                    name="content"
                    type="checkbox"
                    value="blogs"
                    className="w-4 h-4"
                  />
                  <label htmlFor='blogs'> Blogs </label>
                </div>

              </div>



              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content-creation">
                Will you need content creation services?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 '>
                <div>
                  <label htmlFor='yes'>
                    <input
                      id='yes'
                      name="content-creation"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='yes'> Yes </label>
                </div>

                <div>
                  <input
                    id='no'
                    name="content-creation"
                    type="radio"
                    value="no"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='no'> No </label>
                </div>
              </div>
            </motion.div>


            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (06) SEO Analytics </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                  What are the specific SEO services do you need ?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='ex:-Keyword optimization, Meta tags, Alt texts'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="tracking">
                Would you like to track user behaviour? (ex:- Google Analytics, Heatmaps)
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 '>
                <div>
                  <label htmlFor='yes'>
                    <input
                      id='yes'
                      name="tracking"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='yes'> Yes </label>
                </div>

                <div>
                  <input
                    id='no'
                    name="tracking"
                    type="radio"
                    value="no"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='no'> No </label>
                </div>
              </div>



              <h1 className='text-2xl font-bold py-3'> (07) Security and Maintainance </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                  What level of security is required?
                </label>
                <input
                  id="security"
                  name="security"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='ex:- SSL certificate, Data protection, User Authentication'
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="maintainance">
                Do you require maintenance services from the developer?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 '>
                <div>
                  <label htmlFor='yes'>
                    <input
                      id='yes'
                      name="maintainance"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='yes'> Yes </label>
                </div>

                <div>
                  <input
                    id='no'
                    name="maintainance"
                    type="radio"
                    value="no"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='no'> No </label>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (08) Timeline & Budget </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="timeline">
                  What is your desired timeline for the project?
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='ex:- 1 month, 3 months, 6 months'
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="timeline">
                  What is your budget range for the development of the website?
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='LKR'
                  required
                />
              </div>


              <h1 className='text-2xl font-bold py-3'> (09) Additional </h1>
              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                  Are there any additional features or special requests?
                </label>
                <textarea className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>



              <h1 className='text-2xl font-bold py-3'> (10) Hosting & Domain </h1>
              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
                  will you need assistance with domain name and hosting provider ?
                </label>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='yes'>
                      <input
                        id='yes'
                        name="assistant"
                        type="radio"
                        value="yes"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='no'
                      name="assistant"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='no'> No </label>
                  </div>
                </div>
              </div>


              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
                  What is your preference for hosting?
                </label>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='dedicated'>
                      <input
                        id='dedicated'
                        name="assistant"
                        type="radio"
                        value="dedicated"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='dedicated'> Dedicated </label>
                  </div>

                  <div>
                    <input
                      id='cloud-based'
                      name="assistant"
                      type="radio"
                      value="cloud-based"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cloud-based'> Cloud-Based </label>
                  </div>

                  <div>
                    <input
                      id='shared'
                      name="assistant"
                      type="radio"
                      value="shared"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='shared'> Shared </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-5">
                <button type="submit" className="px-8 py-2 bg-blue-600 rounded hover:opacity-90 hover:scale-105 transition duration-200 ">
                  Send
                </button>

                <button type="reset" className="ml-auto px-8 py-2 border-2 text-blue-600 border-blue-600 rounded hover:opacity-90 hover:text-iceblue hover:border-iceblue transition duration-300">
                  Cancel
                </button>
              </div>

            </motion.div>
          </form >
        </div >
      </div >
    </>


  );
};

export default WebDesignForm;
