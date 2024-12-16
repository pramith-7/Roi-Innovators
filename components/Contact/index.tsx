'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import Popup from 'reactjs-popup';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [popupOpen, setPopupOpen] = useState(false); // State for popup
  const [popupMessage, setPopupMessage] = useState(''); // Message for popup
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true when the form is being submitted

    emailjs
      .sendForm('service_970bgk9', 'template_natfw63', form.current, {
        publicKey: 'lCgfe3xwYEMf_y4Rd',
      })
      .then(
        () => {
          setPopupMessage('Email sent successfully!');
          setPopupOpen(true); // Open the popup on success
        },
        (error) => {
          console.error('Email send failed:', error);
          setPopupMessage('Email failed to send!');
          setPopupOpen(true); // Open the popup on failure
        }
      )
      .finally(() => setIsSubmitting(false)); // Reset submitting state
    e.target.reset();
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay:0.3, ease: "easeOut" }}    
        >
      <section id="contact" className="overflow-hidden">
      <div className="container xl:px-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-body-color outline-none focus:ring-2 focus:ring-primary focus-visible:shadow-none bg-[#242B51] shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-body-color shadow-one outline-none focus:ring-2 focus:ring-primary focus-visible:shadow-none bg-[#242B51] shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-body-color outline-none focus:ring-2 focus:ring-primary focus-visible:shadow-none bg-[#242B51] shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                   <div className="w-full px-4">
                    <input 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`} 
                      value={isSubmitting ? "Sending..." : "Send"}
                    /> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Window */}
      <Popup
        open={popupOpen}
        closeOnDocumentClick
        onClose={() => setPopupOpen(false)}
        modal
      >
        <div className="text-center py-10 px-20 bg-dark/85 rounded-md relative">
          <h2 className="pb-5 text-xl">{popupMessage}</h2>
          <button
            onClick={() => setPopupOpen(false)}
            className="mt-5 py-2 px-8 bg-iceblue text-dark font-bold rounded-md hover:scale-105"
          >
            OK
          </button>
        </div>
      </Popup>
    </section>
    </motion.div>
    </>
  );
};

export default Contact;
