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

      <div className="absolute top-[50%] opacity-55 justify-center z-[-1] transition -translate-x-96">
        <div className="w-[350px] h-[800px] rounded-full blur-[100px] bg-gradientbg2 "> </div>
      </div>
      <div className="absolute top-[300%] right-0 translate-x-96 opacity-55 z-[-1]">
        <div className="w-[340px] h-[800px] rounded-full blur-[100px] bg-gradientbg2"></div>
      </div>

      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue"> - Social Media Mangement - </h2>
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
                  What the name of your Company / Business ?
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="nature">
                What is the nature of your business?
              </label>
              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
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
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="usp">
                What are your unique selling points (USPs) compared to your competitors?
                </label>
                <input
                  id="usp"
                  name="usp"
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
              <h1 className='text-2xl font-bold py-3'> (02) Current Social Media Presence
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platform">
              Which social media platforms are you currently using ?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='platform'>
                    <input
                      id='facebook'
                      name="feature"
                      type="checkbox"
                      value="facebook"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='facebook'> Facebook </label>
                </div>

                <div>
                  <input
                    id='instergram'
                    name="feature"
                    type="checkbox"
                    value="instergram"
                    className="w-4 h-4"
                  />
                  <label htmlFor='instergram'> Instergram </label>
                </div>

                <div>
                  <input
                    id='tiktok'
                    name="feature"
                    type="checkbox"
                    value="tiktok"
                    className="w-4 h-4"
                  />
                  <label htmlFor='tiktok'> Tiktok</label>
                </div>

                <div>
                  <input
                    id='twitter'
                    name="feature"
                    type="checkbox"
                    value="twitter"
                    className="w-4 h-4"
                  />
                  <label htmlFor='twitter'> Twitter </label>
                </div>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="frequentlyuse">
                How frequently do you post on each platform ?
                </label>
                <textarea name="frequentlyuse" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="activeness">
                Do you have existing social media accounts ? and if so, how active are they?
                </label>
                <input
                  id="activeness"
                  name="activeness"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="manageperson">
                Who currently manages your social media accounts ?
                </label>
                <input
                  id="manageperson"
                  name="manageperson"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
              What types of content have you been sharing ?
              </label>
              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
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


              <h1 className='text-2xl font-bold py-3'> (03) Goals & Objectives
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="primarygoal">
              What are your primary goals for social media?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='primarygoal'>
                    <input
                      id='brandawareness'
                      name="feature"
                      type="checkbox"
                      value="brandawareness"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='brandawareness'> Brand Awareness </label>
                </div>

                <div>
                  <input
                    id=' lead_generation'
                    name="feature"
                    type="checkbox"
                    value=" lead_generation"
                    className="w-4 h-4"
                  />
                  <label htmlFor='lead_generation'>  Lead Generation </label>
                </div>

                <div>
                  <input
                    id='customer_engagement'
                    name="feature"
                    type="checkbox"
                    value="customer_engagement"
                    className="w-4 h-4"
                  />
                  <label htmlFor='customer_engagement'> Customer Engagement </label>
                </div>

                <div>
                  <input
                    id='community_building'
                    name="feature"
                    type="checkbox"
                    value="community_building"
                    className="w-4 h-4"
                  />
                  <label htmlFor='community_building'> Community Building </label>
                </div>

                <div>
                  <input
                    id='sales'
                    name="feature"
                    type="checkbox"
                    value="sales"
                    className="w-4 h-4"
                  />
                  <label htmlFor='sales'> Sales </label>
                </div>

              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="campaign">
                Are there any specific campaigns or promotions you want to focus on?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='campaign'>
                      <input
                        id='yes'
                        name="campaign"
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
                      name="campaign"
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
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="traffic">
                Do you want to grow your followers, increase engagement, or drive traffic to your website?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='traffic'>
                      <input
                        id='yes'
                        name="traffic"
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
                      name="traffic"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='no'> No </label>
                  </div>
                </div>
              </div>  

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="onjectives">
                What are your long-term objectives with social media?
                </label>
                <input
                  id="onjectives"
                  name="onjectives"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <h1 className='text-2xl font-bold py-3'> (04) Content Strategy
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
              What types of content do you think resonate most with your audience?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='contenttype'>
                    <input
                      id='educational'
                      name="feature"
                      type="checkbox"
                      value="educational"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='educational'> Educational </label>
                </div>

                <div>
                  <input
                    id=' promotional,'
                    name="feature"
                    type="checkbox"
                    value=" promotional,"
                    className="w-4 h-4"
                  />
                  <label htmlFor='promotional,'>  Promotional </label>
                </div>

                <div>
                  <input
                    id='customer_engagement'
                    name="feature"
                    type="checkbox"
                    value="customer_engagement"
                    className="w-4 h-4"
                  />
                  <label htmlFor='customer_engagement'> Customer Engagement </label>
                </div>

                <div>
                  <input
                    id='behind-the-scenes'
                    name="feature"
                    type="checkbox"
                    value="behind-the-scenes"
                    className="w-4 h-4"
                  />
                  <label htmlFor='behind-the-scenes'> Behind-The-Scenes </label>
                </div>

                <div>
                  <input
                    id='customer_testimonials'
                    name="feature"
                    type="checkbox"
                    value="customer_testimonials"
                    className="w-4 h-4"
                  />
                  <label htmlFor='customer_testimonials'> Customer Testimonials </label>
                </div>

              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="person">
                do you have someone who takes photos, writes posts, creates graphics?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='person'>
                      <input
                        id='yes'
                        name="person"
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
                      name="person"
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
                Would you like assistance with content creation? (ex:- photography, video production, graphic design)

                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='assistant'>
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

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="posttimes">
                How often would you like to post? (daily, weekly, etc.)
                </label>
                <input
                  id="posttimes"
                  name="posttimes"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              
              <h1 className='text-2xl font-bold py-3'> (05)  Branding & Voice
              </h1>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="guidline">
                Do you have established brand guidelines ? (e.g., color schemes, fonts, logos)
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='guidline'>
                      <input
                        id='yes'
                        name="guidline"
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
                      name="guidline"
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
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="tone">
                How would you describe your brand’s voice and tone? 
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='tone'>
                      <input
                        id='Professional'
                        name="tone"
                        type="radio"
                        value="Professional"
                        className="w-4 h-4"
                        required
                      />
                    </label>
                    <label htmlFor='Professional'> Professional </label>
                  </div>

                  <div>
                    <input
                      id='Casual'
                      name="tone"
                      type="radio"
                      value="Casual"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Casual'> Casual </label>
                  </div>

                  <div>
                    <input
                      id='Humorous'
                      name="tone"
                      type="radio"
                      value="Humorous"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='Humorous'> Humorous </label>
                  </div>

                </div>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="message">
                Are there any specific messages or themes you want to convey consistently ?
                </label>
                <textarea name="message" placeholder='if no , type "none"' className='placeholder-slate-700 p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>


              <h1 className='text-2xl font-bold py-3'> (06) Audience Engagement
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="engage">
                How do you currently engage with your audience? (ex:- Responding to Comments, Direct Messages, Running Polls)
                </label>
                <input
                  id="engage"
                  name="engage"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="plan">
              Do you have a plan for handling customer inquiries and feedback on social media?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <label htmlFor='plan'>
                      <input
                        id='yes'
                        name="campaign"
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
                      name="campaign"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='no'> No </label>
                  </div>
                  </div>


                  <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="challenges">
                Are there any challenges you face with audience engagement?
                </label>
                <input
                  id="challenges"
                  name="challenges"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <h1 className='text-2xl font-bold py-3'> (07). Advertising & Promotions
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="campaign">
                Have you run any paid advertising campaigns on social media before? If so, how did they perform ?
                </label>
                <input
                  id="campaign"
                  name="campaign"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
                What is your budget for social media advertising?
                </label>
                <span className=''> LKR </span>
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  className="w-1/3 md:w-3/12 md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
                 <span className=''> /= </span>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="upcomingpromotion">
                Do you have any upcoming promotions or events you want to highlight?
                </label>
                <input
                  id="upcomingpromotion"
                  name="upcomingpromotion"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>



              <h1 className='text-2xl font-bold py-3'> (08). Competitor Analysis
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitor">
                Who are your main competitors, and how are they using social media?
                </label>
                <input
                  id="competitor"
                  name="competitor"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there any specific competitors whose social media presence you admire?
                </label>
                <input
                  id="competitors"
                  name="competitors"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="differentiate">
                What differentiates your business from your competitors on social media?
                </label>
                <input
                  id="differentiate"
                  name="differentiate"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <h1 className='text-2xl font-bold py-3'> (09). Measurement & Reporting
              </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="kpi">
              What key performance indicators (KPIs) are most important to you?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='click-through-rate'
                      name="kpi"
                      type="radio"
                      value="click-through-rate"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='kpi'> Click-Through Rate (CTR) </label>
                </div>

                <div>
                  <input
                    id='engagement-rate'
                    name="kpi"
                    type="radio"
                    value="engagement-rate"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='kpi'>  Engagement Rate </label>
                </div>   

                <div>
                  <input
                    id='follower-growth'
                    name="kpi"
                    type="radio"
                    value="follower-growth"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='kpi'>  Follower Growth </label>
                </div>                 
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="performance">
              How frequently do you want to receive performance reports ?
              </label>
              <div className='grid md:grid-cols-3 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='weekly'
                      name="performance"
                      type="radio"
                      value="weekly"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='kpi'> Weekly </label>
                </div>

                <div>
                  <input
                    id='bi-weekly'
                    name="performance"
                    type="radio"
                    value="bi-weekly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='kpi'>  Bi-Weekly </label>
                </div>  

                <div>
                  <input
                    id='monthly'
                    name="performance"
                    type="radio"
                    value="monthly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='kpi'>  Monthly </label>
                </div>          
              </div>


              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="metrics">
              What metrics would you like to focus on?
              </label>

              <div className='grid md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                    <input
                      id='ROI'
                      name="feature"
                      type="checkbox"
                      value="ROI"
                      className="w-4 h-4"
                    />          
                  <label htmlFor='metrics'> ROI </label>
                </div>

                <div>
                  <input
                    id='conversion-rate'
                    name="feature"
                    type="checkbox"
                    value="conversion-rate"
                    className="w-4 h-4"
                  />
                  <label htmlFor='metrics'> Conversion Rate </label>
                </div>

                <div>
                  <input
                    id='reach'
                    name="feature"
                    type="checkbox"
                    value="reach"
                    className="w-4 h-4"
                  />  
                  <label htmlFor='metrics'> Reach </label>
                </div>
              </div>


              <h1 className='text-2xl font-bold py-3'> (10). Budget & Resources
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="socialmediabudget">
                What is your budget for social media management?
                </label>
                <input
                  id="socialmediabudget"
                  name="socialmediabudget"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="strategy">
                Are there any resources you can provide to support your social media strategy? (e.g., product images, customer testimonials)
                </label>
                <input
                  id="strategy"
                  name="strategy"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="tools">
                Do you have any specific tools or software you prefer to use?
                </label>
                <input
                  id="tools"
                  name="tools"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <h1 className='text-2xl font-bold py-3'> (11). Future Plans
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="new-product">
                  Are there any new products, services, or locations you plan to introduce ?
                </label>
                <input
                  id="new-product"
                  name="new-product"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="promotion">
                Do you have any seasonal promotions or events that should be highlighted?
                </label>
                <input
                  id="promotion"
                  name="promotion"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="presence">
                How do you see your social media presence evolving in the next 6-12 months?
                </label>
                <input
                  id="presence"
                  name="presence"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <h1 className='text-2xl font-bold py-3'> (12). Additional Preferences
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platforms">
                  Are there any specific platforms you would like to focus on or avoid?
                </label>
                <input
                  id="platforms"
                  name="platforms"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="post-time">
                  Do you have any preferred times for posting?
                </label>
                <input
                  id="post-time"
                  name="post-time"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="trends">
                  Are there any industry trends or topics you want to capitalise on?
                </label>
                <input
                  id="trends"
                  name="trends"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
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
