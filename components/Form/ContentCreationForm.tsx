"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const ContentCreationForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  return (
    <>
      <h2 className="p-4 text-center text-4xl font-bold text-iceblue mb-4 border-b-2 border-iceblue"> Content Creation </h2>
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
              <h1 className='text-2xl font-bold py-3'> 1. Content Goals & Objectives </h1>              

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="primarygoal">
              What are the primary goals for running paid ads?
              </label>
              <div className='grid grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="Primary_Goal"
                      type="radio"
                      value="Brand_Awareness"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'>Brand Awareness </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Primary_Goal"
                    type="radio"
                    value="Educating_your_audience"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Educating your audience </label>
                </div>

                <div>
                  <input
                    id='Answer3'
                    name="Primary_Goal"
                    type="radio"
                    value="Driving_sales"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Driving sales </label>
                </div>

                <div>
                  <input
                    id='Answer4'
                    name="Primary_Goal"
                    type="radio"
                    value="Promoting_products/services"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> Promoting products/services </label>
                </div>

              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What key messages or themes do you want your content to convey?
                </label>
                <input
                  id="company"
                  name="Key_Messages"
                  type="text"
                  placeholder='type here the answer'
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
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="audiance">
              Who is your target audience for these ads? 
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='answer1'
                      name="Target_Audience"
                      type="radio"
                      value="Age"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer1'> Age </label>
                </div>

                <div>
                  <input
                    id='Answer2'
                    name="Target_Audience"
                    type="radio"
                    value="Gender"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer2'> Gender </label>
                </div>      

                <div>
                  <input
                    id='Answer3'
                    name="Target_Audience"
                    type="radio"
                    value="Location"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Location </label>
                </div>    

                <div>
                  <input
                    id='Answer4'
                    name="Target_Audience"
                    type="radio"
                    value="Interests"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer4'> Interests </label>
                </div>     

                <div>
                  <input
                    id='Answer5'
                    name="Target_Audience"
                    type="radio"
                    value="Buying_Behaviour"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer5'> Buying Behaviour </label>
                </div>                 
              </div>              
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                What type of content do you think will resonate most with your audience?
                </label>
                <input
                  id="Content_Type"
                  name="Content_Type"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="e.g. educational, entertaining, inspirational"
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
              <h1 className='text-2xl font-bold py-3'> 03.  Branding & Style  </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Do you have existing brand guidelines that we should follow?
                </label>
                <input
                  id="Existing_Brand_Guidelines"
                  name="Existing_Brand_Guidelines"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="e.g. colours, fonts, logo usage"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                How would you describe your brand’s voice and tone?
                </label>
                <input
                  id="Brand_Voice"
                  name="Brand_Voice"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="e.g. formal, casual, humorous, authoritative"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="persona">
                Are there any specific elements that should be included in the content?

                </label>
                <input
                  id="Specific_Elements"
                  name="Specific_Elements"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder="e.g., slogans, catchphrases "
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
              <h1 className='text-2xl font-bold py-3'> 04. Types of Content </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What types of content are you most interested in creating? 
                </label>
                <input
                  id="Types_Of_Content"
                  name="Types_Of_Content"
                  type="text"
                  placeholder='e.g. blog posts, social media posts, videos, infographics, product photography'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Are there any content formats that have worked well for you in the past?
                </label>
                <input
                  id="Past_Content_Formats"
                  name="Past_Content_Formats"
                  type="text"
                  placeholder='Type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Do you want to focus on any particular content themes or topics?
                </label>
                <input
                  id="Focus_Topics"
                  name="Focus_Topics"
                  type="text"
                  placeholder='e.g. how-tos, industry news, behind-the-scenes, customer stories'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              


            {/* this is the fifth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 05. Content Frequency & Volume </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="offers">
              How often would you like new content to be created?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Content_Frequency'>
                    <input
                      id='Content_Frequency'
                      name="Content_Frequency"
                      type="radio"
                      value="Daily"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Content_Frequency'> Daily </label>
                </div>

                <div>
                  <input
                    id='Content_Frequency'
                    name="Content_Frequency"
                    type="radio"
                    value="Weekly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Content_Frequency'> Weekly </label>
                </div>    

                <div>
                  <input
                    id='Content_Frequency'
                    name="Content_Frequency"
                    type="radio"
                    value="Monthly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer3'> Monthly </label>
                </div>                   
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                What volume of content do you need?
                </label>
                <input
                  id="Content_Volume"
                  name="Content_Volume"
                  type="text"
                  placeholder='e.g. number of posts per week, number of videos per month'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                Do you have a content calendar or schedule in mind?
                </label>
                <input
                  id="Content_Schedule"
                  name="Content_Schedule"
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
              <h1 className='text-2xl font-bold py-3'> 06. Visual Content Preferences </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitors">
                What style of visuals do you prefer?
                </label>
                <input
                  id="Style_of_Visuals"
                  name="Style_of_Visuals"
                  type="text"
                  placeholder='e.g. minimalist, vibrant, illustrative, realistic'
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
                Do you need product photography or videography as part of the content creation?
                </label>
                <input
                  id="Photography_Videography"
                  name="Photography_Videography"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Are there any specific colours, fonts, or visual elements that should be used or avoided?
                </label>
                <input
                  id="Avoided_Elements"
                  name="Avoided_Elements"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Do you have existing visual assets we should incorporate?
                </label>
                <input
                  id="Existing_Assets"
                  name="Existing_Assets"
                  type="text"
                  placeholder='e.g. logos, product images, previous graphics'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              

              
            {/* this is seventh section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 07. Content Approval Process </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Who will be responsible for approving the content before it goes live?
                </label>
                <input
                  id="Responsible_Personnal"
                  name="Responsible_Personnal"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                What is your preferred review and approval process?
                </label>
                <input
                  id="Approval_Process"
                  name="Approval_Process"
                  type="text"
                  placeholder='e.g., first drafts, feedback rounds'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Are there any stakeholders or team members who need to be involved in the content creation process?
                </label>
                <input
                  id="Involved_Team_Members"
                  name="Involved_Team_Members"
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
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 08. Competitor Analysis </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="customaudiance">
              Are there any competitors whose content you admire?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='Admired_content'
                      name="Admired_content"
                      type="radio"
                      value="Email List"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='Answer8-1'> Yes </label>
                </div>

                <div>
                  <input
                    id='Admired_content'
                    name="Admired_content"
                    type="radio"
                    value="No"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='Answer8-2'>  No </label>
                </div>  
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                If Yes, What do you like about their content?
                </label>
                <input
                  id="Preferred_Content"
                  name="Preferred_Content"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                What differentiates your content from your competitors’ content?
                </label>
                <input
                  id="Content_Differences"
                  name="Content_Differences"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Are there any specific strategies or ideas from competitors you’d like to explore?
                </label>
                <input
                  id="Specific_Strategies"
                  name="Specific_Strategies"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
            {/* this is nineth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 09. Content Distribution </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platform">
              On which platforms do you want the content to be shared?
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
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Do you have any specific distribution strategies or times you want to post?
                </label>
                <input
                  id="Specific_Distribution_Strategies"
                  name="Specific_Distribution_Strategies"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                How do you plan to use the content outside of social media?
                </label>
                <input
                  id="Use_Of_Content"
                  name="Use_Of_Content"
                  type="text"
                  placeholder='e.g. newsletters, website, brochures'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              {/* this is the tenth section */}


              <hr className='mt-5 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 10. Content Performance & Metrics </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                What metrics or KPIs are most important to you when evaluating content performance?
                </label>
                <input
                  id="KPIs"
                  name="KPIs"
                  type="text"
                  placeholder='e.g. engagement, reach, conversions'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                How do you plan to measure the success of the content? 
                </label>
                <input
                  id="Measure_Success"
                  name="Measure_Success"
                  type="text"
                  placeholder='e.g., social media analytics, sales data, customer feedback'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competition">
                Do you have any previous content performance data that we can review to guide the creation of new content?
                </label>
                <input
                  id="previous_content"
                  name="previous_content"
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
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 11. Budget & Resources </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creativeideas">
                What is your budget for content creation?
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
                Are there any resources you can provide to assist with content creation?
                </label>
                <input
                  id="Used_Resources"
                  name="Used_Resources"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='e.g. product samples, testimonials, existing content'
                  required
                />
              </div> 

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                Do you have access to any specific tools or software you prefer for content creation or collaboration?
                </label>
                <input
                  id="Specific_Tools"
                  name="Specific_Tools"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>  

              {/* this is the twelveth section */}

              <hr className='mt-5 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 12. Competitor Analysis </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                Are there any upcoming events, promotions, or product launches we should create content for?
                </label>
                <input
                  id="Upcoming_Events"
                  name="Upcoming_Events"
                  type="text"
                  placeholder='type here the answer'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                Do you plan to expand your content types or channels in the future?
                </label>
                <input
                  id="Expand_Content"
                  name="Expand_Content"
                  type="text"
                  placeholder='e.g. starting a YouTube channel, creating a blog'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="paidadd">
                How do you envision your content evolving over the next 6-12 months?
                </label>
                <input
                  id="Content_Evolution"
                  name="Content_Evolution"
                  type="text"
                  placeholder='e.g. starting a YouTube channel, creating a blog'
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>
              

              
            {/* this is twelveth section */}
            <hr className='mt-10 mb-5'/>
              <h1 className='text-2xl font-bold py-3'> 13. Additional Preferences </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="creativeideas">
                Are there any specific themes or trends you’d like to incorporate into your content?
                </label>
                <input
                  id="Specific_Themes"
                  name="Specific_Themes"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='type here the answer'
                  required
                />
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                Do you have any particular preferences for the length or format of the content?
                </label>
                <input
                  id="Prefered_Format"
                  name="Prefered_Format"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  placeholder='e.g. short videos, long-form articles'
                  required
                />
              </div>    

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="regulation">
                Are there any content types or topics you’d like to avoid?
                </label>
                <textarea name="Avoid_Content" placeholder=" Type here the answer  " className='placeholder-slate-700 p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' >
                </textarea>
              </div>    
                     
            </motion.div>


          </form >
        </div >
      </div >
    </>


  );
};

export default ContentCreationForm;
