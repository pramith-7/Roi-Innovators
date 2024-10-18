"use client";
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container md:px-10 px-4 mt-10">
      {/* Tabs Navigation */}
      <div className="mb-4 border-gray-700">

  
        <h1 className='text-white mbtext-3xl font-bold !leading-tight text-3xl md:text-[45px] text-center p-4 xl:px-72 '>
            Here's What You're Gonna Get in Each Service
        </h1>

        <p className="!leading-relaxed text-body-color md:text-lg text-sm text-center pt-10 pb-2">
          Select a Service
        </p>


        <ul
          className="flex flex-wrap text-xs md:text-base text-center justify-center"
          role="tablist"
        >
          {/* Profile Tab */}
         <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'profile'
                  ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)]'
                  : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('profile')}
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === 'profile'}
            >
              Web Design 
            </button>
          </li>

          {/* Social Media Management Tab */}
          <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'dashboard'
                ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
            }`}
              onClick={() => setActiveTab('dashboard')}
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === 'dashboard'}
            >
              Social Media Management
            </button>
          </li>

          {/* Paid Advertising Tab */}
          <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'settings'
                ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
            }`}
              onClick={() => setActiveTab('settings')}
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === 'settings'}
            >
              Paid Advertising
            </button>
          </li>

          {/* Mobile App Development Tab */}
          <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'contacts'
                ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
            }`}
              onClick={() => setActiveTab('contacts')}
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected={activeTab === 'contacts'}
            >
              Mobile App Development 
            </button>
          </li>

          {/* Copy Writing Tab */}   
           <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'Copy Writing'
                ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
            }`}
              onClick={() => setActiveTab('Copy Writing')}
              type="button"
              role="tab"
              aria-controls="Copy Writing"
              aria-selected={activeTab === 'Copy Writing'}
            >
              Copy Writing 
            </button>
          </li>

          {/* Content Creation Tab */}
          <li className="lg:w-auto w-1/2 p-1" role="presentation">
            <button
              className={`p-2 border-2 rounded-lg w-full lg:w-48 lg:h-20 ${
                activeTab === 'Content Creation'
                ? 'text-iceblue border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)]  shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] '
                : 'text-gray-400 hover:border-gray-300 border-gray-700 hover:text-gray-300'
            }`}
              onClick={() => setActiveTab('Content Creation')}
              type="button"
              role="tab"
              aria-controls="Content Creation"
              aria-selected={activeTab === 'Content Creation'}
            >
              Content Creation 
            </button>
          </li>
        </ul>
      </div>

      {/* Tabs Content */}
      <div id="default-styled-tab-content">
        {/* Web Development & Web Design Tab Content */}
        {activeTab === 'profile' && (
          <div
            className="p-4 rounded-lg bg-gray-800"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <CoursePreview
              title="Mastering Web Development & Web Design"
              videoTitle="Introduction to Web Development"
              videoDescription="Learn the fundamentals of HTML, CSS, and JavaScript to build interactive and responsive web pages."
              modules={[
                {
                  title: 'Module 1: HTML Basics',
                  content: 'An introduction to the structure of web pages with HTML.',
                },
                {
                  title: 'Module 2: CSS for Styling',
                  content: 'Learn how to style your web pages using CSS.',
                },
                {
                  title: 'Module 3: JavaScript Essentials',
                  content: 'Understand the basics of JavaScript for interactivity.',
                },
              ]}
            />
          </div>
        )}

        {/* Social Media Management Tab Content */}
        {activeTab === 'dashboard' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <CoursePreview
              title="Social Media Management Mastery"
              videoTitle="Getting Started with Social Media"
              videoDescription="Learn the strategies and techniques to effectively manage and grow your social media presence."
              modules={[
                {
                  title: 'Module 1: Social Media Strategy',
                  content: 'Understand how to create an effective social media strategy.',
                },
                {
                  title: 'Module 2: Content Creation',
                  content: 'Learn how to craft engaging content for different platforms.',
                },
                {
                  title: 'Module 3: Analytics & Optimization',
                  content: 'Track your performance and optimize your social media campaigns.',
                },
              ]}
            />
          </div>
        )}

        {/* Paid Advertising Tab Content */}
        {activeTab === 'settings' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <CoursePreview
              title="Mastering Paid Advertising"
              videoTitle="Introduction to Paid Advertising"
              videoDescription="Learn the basics of paid advertising, including Google Ads, Facebook Ads, and more."
              modules={[
                {
                  title: 'Module 1: Google Ads Fundamentals',
                  content: 'Understand how to create and manage Google Ads campaigns.',
                },
                {
                  title: 'Module 2: Facebook Ads Essentials',
                  content: 'Learn the key strategies for running successful Facebook Ads.',
                },
                {
                  title: 'Module 3: Budget Optimization',
                  content: 'Discover how to optimize your advertising budget for better results.',
                },
              ]}
            />
          </div>
        )}

        {/* Mobile App Development Tab Content */}
        {activeTab === 'contacts' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <CoursePreview
              title="Mobile App Development"
              videoTitle="Introduction to Mobile App Development"
              videoDescription="Learn how to develop mobile applications using popular frameworks like React Native and Flutter."
              modules={[
                {
                  title: 'Module 1: Getting Started with React Native',
                  content: 'Learn the fundamentals of React Native to build mobile apps.',
                },
                {
                  title: 'Module 2: Flutter Basics',
                  content: 'An introduction to Flutter for cross-platform mobile development.',
                },
                {
                  title: 'Module 3: Publishing Your App',
                  content: 'Steps to publish your app on Google Play and the App Store.',
                },
              ]}
            />
          </div>
        )}

        {/* Copy Writing Tab Content */}
        {activeTab === 'Copy Writing' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-Copy Writing"
            role="tabpanel"
            aria-labelledby="Copy Writing-tab"
          >
            <CoursePreview
              title="Copy Writing for Conversions"
              videoTitle="Mastering the Art of Persuasive Writing"
              videoDescription="Learn how to write compelling copy that converts visitors into customers."
              modules={[
                {
                  title: 'Module 1: Writing Headlines that Convert',
                  content: 'Learn the techniques to write attention-grabbing headlines.',
                },
                {
                  title: 'Module 2: Crafting Persuasive Copy',
                  content: 'Understand the psychology behind persuasive writing.',
                },
                {
                  title: 'Module 3: Call to Action',
                  content: 'Master the art of writing effective calls to action.',
                },
              ]}
            />
          </div>
        )}

        {/* Content Creation Tab Content */}
        {activeTab === 'Content Creation' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-Content Creation"
            role="tabpanel"
            aria-labelledby="Content Creation-tab"
          >
            <CoursePreview
              title="Content Creation Mastery"
              videoTitle="Introduction to Content Creation"
              videoDescription="Learn how to create high-quality content for different platforms, from blogs to videos."
              modules={[
                {
                  title: 'Module 1: Blogging Basics',
                  content: 'Learn how to create engaging blog posts that attract readers.',
                },
                {
                  title: 'Module 2: Video Content Creation',
                  content: 'Understand the key elements of creating engaging video content.',
                },
                {
                  title: 'Module 3: Repurposing Content',
                  content: 'Discover how to repurpose your content for different platforms.',
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function CoursePreview({ title, videoTitle, videoDescription, modules }) {
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 p-6 lg:p-12 bg-gray-900 text-white min-h-screen">
      {/* Video Section */}
      <div className="w-full lg:w-2/3">
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Video Placeholder"
            className="w-full h-auto rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">{videoTitle}</h2>
          <hr className="border-gray-700 mb-4" />
          <p className="text-sm text-gray-400">{videoDescription}</p>
        </div>
      </div>

      {/* Module List Section */}
      <div className="w-full lg:w-1/3">
        <div className="bg-gray-800 rounded-lg p-4">
          {modules.map((module, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleModule(index)}
                className={`w-full flex justify-between items-center p-4 text-left rounded-lg transition ${
                  activeModule === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <span>{module.title}</span>
                <span>{activeModule === index ? '-' : '+'}</span>
              </button>
              {activeModule === index && (
                <div className="p-4 bg-gray-700 mt-2 rounded-lg">
                  <p className="text-sm text-gray-300">{module.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

