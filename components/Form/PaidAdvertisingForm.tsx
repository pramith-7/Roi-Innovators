"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const PaidAdvertisingForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  return (
    <>
      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue">- Paid Advertising - </h2>
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
              What are your primary goals for running paid ads?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> increasing brand awareness </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> driving website traffic </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="nature"
                    type="radio"
                    value="informational"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> generating leads </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="nature"
                    type="radio"
                    value="blog"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> boosting sales </label>
                </div>

                <div>
                  <input
                    id='Answer5'
                    name="nature"
                    type="radio"
                    value="blog"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5'> promoting specific products/services </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Are there any secondary goals you want to achieve?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> growing social media followers </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> building an email list </label>
                </div>               
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              What actions do you want users to take after seeing your ads? 
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> make a purchase </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> sign up for a newsletter </label>
                </div>      

                <div>
                  <input
                    id='Answer3'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> visit your store </label>
                </div>                
              </div>              
            </motion.div>


            <motion.div
              ref={ref2} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (02) Target Audience </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Who is your target audience for these ads? 
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> age </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> gender </label>
                </div>      

                <div>
                  <input
                    id='Answer3'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> location </label>
                </div>    

                <div>
                  <input
                    id='Answer4'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> interests </label>
                </div>     

                <div>
                  <input
                    id='Answer5'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5'> buying behaviour </label>
                </div>                 
              </div>              
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="goal">
                Do you have any customer personas or data on your ideal customers?
                </label>
                <input
                  id="goal"
                  name="goal"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="type here the answer"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="secondarygoal">
                Are there any specific demographics or groups you want to exclude from your ads?
                </label>
                <input
                  id="secondarygoal"
                  name="secondarygoal"
                  type="text"
                  placeholder='type here the answer'
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
              <h1 className='text-2xl font-bold py-3'> (03)  Ad Platforms & Budget </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="feature">
              Which platforms do you want to run your ads on?
              </label>

              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="feature"
                      type="checkbox"
                      value="Answer1"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> Facebook </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="feature"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Instagram </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="feature"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> Google </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="feature"
                    type="checkbox"
                    value="Answer4'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer4'> LinkedIn </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              What is your monthly budget for paid ads?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="nature"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> total budget </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> budget per platform </label>
                </div>                     
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="secondarygoal">
                Have you run paid ads before?<span className='font-light'>(If so, what was your budget and how did they perform?)</span>
                </label>
                <input
                  id="secondarygoal"
                  name="secondarygoal"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
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
              <h1 className='text-2xl font-bold py-3'> (04) Ad Content & Creative </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="feature">
              What type of ad content do you prefer?
              </label>

              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="feature"
                      type="checkbox"
                      value="Answer1"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> Images </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="feature"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="feature"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> carousels </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="feature"
                    type="checkbox"
                    value="Answer4'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer4'> slideshows </label>
                </div>

                <div>
                  <input
                    id='Answer5'
                    name="feature"
                    type="checkbox"
                    value="Answer5'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5'> stories </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="feature">
              Do you have any existing creatives or do you need us to design them?
              </label>

              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="feature"
                      type="checkbox"
                      value="Answer1"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> product photos </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="feature"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="feature"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> graphic design </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              What messaging or call-to-action (CTA) do you want in your ads?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="nature"
                      type="radio"
                      value="Answer1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Shop Now </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="Answer2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Learn More </label>
                </div>    

                <div>
                  <input
                    id='Answer3'
                    name="nature"
                    type="radio"
                    value="Answer3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Sign Up </label>
                </div>                   
              </div>

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
                Are there any specific promotions, products, or services you want to highlight?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              


            {/* this is the fifth section */}

              <h1 className='text-2xl font-bold py-3'> (05) Campaign Strategy </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have any specific offers or promotions to include in the ad campaign?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="nature"
                      type="radio"
                      value="Answer1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> discounts </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="nature"
                    type="radio"
                    value="Answer2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> free trials </label>
                </div>    

                <div>
                  <input
                    id='Answer3'
                    name="nature"
                    type="radio"
                    value="Answer3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> limited-time offers </label>
                </div>                   
              </div>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
              Are there any particular dates or events you want to focus on?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='Answer5-1'
                    name="content"
                    type="checkbox"
                    value="Answer5-1"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-1'> holidaysales </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="content"
                    type="checkbox"
                    value="Answer5-2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5-2'>  local events </label>
                </div>

                <div>
                  <input
                    id='Answer5-3'
                    name="content"
                    type="checkbox"
                    value="Answer5-3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5-3'> product launches </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              What is the desired frequency for the ads?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer5-1'
                      name="nature"
                      type="radio"
                      value="Answer5-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer5-1'> always-on campaigns </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="nature"
                    type="radio"
                    value="Answer5-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-2'>  seasonal campaigns </label>
                </div>                  
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have a preferred bidding strategy?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer5-1'
                      name="nature"
                      type="radio"
                      value="Answer5-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer5-1'> cost per click (CPC) </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="nature"
                    type="radio"
                    value="Answer5-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-2'>  cost per thousand impressions (CPM) </label>
                </div>   

                <div>
                  <input
                    id='Answer5-3'
                    name="nature"
                    type="radio"
                    value="Answer5-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-3'>  conversion optimization </label>
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
              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                Who are your main competitors, and have you observed their advertising strategies?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                Are there any specific competitors whose ads you admire?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                How do you want your ads to stand out from the competition?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
            {/* this is seventh section */}

              <h1 className='text-2xl font-bold py-3'> (07) Tracking & Performance Metrics </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              What key performance indicators (KPIs) are most important to you?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="nature"
                      type="radio"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer7-1'> click-through rate (CTR) </label>
                </div>

                <div>
                  <input
                    id='Answer7-2'
                    name="nature"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  conversion rate </label>
                </div>   

                <div>
                  <input
                    id='Answer7-3'
                    name="nature"
                    type="radio"
                    value="Answer7-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-3'>  cost per acquisition (CPA) </label>
                </div>   

                <div>
                  <input
                    id='Answer7-4'
                    name="nature"
                    type="radio"
                    value="Answer7-4"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-4'>  return on ad spend (ROAS) </label>
                </div>                 
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have any tracking tools or software you’re currently using? 
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="nature"
                      type="radio"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer7-1'> Google Analytics </label>
                </div>

                <div>
                  <input
                    id='Answer7-2'
                    name="nature"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  Facebook Pixel </label>
                </div>       
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have any tracking tools or software you’re currently using? 
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="nature"
                      type="radio"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer7-1'> weekly </label>
                </div>

                <div>
                  <input
                    id='Answer7-2'
                    name="nature"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  bi-weekly </label>
                </div>  

                <div>
                  <input
                    id='Answer7-3'
                    name="nature"
                    type="radio"
                    value="Answer7-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-3'>  monthly </label>
                </div>          
              </div>


              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                Are there any specific metrics or data points you want to focus on?
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
            </motion.div>

            <motion.div
              ref={ref4} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <h1 className='text-2xl font-bold py-3'> (08) Ad Targeting Preferences </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
              Do you have any specific targeting preferences?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='Answer8-1'
                    name="content"
                    type="checkbox"
                    value="Answer8-1"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer8-1'> retargeting website visitors </label>
                </div>

                <div>
                  <input
                    id='Answer8-2'
                    name="content"
                    type="checkbox"
                    value="Answer8-2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer8-2'>  lookalike audiences </label>
                </div>

                <div>
                  <input
                    id='Answer8-3'
                    name="content"
                    type="checkbox"
                    value="Answer8-3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer8-3'> geographic targeting </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have any tracking tools or software you’re currently using? 
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer8-1'
                      name="nature"
                      type="radio"
                      value="Answer8-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer8-1'> email list </label>
                </div>

                <div>
                  <input
                    id='Answer8-2'
                    name="nature"
                    type="radio"
                    value="Answer8-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer8-2'>  previous customers </label>
                </div>  
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="timeline">
                Would you like to run A/B tests to compare different ad creatives or audiences?
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>

            {/* this is nineth section */}

              <h1 className='text-2xl font-bold py-3'> (09) Compliance & Brand Safety </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Are there any brand safety guidelines or sensitive topics you want to avoid?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer9-1'
                      name="nature"
                      type="radio"
                      value="Answer9-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer9-1'> content types </label>
                </div>

                <div>
                  <input
                    id='Answer9-2'
                    name="nature"
                    type="radio"
                    value="Answer9-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer9-2'>  language </label>
                </div>  
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                Do you have any legal disclaimers or terms that need to be included in the ads?
                </label>
                <textarea className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                Are there any industry regulations we need to consider when creating your ads?
                </label>
                <textarea className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>



              <h1 className='text-2xl font-bold py-3'> (10) Budget Allocation & Scaling </h1>
              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
                How do you want to allocate your budget across different platforms or campaigns?
                </label>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='yes'>
                      <input
                        id='Answer10-2'
                        name="assistant"
                        type="radio"
                        value="Answer10-2"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='Answer10-2'> 50% on Facebook </label>
                  </div>

                  <div>
                    <input
                      id='Answer10-2'
                      name="assistant"
                      type="radio"
                      value="Answer10-2"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Answer10-2'> 30% on Google Ads </label>
                  </div>
                </div>

                <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                Are you open to scaling the budget if the ads perform well?
                </label>
                <textarea className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                Do you have a contingency plan or budget in case the initial strategy needs adjustment?
                </label>
                <textarea className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
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
              <h1 className='text-2xl font-bold py-3'> (11) Integration with Other Marketing Channels </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
              Are there any other marketing channels or campaigns you’re running that we should align with?
                </label>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='yes'>
                      <input
                        id='Answer11-2'
                        name="assistant"
                        type="radio"
                        value="Answer11-2"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='Answer11-2'> email marketing </label>
                  </div>

                  <div>
                    <input
                      id='Answer11-2'
                      name="assistant"
                      type="radio"
                      value="Answer11-2"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Answer11-2'> SEO </label>
                  </div>

                  <div>
                    <input
                      id='Answer11-3'
                      name="assistant"
                      type="radio"
                      value="Answer11-3"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Answer11-3'> offline promotions </label>
                  </div>
                </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                Do you want to integrate the paid ads with your existing CRM or email marketing tools?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                How should the paid ads complement your organic social media content?
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
            {/* this is twelveth section */}

              <h1 className='text-2xl font-bold py-3'> (12) Additional Preferences </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                Do you have any specific creative ideas or themes you’d like to explore?
                </label>
                <input
                  id="security"
                  name="security"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                Are there any content types or formats you’d like to avoid?
                </label>
                <input
                  id="security"
                  name="security"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>    

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
              Do you have any particular preferences for the tone or style of the ads?
              </label>
              <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer12-1'
                      name="nature"
                      type="radio"
                      value="Answer12-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer12-1'> humorous </label>
                </div>

                <div>
                  <input
                    id='Answer12-2'
                    name="nature"
                    type="radio"
                    value="Answer12-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer12-2'>  serious </label>
                </div>   

                <div>
                  <input
                    id='Answer12-3'
                    name="nature"
                    type="radio"
                    value="Answer12-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer12-3'>  urgent </label>
                </div>                           
              </div>            

                       
            </motion.div>


          </form >
        </div >
      </div >
    </>


  );
};

export default PaidAdvertisingForm;
