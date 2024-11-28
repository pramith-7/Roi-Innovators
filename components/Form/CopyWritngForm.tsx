"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const CopyWritingForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  return (
    <>
      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue"> Copy Writing </h2>
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
              <h1 className='text-2xl font-bold py-3'> 1. Objectives & Goals </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What are your primary goals for the copywriting project?
                </label>
                <input
                  id="company"
                  name="Primary_Goals"
                  type="text"
                  placeholder='e.g. increasing sales, building brand awareness, educating customers'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What specific outcomes do you expect from the copy?
                </label>
                <input
                  id="company"
                  name="Specific_Outcomes"
                  type="text"
                  placeholder='e.g. higher conversion rates, better engagement, clearer communication'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What are the key messages or themes you want the copy to convey?
                </label>
                <input
                  id="company"
                  name="key_Messages"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
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
              <h1 className='text-2xl font-bold py-3'> 02. Target Audience </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Who is your target audience for this copy?
                </label>
                <input
                  id="company"
                  name="Target_Audience"
                  type="text"
                  placeholder='e.g. demographics, interests, pain points, buying behavior'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What are the key concerns or problems of your target audience that the copy should address?
                </label>
                <input
                  id="company"
                  name="Key_Concerns&Problems"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What tone or style will resonate best with your audience?
                </label>
                <input
                  id="company"
                  name="Tone_Or_Style"
                  type="text"
                  placeholder='e.g., formal, conversational, authoritative, friendly'
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
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 03.  Brand Voice & Tone </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                How would you describe your brand’s voice?
                </label>
                <input
                  id="company"
                  name="Brand_Voice"
                  type="text"
                  placeholder='e.g. professional, casual, humorous, straightforward'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Do you have existing brand guidelines that the copy should align with?
                </label>
                <input
                  id="company"
                  name="Existing_Brand_Guidelines"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Are there any specific words, phrases, or terminology that should be used or avoided?
                </label>
                <input
                  id="company"
                  name="Restrictions"
                  type="text"
                  placeholder='Type here the answer'
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
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 04. Types of Copy </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What types of copy do you need?
                </label>
                <input
                  id="company"
                  name="Types_Of_Copy"
                  type="text"
                  placeholder='e.g. website content, product descriptions, social media posts, email newsletters, blog posts, ads'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Do you have existing content that needs to be revised or rewritten?
                </label>
                <input
                  id="company"
                  name="Existing_Content"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Are there any specific topics or themes you want to focus on?
                </label>
                <input
                  id="company"
                  name="Specific_Topics"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
              What type of ad content do you prefer?
              </label>

              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="Ad_Content_Type"
                      type="checkbox"
                      value="Images"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> Images </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Ad_Content_Type"
                    type="checkbox"
                    value="Videos"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="Ad_Content_Type"
                    type="checkbox"
                    value="Carousels"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer3'> Carousels </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="Ad_Content_Type"
                    type="checkbox"
                    value="Slideshows"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer4'> Slideshows </label>
                </div>

                <div>
                  <input
                    id='Answer5'
                    name="Ad_Content_Type"
                    type="checkbox"
                    value="Stories"
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
                      name="Creative"
                      type="checkbox"
                      value="Product Photos"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='Answer1'> Product Photos </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Creative"
                    type="checkbox"
                    value="Videos"
                    className="w-4 h-4"
                  />
                  <label htmlFor='Answer2'> Videos </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="Creative"
                    type="checkbox"
                    value="Graphic design"
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
                      name="CTA"
                      type="radio"
                      value="Shop Now"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Shop Now </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="CTA"
                    type="radio"
                    value="Learn More"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Learn More </label>
                </div>    

                <div>
                  <input
                    id='Answer3'
                    name="CTA"
                    type="radio"
                    value="Sign Up"
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
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 05. Content Structure & Format </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
              Do you have a preferred length for the copy?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="Copy_length"
                      type="radio"
                      value="Short and Concise"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Short and Concise </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Copy_length"
                    type="radio"
                    value="In-depth"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> In-depth </label>
                </div>                
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
              Are there any specific formats or structures you want to follow?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="Specific_Formats"
                      type="radio"
                      value="Bullet Points"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Bullet Points </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Specific_Formats"
                    type="radio"
                    value="FAQs"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'>  FAQs </label>
                </div>   

                <div>
                  <input
                    id='Answer2'
                    name="Specific_Formats"
                    type="radio"
                    value="Listicles"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'>  Listicles </label>
                </div>                
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="promotion">
                Do you need SEO-optimized copy?
                </label>
                <input
                  id="promotion"
                  name="SEO_Optimized_Copy"
                  type="text"
                  placeholder='e.g. inclusion of keywords, meta descriptions, internal linking'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="promotion">
                Should the copy include any specific calls-to-action (CTAs)?
                </label>
                <input
                  id="promotion"
                  name="Specific_CTAs"
                  type="text"
                  placeholder='e.g. Buy Now, Learn More, Contact Us '
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
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
              <h1 className='text-2xl font-bold py-3'> 06. Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there any competitors whose copywriting you admire?(What do you like about their approach?)
                </label>
                <input
                  id="competitors"
                  name="Competitors"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Are there any content pieces, articles, or websites that serve as inspiration for the style or tone you want?
                </label>
                <textarea name="Customer_Needs" placeholder=" Type here the answer  " className='placeholder-slate-700 p-2 md:p-3 w-full h-30 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Do you have testimonials, case studies, or customer stories that should be included?
                </label>
                <textarea name="Other_Includings" placeholder=" Type here the answer  " className='placeholder-slate-700 p-2 md:p-3 w-full h-30 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>   

              
            {/* this is seventh section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 07. Existing Content & References </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you have any existing copy or materials that should be referenced or integrated?
                </label>
                <input
                  id="Existing_Copytointegrate"
                  name="Existing_Copytointegrate"
                  type="text"
                  placeholder='e.g. brochures, previous campaigns'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there any content pieces, articles, or websites that serve as inspiration for the style or tone you want?
                </label>
                <input
                  id="Inspiration_Styles"
                  name="Inspiration_Styles"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you have testimonials, case studies, or customer stories that should be included?
                </label>
                <input
                  id="Testimonials_Or_Case_Studies"
                  name="Testimonials_Or_Case_Studies"
                  type="text"
                  placeholder='Type here the answer'
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
              <h1 className='text-2xl font-bold py-3'> 08. Approval & Feedback Process </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Who will be responsible for reviewing and approving the copy?
                </label>
                <input
                  id="Responsible_Parties"
                  name="Responsible_Parties"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                What is your preferred feedback and revision process?
                </label>
                <input
                  id="Feedback_Process"
                  name="Feedback_Process"
                  type="text"
                  placeholder='e.g., one round of feedback, multiple revisions'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there any specific deadlines or timelines we need to adhere to?
                </label>
                <input
                  id="Specific_Deadlines"
                  name="Specific_Deadlines"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


            {/* this is nineth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 09. Legal & Compliance Considerations </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there any legal or compliance requirements the copy needs to meet?
                </label>
                <input
                  id="Legal_Requirments"
                  name="Legal_Requirments"
                  type="text"
                  placeholder='e.g. disclaimers, industry regulations'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you have specific terms, conditions, or privacy policies that need to be included?
                </label>
                <input
                  id="Specific_Conditions"
                  name="Specific_Conditions"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
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
              <h1 className='text-2xl font-bold py-3'> 10. Performance & Measurement </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                How will you measure the success of the copy?
                </label>
                <input
                  id="Measurement_Of_Success"
                  name="Measurement_Of_Success"
                  type="text"
                  placeholder='e.g. engagement rates, conversion rates, feedback from customers'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Do you have any performance metrics from past content that we can review?
                </label>
                <input
                  id="Past_Performance_Metrics"
                  name="Past_Performance_Metrics"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                Are there specific metrics you want to improve through the new copy?
                </label>
                <input
                  id="Specific_Metrics"
                  name="Specific_Metrics"
                  type="text"
                  placeholder='e.g. higher open rates, increased click-through rates'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <hr className='mt-5 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 11. Additional Preferences </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
              Are there any particular writing styles or techniques you prefer?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Answer1'
                      name="Writing_Techniques"
                      type="radio"
                      value="Storytelling"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Storytelling </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Writing_Techniques"
                    type="radio"
                    value="Persuasive Writing"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'>  Persuasive Writing </label>
                </div>   

                <div>
                  <input
                    id='Answer2'
                    name="Writing_Techniques"
                    type="radio"
                    value="Educational Content"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'>  Educational Content </label>
                </div>                
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                Do you have a preferred voice for certain types of content?
                </label>
                <input
                  id="Preferred_Voice_For_Content"
                  name="Preferred_Voice_For_Content"
                  type="text"
                  placeholder='e.g. formal for emails, casual for social media'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              
            {/* this is twelveth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 12. Budget & Resources </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creativeideas">
                What is your budget for the copywriting project?
                </label>
                <input
                  id="Budget"
                  name="Budget"
                  type="number"
                  min="0"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='Enter the amount'
                  required
                />
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                Do you have any resources or tools that should be used?
                </label>
                <input
                  id="Used_Resources"
                  name="Used_Resources"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='e.g. style guides, content management systems'
                  required
                />
              </div> 

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                Are there any additional services you might need related to copywriting?
                </label>
                <input
                  id="Additional_Services"
                  name="Additional_Services"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='e.g. content strategy, editing, proofreading'
                  required
                />
              </div>  
                      
            </motion.div>


          </form >
        </div >
      </div >
    </>


  );
};

export default CopyWritingForm;
