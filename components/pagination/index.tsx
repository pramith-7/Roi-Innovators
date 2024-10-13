"use client";
import { useState } from 'react';

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="w-full max-w-7xl mx-auto p-4 ">
      {/* Tabs Navigation */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-base font-medium text-center"
          role="tablist"
        >
          {/* Profile Tab */}
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'profile'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('profile')}
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === 'profile'}
            >
              Web Development & Web Design 
            </button>
          </li>

          {/* Social Media Management Tab */}
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'dashboard'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
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
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'settings'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
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
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'contacts'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
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
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'Copy Writing'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
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
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === 'Content Creation'
                  ? 'text-purple-600 dark:text-purple-500 border-purple-600 dark:border-purple-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
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
        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <CoursePreview />
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
            <CoursePreview />
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
            <CoursePreview />
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
            <CoursePreview />
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
            <CoursePreview />
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
            <CoursePreview />
          </div>
        )}
      </div>
    </div>
  );
}

// CoursePreview Component
function CoursePreview() {
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
          <h2 className="text-2xl font-semibold mb-4">The Honorable Close</h2>
          <hr className="border-gray-700 mb-4" />
          <p className="text-sm text-gray-400">
            In the first phase of this program, Paul will break down who remote sales is for and show you the path to build wealth in sales. This way, you know exactly what this adventure looks like before even getting started. Here you'll learn how it is possible to sell your way to financial freedom.
          </p>
          <p className="mt-4 text-sm text-gray-400 font-semibold">
            Phase length: 5 lessons (1h32mins)
          </p>
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

// Sample data for the modules
const modules = [
  {
    title: 'Module 1: Paul Daley & Iman Gadzhi, Meet Your Instructor',
    content: 'Watch Iman, the founder of Educate, chat with Paul, the CEO of Educate, on how they approached this sales program, together.',
  },
  {
    title: 'Module 2: The Honorable Close',
    content: 'Learn the key concepts of closing sales with honor and integrity.',
  },
  {
    title: 'Module 3: Unmasking The Sales Persona',
    content: 'Understand the persona required to excel in sales.',
  },
  {
    title: 'Module 4: The Path to Building Wealth in Sales',
    content: 'This module will teach you how to build wealth through strategic sales.',
  },
  {
    title: 'Module 5: The Standard of Educate',
    content: 'Learn the standards of educating your clients and customers effectively.',
  },
];

