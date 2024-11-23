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

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What is the name of Company/Business ?
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="primarygoal">
              What are your primary goals for running paid ads?
              </label>
              <div className='grid grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="primarygoal"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Increasing Brand Awareness </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="primarygoal"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Driving Website Traffic </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="primarygoal"
                    type="radio"
                    value="informational"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Generating Leads </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="primarygoal"
                    type="radio"
                    value="blog"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> Boosting Sales </label>
                </div>

                <div>
                  <input
                    id='Answer5'
                    name="primarygoal"
                    type="radio"
                    value="blog"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5'> Promoting Specific Products/Services </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="secondarygoal">
              Are there any secondary goals you want to achieve?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="secondarygoal"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Growing Social Media Followers </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="secondarygoal"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Building an Email List </label>
                </div>               
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="action">
              What actions do you want users to take after seeing your ads? 
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="action"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Make a Purchase </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="action"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Sign-Up for a Newsletter </label>
                </div>      

                <div>
                  <input
                    id='Answer3'
                    name="action"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Visit Your Store </label>
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
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="audiance">
              Who is your target audience for these ads? 
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="audiance"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Age </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="audiance"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Gender </label>
                </div>      

                <div>
                  <input
                    id='Answer3'
                    name="audiance"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Location </label>
                </div>    

                <div>
                  <input
                    id='Answer4'
                    name="audiance"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> Interests </label>
                </div>     

                <div>
                  <input
                    id='Answer5'
                    name="audiance"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5'> Buying Behaviour </label>
                </div>                 
              </div>              
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Do you have any customer personas or data on your ideal customers?
                </label>
                <input
                  id="persona"
                  name="persona"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="type here the answer"
                  required
                />
              </div>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="demographics">
                Are there any specific demographics or groups you want to exclude from your ads?
                </label>
                <input
                  id="demographics"
                  name="demographics"
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

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platform">
              Which platforms do you want to run your ads on?
              </label>

              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="platform"
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
                    name="platform"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Instagram </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="platform"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> Google </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="platform"
                    type="checkbox"
                    value="Answer4'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer4'> LinkedIn </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
              What is your monthly budget for paid ads?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="budget"
                      type="radio"
                      value="e-commerce"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Total Budget </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="budget"
                    type="radio"
                    value="service-based"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Budget per Platform </label>
                </div>                     
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="ads">
                Have you run paid ads before?<span className='font-light'>(If so, what was your budget and how did they perform?)</span>
                </label>
                <input
                  id="ads"
                  name="ads"
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

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
              What type of ad content do you prefer?
              </label>

              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="content"
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
                    name="content"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="content"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> Carousels </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="content"
                    type="checkbox"
                    value="Answer4'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer4'> Slideshows </label>
                </div>

                <div>
                  <input
                    id='Answer5'
                    name="content"
                    type="checkbox"
                    value="Answer5'"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5'> Stories </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creative">
              Do you have any existing creatives or do you need us to design them?
              </label>

              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="creative"
                      type="checkbox"
                      value="Answer1"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> Product Photos </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="creative"
                    type="checkbox"
                    value="Answer2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="creative"
                    type="checkbox"
                    value="Answer3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> Graphic design </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="cta">
              What messaging or call-to-action (CTA) do you want in your ads?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="cta"
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
                    name="cta"
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
                    name="cta"
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
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="promotion">
                Are there any specific promotions, products, or services you want to highlight?
                </label>
                <input
                  id="promotion"
                  name="promotion"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              


            {/* this is the fifth section */}

              <h1 className='text-2xl font-bold py-3'> (05) Campaign Strategy </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
              Do you have any specific offers or promotions to include in the ad campaign?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="offers"
                      type="radio"
                      value="Answer1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Discounts </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="offers"
                    type="radio"
                    value="Answer2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Free Trials </label>
                </div>    

                <div>
                  <input
                    id='Answer3'
                    name="offers"
                    type="radio"
                    value="Answer3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Limited-Time Offers </label>
                </div>                   
              </div>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="focus">
              Are there any particular dates or events you want to focus on?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <input
                    id='Answer5-1'
                    name="focus"
                    type="checkbox"
                    value="Answer5-1"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-1'> Holiday Sales </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="focus"
                    type="checkbox"
                    value="Answer5-2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5-2'>  Local Events </label>
                </div>

                <div>
                  <input
                    id='Answer5-3'
                    name="focus"
                    type="checkbox"
                    value="Answer5-3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer5-3'> Product Launches </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="frequencyads">
              What is the desired frequency for the ads?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer5-1'
                      name="frequencyads"
                      type="radio"
                      value="Answer5-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer5-1'> Always-on Campaigns </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="frequencyads"
                    type="radio"
                    value="Answer5-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-2'>  Seasonal Campaigns </label>
                </div>                  
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="strategy">
              Do you have a preferred bidding strategy?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer5-1'
                      name="strategy"
                      type="radio"
                      value="Answer5-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer5-1'> Cost per Click (CPC) </label>
                </div>

                <div>
                  <input
                    id='Answer5-2'
                    name="strategy"
                    type="radio"
                    value="Answer5-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-2'>  Cost per Thousand Impressions </label>
                </div>   

                <div>
                  <input
                    id='Answer5-3'
                    name="strategy"
                    type="radio"
                    value="Answer5-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5-3'>  Conversion Optimization </label>
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
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Who are your main competitors, and have you observed their advertising strategies?
                </label>
                <input
                  id="competitors"
                  name="competitors"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="admire">
                    Are there any specific competitors whose ads you admire?
                </label>
                <input
                  id="admire"
                  name="admire"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                How do you want your ads to stand out from the competition?
                </label>
                <input
                  id="competition"
                  name="competition"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
            {/* this is seventh section */}

              <h1 className='text-2xl font-bold py-3'> (07) Tracking & Performance Metrics </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="kpi">
              What key performance indicators (KPIs) are most important to you?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="kpi"
                      type="radio"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer7-1'> Click-Through Rate (CTR) </label>
                </div>

                <div>
                  <input
                    id='Answer7-2'
                    name="kpi"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  Conversion Rate </label>
                </div>   

                <div>
                  <input
                    id='Answer7-3'
                    name="kpi"
                    type="radio"
                    value="Answer7-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-3'>  Cost per Acquisition (CPA) </label>
                </div>   

                <div>
                  <input
                    id='Answer7-4'
                    name="kpi"
                    type="radio"
                    value="Answer7-4"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-4'>  Return on Ad Spend (ROAS) </label>
                </div>                 
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="tools">
              Do you have any tracking tools or software you’re currently using? 
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="tools"
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
                    name="tools"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  Facebook Pixel </label>
                </div>       
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="performance">
              How frequently do you want to receive performance reports ?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer7-1'
                      name="performance"
                      type="radio"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer7-1'> Weekly </label>
                </div>

                <div>
                  <input
                    id='Answer7-2'
                    name="performance"
                    type="radio"
                    value="Answer7-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-2'>  Bi-Weekly </label>
                </div>  

                <div>
                  <input
                    id='Answer7-3'
                    name="performance"
                    type="radio"
                    value="Answer7-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer7-3'>  Monthly </label>
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

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="preferences">
              Do you have any specific targeting preferences?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <input
                    id='Answer8-1'
                    name="preferences"
                    type="checkbox"
                    value="Answer8-1"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer8-1'> Retargeting Website Visitors </label>
                </div>

                <div>
                  <input
                    id='Answer8-2'
                    name="preferences"
                    type="checkbox"
                    value="Answer8-2"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer8-2'>  Lookalike Audiences </label>
                </div>

                <div>
                  <input
                    id='Answer8-3'
                    name="preferences"
                    type="checkbox"
                    value="Answer8-3"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer8-3'> Geographic Targeting </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="customaudiance">
              Are there any custom audiences you want to target?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer8-1'
                      name="customaudiance"
                      type="radio"
                      value="Answer8-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer8-1'> Email List </label>
                </div>

                <div>
                  <input
                    id='Answer8-2'
                    name="customaudiance"
                    type="radio"
                    value="Answer8-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer8-2'>  Previous Customers </label>
                </div>  
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="different">
                Would you like to run A/B tests to compare different ad creatives or audiences?
                </label>
                <input
                  id="different"
                  name="different"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>

            {/* this is nineth section */}

              <h1 className='text-2xl font-bold py-3'> (09) Compliance & Brand Safety </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="guidline">
              Are there any brand safety guidelines or sensitive topics you want to avoid?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer9-1'
                      name="guidline"
                      type="radio"
                      value="Answer9-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer9-1'> Content types </label>
                </div>

                <div>
                  <input
                    id='Answer9-2'
                    name="guidline"
                    type="radio"
                    value="Answer9-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer9-2'>  Language </label>
                </div>  
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="disclaimers">
                Do you have any legal disclaimers or terms that need to be included in the ads?
                </label>
                <textarea name="disclaimers" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Are there any industry regulations we need to consider when creating your ads?
                </label>
                <textarea name="regulatioin" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>



              <h1 className='text-2xl font-bold py-3'> (10) Budget Allocation & Scaling </h1>
              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="allocating">
                How do you want to allocate your budget across different platforms or campaigns?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10'>
                  <div>
                    <label htmlFor='yes'>
                      <input
                        id='Answer10-2'
                        name="allocating"
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
                      name="allocating"
                      type="radio"
                      value="Answer10-2"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Answer10-2'> 30% on Google Ads </label>
                  </div>
                </div>

                <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="scalingbudget">
                Are you open to scaling the budget if the ads perform well?
                </label>
                <textarea name="scalingbudget" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contingency">
                Do you have a contingency plan or budget in case the initial strategy needs adjustment?
                </label>
                <textarea name="contingency" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
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

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="marketingchannel">
              Are there any other marketing channels or campaigns you’re running that we should align with?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10'>
                  <div>
                      <input
                        id='email-marketing'
                        name="marketingchannel"
                        type="radio"
                        value="email-marketing"
                        className="w-4 h-4"
                        required
                      />                
                    <label htmlFor='marketingchennel'> Email marketing </label>
                  </div>

                  <div>
                    <input
                      id='SEO'
                      name="marketingchannel"
                      type="radio"
                      value="SEO"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='marketingchennel'> SEO </label>
                  </div>

                  <div>
                    <input
                      id='offline-prootions'
                      name="marketingchannel"
                      type="radio"
                      value="offline-prootions"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='marketingchennel'> Offline promotions </label>
                  </div>
                </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="crm">
                Do you want to integrate the paid ads with your existing CRM or email marketing tools?
                </label>
                <input
                  id="crm"
                  name="crm"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (06) Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                How should the paid ads complement your organic social media content?
                </label>
                <input
                  id="paidadd"
                  name="paidadd"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
            {/* this is twelveth section */}

              <h1 className='text-2xl font-bold py-3'> (12) Additional Preferences </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creativeideas">
                Do you have any specific creative ideas or themes you’d like to explore?
                </label>
                <input
                  id="creativeideas"
                  name="creativeideas"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                Are there any content types or formats you’d like to avoid?
                </label>
                <input
                  id="contenttype"
                  name="contenttype"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>    

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="addstyle">
              Do you have any particular preferences for the tone or style of the ads?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer12-1'
                      name="addstyle"
                      type="radio"
                      value="Answer12-1"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer12-1'> Humorous </label>
                </div>

                <div>
                  <input
                    id='Answer12-2'
                    name="addstyle"
                    type="radio"
                    value="Answer12-2"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer12-2'>  Serious </label>
                </div>   

                <div>
                  <input
                    id='Answer12-3'
                    name="addstyle"
                    type="radio"
                    value="Answer12-3"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer12-3'>  Urgent </label>
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
