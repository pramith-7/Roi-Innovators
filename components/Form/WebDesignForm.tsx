"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import { FaHome } from "react-icons/fa";


const WebDesignForm = () => {

  // Create a reference for the element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // Hook to detect if the element is in view
  const isInView = useInView(ref1, { once: true });

  function Submit(a) {
    a.preventDefault(); // Prevent the default form submission behavior.

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    // Handle checkboxes by joining multiple selected values with a comma.
    const feature = formDatab.getAll("Feature");
    const intergration = formDatab.getAll("Intergration");
    const content = formDatab.getAll("Content");
    const userExperience = formDatab.getAll("UserExperience");

    formDatab.set("Feature", feature.join(", "));
    formDatab.set("Intergration", intergration.join(", "));
    formDatab.set("Content", content.join(", "));
    formDatab.set("UserExperience", userExperience.join(", "));

    fetch("https://script.google.com/macros/s/AKfycbyuTLX-i-3lf8TuFdU3mR2sndQM35_Mm5C_kyV77gXKcikOfFluAjy6sjjMo5sNgAm4bw/exec", {
      method: "POST",
      body: formDatab,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Response:", data);
        if (data.includes("successfully sent")) {
          window.location.href = "/thankyou";
        } else {
          console.error("Error in submission:", data);
          alert("Submission failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("An error occurred. Please try again later.");
      });
  }


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
            <button className="rounded-md text-2xl p-2 mx-4 border-2 border-iceblue text-iceblue hover:text-white hover:border-white">
              <FaHome />
            </button>
          </Link>
          <h2 className="text-4xl md:text-6xl mt-4 pt-3 pb-8 text-center font-bold underline bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient">
            Web Design
          </h2>
          <div className="w-10"></div>
        </div>

        <div className="container mx-auto px-2 md:px-20 flex flex-col lg:flex-row lg:space-x-12" id="Contact">

          <div className="lg:w-full">
            <form className="form" method="POST" onSubmit={(a) => Submit(a)}>
              <motion.div
                ref={ref1} // Attach the ref to the element
                initial={{ y: -100, opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Only animate when in view
                transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                className="wow fadeInUp"
              >
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
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                  <div>
                    <label htmlFor='ecommerce'>
                      <input
                        id='ecommerce'
                        name="Nature"
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
                    name="Audience"
                    type="text"
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 2. Website Goals </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="goal">
                    What are the primary goals of your website ?
                  </label>
                  <input
                    id="goal"
                    name="Goal"
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
                    name="Secondarygoal"
                    type="text"
                    placeholder='ex:- Building community, SEO ranking, Offering resources'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 3.  Core Features </h1>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="feature">
                  What core features do you need on your website ?
                </label>

                <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                  <div>
                    <label htmlFor='shopping-cart'>
                      <input
                        id='shopping-cart'
                        name="Feature"
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
                      name="Feature"
                      type="checkbox"
                      value="booking-system"
                      className="w-4 h-4"
                    />
                    <label htmlFor='booking-system'> Booking System </label>
                  </div>

                  <div>
                    <input
                      id='contact-form'
                      name="Feature"
                      type="checkbox"
                      value="contact-form"
                      className="w-4 h-4"
                    />
                    <label htmlFor='contact-form'> Contact Form </label>
                  </div>

                  <div>
                    <input
                      id='user-account'
                      name="Feature"
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
                      name="Intergration"
                      type="checkbox"
                      value="payment-gateway"
                      className="w-4 h-4"
                    />
                    <label htmlFor='payment-gateway'> Payment Gateway </label>
                  </div>

                  <div>
                    <input
                      id='CRM-system'
                      name="Intergration"
                      type="checkbox"
                      value="CRM-system"
                      className="w-4 h-4"
                    />
                    <label htmlFor='CRM-system'> CRM System </label>
                  </div>

                  <div>
                    <input
                      id='social-media'
                      name="Intergration"
                      type="checkbox"
                      value="social-media"
                      className="w-4 h-4"
                    />
                    <label htmlFor='social-media'> Social Media </label>
                  </div>

                  <div>
                    <input
                      id='E-mail marketing'
                      name="Intergration"
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
                    <input
                      id='cms-yes'
                      name="Cms"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cms-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='cms-no'
                      name="Cms"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='cms-no'> No </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 4. Design & User Experience </h1>
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
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="model">
                    Are there any websites that you admire and would like to model your site after?
                  </label>
                  <input
                    id="model"
                    name="Model"
                    type="text"
                    placeholder='send website link here or type "none"'
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    required
                  />
                </div>

                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="User-Experience">
                  What is the desired user experience?
                </label>

                <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                  <div>
                    <input
                      id='easy-navigation'
                      name="UserExperience"
                      type="checkbox"
                      value="easy-navigation"
                      className="w-4 h-4"
                    />
                    <label htmlFor='easy-navigation'> Easy Navigation</label>
                  </div>

                  <div>
                    <input
                      id='fast-loading'
                      name="UserExperience"
                      type="checkbox"
                      value="fast-loading"
                      className="w-4 h-4"
                    />
                    <label htmlFor='fast-loading'>  Fast Loading  </label>
                  </div>

                  <div>
                    <input
                      id='mobile-responsive'
                      name="UserExperience"
                      type="checkbox"
                      value="mobile-responsive"
                      className="w-4 h-4"
                    />
                    <label htmlFor='mobile-responsive'> Mobile Responsive </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 5. Content </h1>
                <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="content">
                  What kind of content will be on the website?
                </label>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-10 gap-1'>
                  <div>
                    <input
                      id='text'
                      name="Content"
                      type="checkbox"
                      value="text"
                      className="w-4 h-4"

                    />
                    <label htmlFor='text'> Text </label>
                  </div>

                  <div>
                    <input
                      id='images'
                      name="Content"
                      type="checkbox"
                      value="images"
                      className="w-4 h-4"
                    />
                    <label htmlFor='images'>  Images </label>
                  </div>

                  <div>
                    <input
                      id='videos'
                      name="Content"
                      type="checkbox"
                      value="videos"
                      className="w-4 h-4"
                    />
                    <label htmlFor='videos'> Videos </label>
                  </div>

                  <div>
                    <input
                      id='blogs'
                      name="Content"
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
                    <input
                      id='content-creation-yes'
                      name="ContentCreation"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='content-creation-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='content-creation-no'
                      name="ContentCreation"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='content-creation-no'> No </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 6. SEO Analytics </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="Seo">
                    What are the specific SEO services do you need ?
                  </label>
                  <input
                    id="Seo"
                    name="Seo"
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
                    <input
                      id='tracking-yes'
                      name="Tracking"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='tracking-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='tracking-no'
                      name="Tracking"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='tracking-no'> No </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 7. Security and Maintainance </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="security">
                    What level of security is required?
                  </label>
                  <input
                    id="security"
                    name="Security"
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
                    <input
                      id='maintainance-yes'
                      name="Maintainance"
                      type="radio"
                      value="yes"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='maintainance-yes'> Yes </label>
                  </div>

                  <div>
                    <input
                      id='maintainance-no'
                      name="Maintainance"
                      type="radio"
                      value="no"
                      className="w-4 h-4"
                      required
                    />
                    <label htmlFor='maintainance-no'> No </label>
                  </div>
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 8. Timeline & Budget </h1>
                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="timeline">
                    What is your desired timeline for the project?
                  </label>
                  <input
                    id="timeline"
                    name="Timeline"
                    type="text"
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    placeholder='ex:- 1 month, 3 months, 6 months'
                    required
                  />
                </div>

                <div className='pb-5'>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="Budgetrange">
                    What is your budget range for the development of the website?
                  </label>
                  <input
                    id="budgetrange"
                    name="Budgetrange"
                    type="text"
                    className="w-full md:text-lg text-md p-2 md:p-3 border border-iceblue placeholder-slate-700 rounded-sm md:rounded-md bg-transparent font-light text-gray-200"
                    placeholder='LKR'
                    required
                  />
                </div>

                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 9. Additional </h1>
                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="additional">
                    Are there any additional features or special requests?
                  </label>
                  <textarea name="Additional" className='p-2 md:p-3 w-full h-40 bg-transparent border border-iceblue focus:border-2 rounded-sm md:rounded-md focus:border-white'>
                  </textarea>
                </div>


                <hr className='mt-20 mb-5' />
                <h1 className='text-2xl font-bold py-3'> 10. Hosting & Domain </h1>
                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="assistant">
                    will you need assistance with domain name and hosting provider ?
                  </label>
                  <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                    <div>
                      <input
                        id='assistant-yes'
                        name="Assistant"
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
                        name="Assistant"
                        type="radio"
                        value="no"
                        className="w-4 h-4"
                        required
                      />
                      <label htmlFor='assistant-no'> No </label>
                    </div>
                  </div>
                </div>


                <div>
                  <label className="md:text-lg text-md block text-gray-400 font-sans mb-2" htmlFor="hosting">
                    What is your preference for hosting?
                  </label>
                  <div className='grid md:grid-cols-4 grid-cols-2 pb-10'>
                    <div>
                      <label htmlFor='dedicated'>
                        <input
                          id='dedicated'
                          name="Hosting"
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
                        name="Hosting"
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
                        name="Hosting"
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
