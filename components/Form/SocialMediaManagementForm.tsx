"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import { FaHome } from "react-icons/fa";


const WebDesignForm = () => {

  const ref1 = useRef(null);
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
            Social Media Management
          </h2>
          <div className="w-20"></div>
        </div>      
        <div className="container mx-auto px-2 md:px-20 flex flex-col lg:flex-row lg:space-x-12" id="Contact">
        {/* Contact Form */}

        <div className="lg:w-full">
        <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                const Platforms = formData.getAll("Platforms");
                const sharingContents = formData.getAll("Sharing-Contents");
                const primaryGoals = formData.getAll("Primary-Goals");
                const contentTypes = formData.getAll("Content-Types");
                const metrics = formData.getAll("Metrics");
            
                formData.set("Platforms", Platforms.join(", "));
                formData.set("Sharing-Contents", sharingContents.join(", "));
                formData.set("Primary-Goals", primaryGoals.join(", "));
                formData.set("Content-Types", contentTypes.join(", "));
                formData.set("Metrics", metrics.join(", "));

                try {
                  const response = await fetch('https://script.google.com/macros/s/AKfycbz_VH4pTir1i-e4jkDR36OcU-QO3GaWQoXB0tobjkluckNplvI0nQ9VhBIeOMGFHok33g/exec', {
                    method: 'POST',
                    body: formData,
                  });

                  const result = await response.json();
                  if (result.result === 'success') {
                    window.location.href = '/thankyou';
                  } else {
                    alert(`Error: ${result.message}`);
                  }
                } catch (error) {
                  console.error('Error submitting form:', error);
                  alert('An error occurred. Please try again later.');
                }
              }}
            >
            <motion.div
              ref={ref1} // Attach the ref to the element
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}
              className="wow fadeInUp"
            >
              <input type="hidden" name="formName" value="Social_Media_Management" />
              <input type="hidden" name="Submited-Time" value={new Date().toLocaleString()} />
              <h1 className='text-2xl font-bold py-3'> 1. Business Overview </h1>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="company">
                  What the name of your Company / Business ?
                </label>
                <input
                  id="company"
                  name="Company"
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
                  <input
                    id='ecommerce'
                    name="Nature"
                    type="radio"
                    value="e-commerce"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='ecommerce'> E-commerce </label>
                </div>

                <div>
                  <input
                    id='service-based'
                    name="Nature"
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
                    name="Nature"
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
                    name="Nature"
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
                  name="Product"
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
                  name="Target-Audience"
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
                  name="USPs"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 2. Current Social Media Presence
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platform">
                Which social media platforms are you currently using ?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                    <input
                      id='facebook'
                      name="Platforms"
                      type="checkbox"
                      value="facebook"
                      className="w-4 h-4"
                    />
                  <label htmlFor='facebook'> Facebook </label>
                </div>

                <div>
                  <input
                    id='instergram'
                    name="Platforms"
                    type="checkbox"
                    value="instergram"
                    className="w-4 h-4"
                  />
                  <label htmlFor='instergram'> Instergram </label>
                </div>

                <div>
                  <input
                    id='tiktok'
                    name="Platforms"
                    type="checkbox"
                    value="tiktok"
                    className="w-4 h-4"
                  />
                  <label htmlFor='tiktok'> Tiktok</label>
                </div>

                <div>
                  <input
                    id='twitter'
                    name="Platforms"
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
                <textarea name="Frequently-Use" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white' required>
                </textarea>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="activeness">
                  Do you have existing social media accounts ? and if so, how active are they?
                </label>
                <input
                  id="activeness"
                  name="Social-Media-Activeness"
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
                  name="Social-Media-Manager"
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
                    name="Sharing-Contents"
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
                    name="Sharing-Contents"
                    type="checkbox"
                    value="images"
                    className="w-4 h-4"
                  />
                  <label htmlFor='images'>  Images </label>
                </div>

                <div>
                  <input
                    id='videos'
                    name="Sharing-Contents"
                    type="checkbox"
                    value="videos"
                    className="w-4 h-4"
                  />
                  <label htmlFor='videos'> Videos </label>
                </div>

                <div>
                  <input
                    id='blogs'
                    name="Sharing-Contents"
                    type="checkbox"
                    value="blogs"
                    className="w-4 h-4"
                  />
                  <label htmlFor='blogs'> Blogs </label>
                </div>
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 03. Goals & Objectives
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="primarygoal">
                What are your primary goals for social media?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                  <label htmlFor='primarygoal'>
                    <input
                      id='brandawareness'
                      name="Primary-Goals"
                      type="checkbox"
                      value="brandawareness"
                      className="w-4 h-4"
                    />
                  </label>
                  <label htmlFor='brandawareness'> Brand Awareness </label>
                </div>

                <div>
                  <input
                    id='lead_generation'
                    name="Primary-Goals"
                    type="checkbox"
                    value=" lead_generation"
                    className="w-4 h-4"
                  />
                  <label htmlFor='lead_generation'>  Lead Generation </label>
                </div>

                <div>
                  <input
                    id='customer_engagement'
                    name="Primary-Goals"
                    type="checkbox"
                    value="customer_engagement"
                    className="w-4 h-4"
                  />
                  <label htmlFor='customer_engagement'> Customer Engagement </label>
                </div>

                <div>
                  <input
                    id='community_building'
                    name="Primary-Goals"
                    type="checkbox"
                    value="community_building"
                    className="w-4 h-4"
                  />
                  <label htmlFor='community_building'> Community Building </label>
                </div>

                <div>
                  <input
                    id='sales'
                    name="Primary-Goals"
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
                    <input
                      id='campaign-yes'
                      name="Campaigns/Promotions"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='campaign-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='campaign-no'
                      name="Campaigns/Promotions"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='campaign-no'> No </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="traffic">
                  Do you want to grow your followers, increase engagement, or drive traffic to your website?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <input
                      id='traffic-yes'
                      name="Grow-Followers"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='traffic-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='traffic-no'
                      name="Grow-Followers"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='traffic-no'> No </label>
                  </div>
                </div>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="objectives">
                  What are your long-term objectives with social media?
                </label>
                <input
                  id="onjectives"
                  name="Social-Media-Objectives"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 4. Content Strategy
              </h1>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="contenttype">
                What types of contents do you think resonate most with your audience?
              </label>

              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                    <input
                      id='educational'
                      name="Content-Types"
                      type="checkbox"
                      value="educational"
                      className="w-4 h-4"
                    />
                  <label htmlFor='educational'> Educational </label>
                </div>

                <div>
                  <input
                    id='promotional,'
                    name="Content-Types"
                    type="checkbox"
                    value=" promotional"
                    className="w-4 h-4"
                  />
                  <label htmlFor='promotional,'>  Promotional </label>
                </div>

                <div>
                  <input
                    id='customer-engagement'
                    name="Content-Types"
                    type="checkbox"
                    value="customer_engagement"
                    className="w-4 h-4"
                  />
                  <label htmlFor='customer-engagement'> Customer Engagement </label>
                </div>

                <div>
                  <input
                    id='behind-the-scenes'
                    name="Content-Types"
                    type="checkbox"
                    value="behind-the-scenes"
                    className="w-4 h-4"
                  />
                  <label htmlFor='behind-the-scenes'> Behind-The-Scenes </label>
                </div>

                <div>
                  <input
                    id='customer_testimonials'
                    name="Content-Types"
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
                    <input
                      id='person-yes'
                      name="Want-Content-Creator"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='person-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='person-no'
                      name="Want-Content-Creator"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='person-no'> No </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
                  Would you like assistance with content creation ? (ex:- photography, video production, graphic design)
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <input
                      id='assistant-yes'
                      name="Assistant-Content-Creation"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='assistant-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='assistant-no'
                      name="Assistant-Content-Creation"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='assistant-no'> No </label>
                  </div>
                </div>
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="posttimes">
                  How often would you like to post? (daily, weekly, etc.)
                </label>
                <input
                  id="posttimes"
                  name="Post-Time-Range"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 5. Branding & Voice
              </h1>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="guidline">
                  Do you have established brand guidelines ? (e.g., color schemes, fonts, logos)
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                    <input
                      id='guidline-yes'
                      name="Guidlines"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='guidline-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='guidline-no'
                      name="Guidlines"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='guidline-no'> No </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="brand-type">
                  How would you describe your brand’s voice and tone?
                </label>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                  <div>
                      <input
                        id='Professional'
                        name="Brand-Type"
                        type="radio"
                        value="Professional"
                        className="w-4 h-4"
                        required
                      />
                    <label htmlFor='Professional'> Professional </label>
                  </div>

                  <div>
                    <input
                      id='Casual'
                      name="Brand-Type"
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
                      name="Brand-Type"
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
                <textarea name="Additional" placeholder='if no , type "none"' className='placeholder-slate-700 p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                </textarea>
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 6. Audience Engagement
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="engage">
                  How do you currently engage with your audience? (ex:- Responding to Comments, Direct Messages, Running Polls)
                </label>
                <input
                  id="engage"
                  name="Engage-with-Audiance"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="planforcustomerinquaries">
                Do you have a plan for handling customer inquiries and feedback on social media?
              </label>
              <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-10'>
                <div>
                  <input
                    id='plan-yes'
                    name="Plan-for-Customer-Inquiries"
                    type="radio"
                    value="yes"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='plan-yes'> Yes </label>
                </div>

                <div>
                  <input
                    id='plan-no'
                    name="Plan-for-Customer-Inquiries"
                    type="radio"
                    value="no"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='plan-no'> No </label>
                </div>
              </div>


              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="challenges">
                  Are there any challenges you face with audience engagement?
                </label>
                <input
                  id="challenges"
                  name="Challenges"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 7. Advertising & Promotions
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="campaign">
                  Have you run any paid advertising campaigns on social media before? If so, how did they perform ?
                </label>
                <input
                  id="campaign"
                  name="Campaign"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="budget">
                  What is your budget for social media advertising?
                </label>
                <span className=''> EURO </span>
                <input
                  id="budget"
                  name="Budget"
                  type="number"
                  className="w-1/3 md:w-3/12 md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="upcomingpromotion">
                  Do you have any upcoming promotions or events you want to highlight?
                </label>
                <input
                  id="upcomingpromotion"
                  name="Upcoming-Promotions"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>


              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 8. Competitor Analysis
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="competitor">
                  Who are your main competitors, and how are they using social media?
                </label>
                <input
                  id="competitor"
                  name="Competitors"
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
                  name="Speific-Competitors"
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
                  name="Difference"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 9. Measurement & Reporting
              </h1>
              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="kpi">
                What key performance indicators (KPIs) are most important to you?
              </label>
              <div className='grid md:grid-cols-2 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='click-through-rate'
                      name="KPI"
                      type="radio"
                      value="click-through-rate"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='click-through-rate'> Click-Through Rate (CTR) </label>
                </div>

                <div>
                  <input
                    id='engagement-rate'
                    name="KPI"
                    type="radio"
                    value="engagement-rate"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='engagement-rate'>  Engagement Rate </label>
                </div>

                <div>
                  <input
                    id='follower-growth'
                    name="KPI"
                    type="radio"
                    value="follower-growth"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='follower-growth'>  Follower Growth </label>
                </div>
              </div>

              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="Report-Timeline">
                How frequently do you want to receive performance reports ?
              </label>
              <div className='grid md:grid-cols-3 grid-cols-1 pb-10 gap-1'>
                <div>
                  <label htmlFor='Answer1'>
                    <input
                      id='weekly'
                      name="Report-Timeline"
                      type="radio"
                      value="weekly"
                      className="w-4 h-4"
                      required
                    />
                  </label>
                  <label htmlFor='weekly'> Weekly </label>
                </div>

                <div>
                  <input
                    id='bi-weekly'
                    name="Report-Timeline"
                    type="radio"
                    value="bi-weekly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='bi-weekly'>  Bi-Weekly </label>
                </div>

                <div>
                  <input
                    id='monthly'
                    name="Report-Timeline"
                    type="radio"
                    value="monthly"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor='monthly'>  Monthly </label>
                </div>
              </div>


              <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="metrics">
                What metrics would you like to focus on?
              </label>

              <div className='grid md:grid-cols-3 grid-cols-2 pb-10 gap-1'>
                <div>
                  <input
                    id='ROI'
                    name="Metrics"
                    type="checkbox"
                    value="ROI"
                    className="w-4 h-4"
                  />
                  <label htmlFor='ROI'> ROI </label>
                </div>

                <div>
                  <input
                    id='conversion-rate'
                    name="Metrics"
                    type="checkbox"
                    value="conversion-rate"
                    className="w-4 h-4"
                  />
                  <label htmlFor='conversion-rate'> Conversion Rate </label>
                </div>

                <div>
                  <input
                    id='reach'
                    name="Metrics"
                    type="checkbox"
                    value="reach"
                    className="w-4 h-4"
                  />
                  <label htmlFor='reach'> Reach </label>
                </div>
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 10. Budget & Resources
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="socialmediabudget">
                  What is your budget for social media management?
                </label>
                <input
                  id="socialmediabudget"
                  name="Socialmedia_Budget"
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
                  name="Strategy"
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
                  name="Tools"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 11. Future Plans
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="new-product">
                  Are there any new products, services, or locations you plan to introduce ?
                </label>
                <input
                  id="new-product"
                  name="New-Product"
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
                  name="Promotion"
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
                  name="Social-Media-Presence"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

              <hr className='mt-20 mb-5' />
              <h1 className='text-2xl font-bold py-3'> 12. Additional Preferences
              </h1>
              <div className='pb-5'>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="platforms">
                  Are there any specific platforms you would like to focus on ?
                </label>
                <input
                  id="platforms"
                  name="Focused-Platforms"
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
                  name="Post-Time"
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
                  name="Trends"
                  type="text"
                  className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                  required
                />
              </div>

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

            </motion.div>
          </form >
        </div >
      </div >
      </section>
    </>


  );
};

export default WebDesignForm;
