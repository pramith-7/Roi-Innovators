"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import { FaHome } from "react-icons/fa";


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
      <section className='relative overflow-x-clip'>
        <div className="absolute opacity-55 justify-center z-[-1] transition md:-translate-x-80 -translate-x-96">
          <div className="w-[330px] h-[800px] rounded-full blur-[100px] bg-gradientbg2 "> </div>
        </div>
        <div className="absolute bottom-0 right-0 md:translate-x-72 translate-x-96 opacity-55 z-[-1]">
          <div className="w-[300px] h-[800px] rounded-full blur-[100px] bg-gradientbg2"></div>
        </div>
        <div className="flex items-center justify-between border-b-2 border-iceblue mb-8">
          <Link href="/">
            <button className="rounded-md text-xl p-1 ml-4 border-2 border-iceblue text-iceblue hover:text-white hover:border-white">
              <FaHome />
            </button>
          </Link>
          <h2 className="text-4xl md:text-6xl mt-4 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
            Paid Advertising          
          </h2>
          <div className="w-10"></div>
        </div>   
        <div className="container mx-auto px-2 md:px-20 flex flex-col lg:flex-row lg:space-x-12" id="Contact">
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

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="primarygoal">
                  What are your primary goals for running paid ads?
                </label>
                <div className='grid grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='primarygoal-1'
                      name="Primary_Goal"
                      type="radio"
                      value="Increasing Brand Awareness"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='primarygoal-1'> Increasing Brand Awareness </label>
                  </div>

                  <div>
                    <input
                      id='primarygoal-2'
                      name="Primary_Goal"
                      type="radio"
                      value="Driving Website Traffic"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='primarygoal-2'> Driving Website Traffic </label>
                  </div>

                  <div>
                    <input
                      id='primarygoal-3'
                      name="Primary_Goal"
                      type="radio"
                      value="Generating Leads"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='primarygoal-3'> Generating Leads </label>
                  </div>

                  <div>
                    <input
                      id='primarygoal-4'
                      name="Primary_Goal"
                      type="radio"
                      value="Boosting Sales"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='primarygoal-4'> Boosting Sales </label>
                  </div>

                  <div>
                    <input
                      id='primarygoal-5'
                      name="Primary_Goal"
                      type="radio"
                      value="Promoting Specific Products/Services"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='primarygoal-5'> Promoting Specific Products/Services </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="secondarygoal">
                  Are there any secondary goals you want to achieve?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='secondarygoal-1'
                      name="Secondary_Goal"
                      type="radio"
                      value="Growing Social Media Followers"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='secondarygoal-1'> Growing Social Media Followers </label>
                  </div>

                  <div>
                    <input
                      id='secondarygoal-2'
                      name="Secondary_Goal"
                      type="radio"
                      value="Building an Email List"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='secondarygoal-2'> Building an Email List </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="action">
                  What actions do you want users to take after seeing your ads ?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='action-1'
                      name="Action"
                      type="radio"
                      value="Make a Purchase"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='action-1'> Make a Purchase </label>
                  </div>

                  <div>
                    <input
                      id='action-2'
                      name="Action"
                      type="radio"
                      value="Sign-Up for a Newsletter"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='action-2'> Sign-Up for a Newsletter </label>
                  </div>

                  <div>
                    <input
                      id='action-3'
                      name="Action"
                      type="radio"
                      value="Visit Your Store"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='action-3'> Visit Your Store </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 02. Target Audience </h1>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="audiance">
                  Who is your target audience for these ads?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='audiance-1'
                      name="Target_Audience"
                      type="checkbox"
                      value="Age"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='audiance-1'> Age </label>
                  </div>

                  <div>
                    <input
                      id='audiance-2'
                      name="Target_Audience"
                      type="checkbox"
                      value="Gender"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='audiance-2'> Gender </label>
                  </div>

                  <div>
                    <input
                      id='audiance-3'
                      name="Target_Audience"
                      type="checkbox"
                      value="Location"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='audiance-3'> Location </label>
                  </div>

                  <div>
                    <input
                      id='audiance-4'
                      name="Target_Audience"
                      type="checkbox"
                      value="Interests"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='audiance-4'> Interests </label>
                  </div>

                  <div>
                    <input
                      id='audiance-5'
                      name="Target_Audience"
                      type="checkbox"
                      value="Buying Behaviour"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='audiance-5'> Buying Behaviour </label>
                  </div>
                </div>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                    Do you have any customer personas or data on your ideal customers?
                  </label>
                  <input
                    id="persona"
                    name="Customer_Persona"
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
                    name="Demographics_Groups"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 03.  Ad Platforms & Budget </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platform">
                  Which platforms do you want to run your ads on?
                </label>

                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <label htmlFor='Answer1'>
                      <input
                        id='Answer1'
                        name="Platforms"
                        type="checkbox"
                        value="Facebook"
                        className="w-4 h-4"
                      />
                    </label>
                    <label htmlFor='Answer1'> Facebook </label>
                  </div>

                  <div>
                    <input
                      id='Answer2'
                      name="Platforms"
                      type="checkbox"
                      value="Instagram"
                      className="w-4 h-4"
                    />
                    <label htmlFor='Answer2'> Instagram </label>
                  </div>

                  <div>
                    <input
                      id='Answer3'
                      name="Platforms"
                      type="checkbox"
                      value="Google"
                      className="w-4 h-4"
                    />
                    <label htmlFor='Answer3'> Google </label>
                  </div>

                  <div>
                    <input
                      id='Answer4'
                      name="Platforms"
                      type="checkbox"
                      value="LinkedIn'"
                      className="w-4 h-4"
                    />
                    <label htmlFor='Answer4'> LinkedIn </label>
                  </div>
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
                    What is your budget for social media advertising?
                  </label>
                  <span className=''> EURO </span>
                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    className="w-1/3 md:w-3/12 md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="ads">
                    Have you run paid ads before?<span className='font-light'>(If so, what was your budget and how did they perform?)</span>
                  </label>
                  <input
                    id="ads"
                    name="Paid_Ads"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 04. Ad Content & Creative </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
                  What type of ad content do you prefer?
                </label>

                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='content-1'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Images"
                      className="w-4 h-4"
                    />
                    <label htmlFor='content-1'> Images </label>
                  </div>

                  <div>
                    <input
                      id='content-2'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Videos"
                      className="w-4 h-4"
                    />
                    <label htmlFor='content-2'> Videos </label>
                  </div>

                  <div>
                    <input
                      id='content-3'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Carousels"
                      className="w-4 h-4"
                    />
                    <label htmlFor='content-3'> Carousels </label>
                  </div>

                  <div>
                    <input
                      id='content-4'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Slideshows"
                      className="w-4 h-4"
                    />
                    <label htmlFor='content-4'> Slideshows </label>
                  </div>

                  <div>
                    <input
                      id='content-5'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Stories"
                      className="w-4 h-4"
                    />
                    <label htmlFor='content-5'> Stories </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creative">
                  Do you have any existing creatives or do you need us to design them?
                </label>

                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='creative-1'
                      name="Creative"
                      type="checkbox"
                      value="Product Photos"
                      className="w-4 h-4"
                    />
                    <label htmlFor='creative-1'> Product Photos </label>
                  </div>

                  <div>
                    <input
                      id='creative-2'
                      name="Creative"
                      type="checkbox"
                      value="Videos"
                      className="w-4 h-4"
                    />
                    <label htmlFor='creative-2'> Videos </label>
                  </div>

                  <div>
                    <input
                      id='creative-3'
                      name="Creative"
                      type="checkbox"
                      value="Graphic design"
                      className="w-4 h-4"
                    />
                    <label htmlFor='creative-3'> Graphic design </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="cta">
                  What messaging or call-to-action (CTA) do you want in your ads?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='cta-1'
                      name="CTA"
                      type="radio"
                      value="Shop Now"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cta-1'> Shop Now </label>
                  </div>

                  <div>
                    <input
                      id='cta-2'
                      name="CTA"
                      type="radio"
                      value="Learn More"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cta-2'> Learn More </label>
                  </div>

                  <div>
                    <input
                      id='cta-3'
                      name="CTA"
                      type="radio"
                      value="Sign Up"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cta-3'> Sign Up </label>
                  </div>
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="preferences">
                    Do you have any specific design preferences or brand guidelines? (e.g., color schemes, fonts, logos)
                  </label>
                  <input
                    id="preferences"
                    name="Preferences"
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
                    name="Promotion"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>




                {/* this is the fifth section */}
                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 05. Campaign Strategy </h1>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
                  Do you have any specific offers or promotions to include in the ad campaign?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='offers-1'
                      name="Offers"
                      type="radio"
                      value="Discounts"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='offers-1'> Discounts </label>
                  </div>

                  <div>
                    <input
                      id='offers-2'
                      name="Offers"
                      type="radio"
                      value="Free Trials"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='offers-2'> Free Trials </label>
                  </div>

                  <div>
                    <input
                      id='offers-3'
                      name="Offers"
                      type="radio"
                      value="Limited-Time Offers"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='offers-3'> Limited-Time Offers </label>
                  </div>
                </div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="focus">
                  Are there any particular dates or events you want to focus on?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='focus-1'
                      name="FocusedOn"
                      type="checkbox"
                      value="Holiday Sales"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='focus-1'> Holiday Sales </label>
                  </div>

                  <div>
                    <input
                      id='focus-2'
                      name="FocusedOn"
                      type="checkbox"
                      value="Local Events"
                      className="w-4 h-4"
                    />
                    <label htmlFor='focus-2'>  Local Events </label>
                  </div>

                  <div>
                    <input
                      id='focus-3'
                      name="FocusedOn"
                      type="checkbox"
                      value="Product Launches"
                      className="w-4 h-4"
                    />
                    <label htmlFor='focus-3'> Product Launches </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="frequencyads">
                  What is the desired frequency for the ads?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='frequencyads-1'
                      name="Frequency_Ads"
                      type="radio"
                      value="Always-on Campaigns"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='frequencyads-1'> Always-on Campaigns </label>
                  </div>

                  <div>
                    <input
                      id='frequencyads-2'
                      name="Frequency_Ads"
                      type="radio"
                      value="Seasonal Campaigns"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='frequencyads-2'>  Seasonal Campaigns </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="strategy">
                  Do you have a preferred bidding strategy?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <label htmlFor='Answer1'>
                      <input
                        id='strategy-1'
                        name="Preferred_Bidding_Strategy"
                        type="radio"
                        value="Cost per Click (CPC)"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='strategy-1'> Cost per Click (CPC) </label>
                  </div>

                  <div>
                    <input
                      id='strategy-2'
                      name="strategy"
                      type="radio"
                      value="Cost per Thousand Impressions"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='strategy-2'>  Cost per Thousand Impressions </label>
                  </div>

                  <div>
                    <input
                      id='strategy-3'
                      name="strategy"
                      type="radio"
                      value="Conversion Optimization"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='strategy-3'>  Conversion Optimization </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 06. Competitor Analysis </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                    Who are your main competitors, and have you observed their advertising strategies?
                  </label>
                  <input
                    id="competitors"
                    name="Competitors"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="admire">
                    Are there any specific competitors whose ads you admire?
                  </label>
                  <input
                    id="admire"
                    name="Admired_Ads"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                    How do you want your ads to stand out from the competition?
                  </label>
                  <input
                    id="competition"
                    name="Competition_Standout"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>


                {/* this is seventh section */}
                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 07. Tracking & Performance Metrics </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="kpi">
                  What key performance indicators (KPIs) are most important to you?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='kpi-1'
                      name="KPIs"
                      type="checkbox"
                      value="Answer7-1"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='kpi-1'> Click-Through Rate (CTR) </label>
                  </div>

                  <div>
                    <input
                      id='kpi-2'
                      name="KPIs"
                      type="checkbox"
                      value="Conversion Rate"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='kpi-2'>  Conversion Rate </label>
                  </div>

                  <div>
                    <input
                      id='kpi-3'
                      name="KPIs"
                      type="checkbox"
                      value="Cost per Acquisition (CPA)"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='kpi-3'>  Cost per Acquisition (CPA) </label>
                  </div>

                  <div>
                    <input
                      id='kpi-4'
                      name="KPIs"
                      type="checkbox"
                      value="Return on Ad Spend (ROAS)"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='kpi-4'>  Return on Ad Spend (ROAS) </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="tools">
                  Do you have any tracking tools or software you’re currently using?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <label htmlFor='Answer1'>
                      <input
                        id='tools-1'
                        name="Tracking_Tools"
                        type="radio"
                        value="Google Analytics"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='tools-1'> Google Analytics </label>
                  </div>

                  <div>
                    <input
                      id='tools-2'
                      name="Tracking_Tools"
                      type="radio"
                      value="Facebook Pixel"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='tools-2'>  Facebook Pixel </label>
                  </div>
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="performance">
                  How frequently do you want to receive performance reports ?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <label htmlFor='Answer1'>
                      <input
                        id='perfomance-1'
                        name="Reports_Frequency"
                        type="radio"
                        value="Weekly"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='perfomance-1'> Weekly </label>
                  </div>

                  <div>
                    <input
                      id='perfomance-2'
                      name="Reports_Frequency"
                      type="radio"
                      value="Bi-Weekly"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='perfomance-2'>  Bi-Weekly </label>
                  </div>

                  <div>
                    <input
                      id='perfomance-3'
                      name="Reports_Frequency"
                      type="radio"
                      value="Monthly"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='perfomance-3'>  Monthly </label>
                  </div>
                </div>


                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                    Are there any specific metrics or data points you want to focus on?
                  </label>
                  <input
                    id="security"
                    name="Focused_Metrics"
                    type="text"
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    placeholder='ex:- SSL certificate, Data protection, User Authentication'
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 08. Ad Targeting Preferences </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="preferences">
                  Do you have any specific targeting preferences?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='Answer8-1'
                      name="Targeting_Preferences"
                      type="checkbox"
                      value="Retargeting Website Visitors"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Answer8-1'> Retargeting Website Visitors </label>
                  </div>

                  <div>
                    <input
                      id='Answer8-2'
                      name="Targeting_Preferences"
                      type="checkbox"
                      value="Lookalike Audiences"
                      className="w-4 h-4"
                    />
                    <label htmlFor='Answer8-2'>  Lookalike Audiences </label>
                  </div>

                  <div>
                    <input
                      id='Answer8-3'
                      name="Targeting_Preferences"
                      type="checkbox"
                      value="Geographic Targeting"
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
                    <input
                      id='customaudiance-1'
                      name="Custom_Audiance"
                      type="radio"
                      value="Email List"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='customaudiance-1'> Email List </label>
                  </div>

                  <div>
                    <input
                      id='customaudiance-2'
                      name="Custom_Audiance"
                      type="radio"
                      value="Previous Customers"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='customaudiance-2'>  Previous Customers </label>
                  </div>
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="different">
                    Would you like to run A/B tests to compare different ad creatives or audiences?
                  </label>
                  <input
                    id="different"
                    name="A/B_Tests"
                    type="text"
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    placeholder='type here the answer'
                    required
                  />
                </div>

                {/* this is nineth section */}
                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 09. Compliance & Brand Safety </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="guidline">
                  Are there any brand safety guidelines or sensitive topics you want to avoid?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                  <div>
                    <input
                      id='guidline-1'
                      name="Avoid_Topics"
                      type="radio"
                      value="Content types"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='guidline-1'> Content types </label>
                  </div>

                  <div>
                    <input
                      id='guidline-2'
                      name="Avoid_Topics"
                      type="radio"
                      value="Language"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='guidline-2'>  Language </label>
                  </div>
                </div>

                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="disclaimers">
                    Do you have any legal disclaimers or terms that need to be included in the ads?
                  </label>
                  <textarea name="Disclaimers" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                  </textarea>
                </div>

                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                    Are there any industry regulations we need to consider when creating your ads?
                  </label>
                  <textarea name="Industry_Regulations" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                  </textarea>
                </div>


                <hr className='mt-5 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 10. Budget Allocation & Scaling </h1>
                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="allocating">
                    How do you want to allocate your budget across different platforms or campaigns?
                  </label>
                  <div className='grid md:grid-cols-2 grid-cols-1 pb-10'>
                    <div>
                      <input
                        id='allocating-1'
                        name="Budget_Allocation"
                        type="radio"
                        value="50% on Facebook"
                        className="w-4 h-4"
                        required
                      />
                      <label htmlFor='allocating-1'> 50% on Facebook </label>
                    </div>

                    <div>
                      <input
                        id='allocating-2'
                        name="Budget_Allocation"
                        type="radio"
                        value="30% on Google Ads"
                        className="w-4 h-4"
                        required
                      />
                      <label htmlFor='allocating-2'> 30% on Google Ads </label>
                    </div>
                  </div>

                  <div>
                    <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="scalingbudget">
                      Are you open to scaling the budget if the ads perform well?
                    </label>
                    <textarea name="Budget_Scaling" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                    </textarea>
                  </div>

                  <div>
                    <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contingency">
                      Do you have a contingency plan or budget in case the initial strategy needs adjustment?
                    </label>
                    <textarea name="Contingency_Plan" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                    </textarea>
                  </div>

                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 11. Integration with Other Marketing Channels </h1>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="marketingchannel">
                  Are there any other marketing channels or campaigns you’re running that we should align with?
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-10'>
                  <div>
                    <input
                      id='email-marketing'
                      name="Marketing_Channels"
                      type="checkbox"
                      value="Email marketing"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='email-marketing'> Email marketing </label>
                  </div>

                  <div>
                    <input
                      id='SEO'
                      name="Marketing_Channels"
                      type="checkbox"
                      value="SEO"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='SEO'> SEO </label>
                  </div>

                  <div>
                    <input
                      id='offline-prootions'
                      name="Marketing_Channels"
                      type="checkbox"
                      value="Offline promotions"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='offline-prootions'> Offline promotions </label>
                  </div>
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="crm">
                    Do you want to integrate the paid ads with your existing CRM or email marketing tools?
                  </label>
                  <input
                    id="crm"
                    name="Integration_With_Paid_Ads"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>
                <hr className='mt-5 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 12. Competitor Analysis </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                    How should the paid ads complement your organic social media content?
                  </label>
                  <input
                    id="paidadd"
                    name="Paid_Ads_Complement"
                    type="text"
                    placeholder='type here the answer'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>


                {/* this is twelveth section */}
                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 13. Additional Preferences </h1>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creativeideas">
                    Do you have any specific creative ideas or themes you’d like to explore?
                  </label>
                  <input
                    id="creativeideas"
                    name="Creative_Ideas"
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
                    name="Content_Type"
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
                    <input
                      id='addstyle-1'
                      name="Particular_Preferences"
                      type="radio"
                      value="Humorous"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='addstyle-1'> Humorous </label>
                  </div>

                  <div>
                    <input
                      id='addstyle-2'
                      name="Particular_Preferences"
                      type="radio"
                      value="Serious"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='addstyle-2'>  Serious </label>
                  </div>

                  <div>
                    <input
                      id='addstyle-3'
                      name="Particular_Preferences"
                      type="radio"
                      value="Urgent"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='addstyle-3'>  Urgent </label>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center my-5">
                <button type="submit" className="px-8 py-2 bg-blue-600 rounded hover:opacity-90 hover:scale-105 transition duration-200 ">
                  Send
                </button>

                <Link href='/' className='ml-auto'>
                  <button type="reset" className="px-8 py-2 border-2 text-blue-600 border-blue-600 rounded hover:opacity-90 hover:text-iceblue hover:border-iceblue transition duration-300">
                    Cancel
                  </button>
                </Link>
              </div>

            </form >
          </div >
        </div >
      </section>
    </>


  );
};

export default PaidAdvertisingForm;
