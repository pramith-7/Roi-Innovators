"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const MobileAppDevelopmentForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  return (
    <>
      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue"> Mobile App Development </h2>
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
              <h1 className='text-2xl font-bold py-3'> 1. Business Overview </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What is the name of Company/Business ?
                </label>
                <input
                  id="company"
                  name="Company_Name"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                What type of business do you operate?
                </label>
                <input
                  id="Business_Type"
                  name="Business_Type"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="e.g., retail, restaurant, service provider, etc.."
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Where is your business located?
                </label>
                <input
                  id="Business_Type"
                  name="Business_Type"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="type here the answer"
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
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 02. Contact Information </h1>
              <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Your Name:
                </label>
                <input
                  id="Customer_Name"
                  name="Customer_Name"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=" Type your name here "
                  required
                />             
                </div>
                <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Email Address:
                </label>
                <input
                  id="Customer_Email"
                  name="Customer_Email"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=" Type your email here "
                  required
                />             
                </div>
                <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Phone number:
                </label>
                <input
                  id="Customer_Phone"
                  name="Customer_Phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  size={10}
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=" Type your Phone Number here eg:- 123-4567890"
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
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 03.  Project Overview </h1>

              <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
              What is the purpose of the mobile app?
                </label>
                <input
                  id="Mobile_App_Purpose"
                  name="Mobile_App_Purpose"
                  type="tel"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=" e.g., customer engagement, sales, booking, loyalty programs, etc.. "
                  required
                />             
                </div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
                Do you already have a website or social media presence?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="Social_Media_Presence"
                      type="radio"
                      value="Yes"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Yes </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Social_Media_Presence"
                    type="radio"
                    value="No"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> No </label>
                </div>   
            </div>                           
            
            <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                If Yes, please provide the Links.
                </label>
                <textarea name="Social_Media_Presence" placeholder=" Paste Link Here " className='placeholder-slate-700 p-2 md:p-3 w-full h-20 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
            </div>

            <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
            What platforms do you want the app to be developed for?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="Platforms"
                      type="radio"
                      value="Android"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Android </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Platforms"
                    type="radio"
                    value="IOS"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> IOS </label>
                </div>   

                <div>
                  <input
                    id='Answer2'
                    name="Platforms"
                    type="radio"
                    value="Both"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Both </label>
                </div>   
            </div>      

            <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
              Do you have a preferred launch date for the app?
                </label>
                <input
                  id="Mobile_App_Purpose"
                  name="Launch_Date"
                  type="date"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=""
                  required
                />             
                </div>                         
            </motion.div>


            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 04. Features & Functionality </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                What key features would you like the app to include?
                </label>
                <textarea name="Key_Features" placeholder=" e.g., product catalog, online booking, push notifications, payment gateway, user login, etc.. " className='placeholder-slate-700 p-2 md:p-3 w-full h-20 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
              Do you need any integrations with existing systems?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="Integration_Systems"
                      type="radio"
                      value="POS"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> POS </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Integration_Systems"
                    type="radio"
                    value="CRM"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> CRM </label>
                </div>   

                <div>
                  <input
                    id='Answer2'
                    name="Integration_Systems"
                    type="radio"
                    value="Third-party Tools"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Third-party Tools </label>
                </div>   
            </div>  

            <div className='pb-5'>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
              Would you like us to include analytics to track user behavior and app performance?
                </label>
                <input
                  id="Mobile_App_Purpose"
                  name="Include_Analytics"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder=" Type your answer here "
                  required
                />             
                </div>    


            {/* this is the fifth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 05. Design Preferences </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Do you have any specific design ideas or branding guidelines?
                </label>
                <textarea name="Specific_Design_Ideas" placeholder=" Type your answer here " className='placeholder-slate-700 p-2 md:p-3 w-full h-30 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Are there any apps you admire or want to take inspiration from?
                </label>
                <textarea name="Inspiration_Apps" placeholder=" Please provide examples, if any. " className='placeholder-slate-700 p-2 md:p-3 w-full h-30 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>            
            </motion.div>


            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 06. Maintenance & Updates </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you plan to manage app updates yourself, or would you like us to provide ongoing maintenance?
                </label>
                <input
                  id="competitors"
                  name="Maintenance_Updates"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
             
              
            {/* this is seventh section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 07. Budget & Expectations </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you have a budget range for this project?
                </label>
                <input
                  id="competitors"
                  name="Budget_Range"
                  type="text"
                  placeholder='Type here the answer eg:- €5000 - €10000'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                What is your primary goal for the app?
                </label>
                <input
                  id="competitors"
                  name="Primary_Goal"
                  type="text"
                  placeholder='e.g., increase sales, improve customer experience, streamline processes, etc.. '
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
             
            </motion.div>

            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 08. Additional Comments </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Is there anything else you'd like us to know about your project?
                </label>
                <textarea name="Comments" placeholder=" Type anything.. " className='placeholder-slate-700 p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>    

            </motion.div>

          </form >
        </div >
      </div >
    </>


  );
};

export default MobileAppDevelopmentForm;
