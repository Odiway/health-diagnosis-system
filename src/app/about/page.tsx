// src/app/about/about.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">About the Health Diagnosis System</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Health Diagnosis System is an advanced web application designed to assist users in tracking and analyzing their health symptoms. By leveraging modern web technologies, this platform provides a user-friendly interface for individuals seeking to understand their health conditions better.
      </p>
      
      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
     W   <li>Symptom Checker: Input your symptoms and receive potential diagnoses based on a comprehensive database of diseases.</li>
        <li>Disease Information: Access detailed information about various diseases, including symptoms, treatments, and preventive measures.</li>
        <li>User Profiles: Create and manage profiles to track health metrics over time for personalized insights.</li>
        <li>Weather and Air Quality Integration: Get real-time weather updates and air quality information to make informed decisions about outdoor activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Technology Stack</h2>
      <p className="text-lg text-gray-700 mb-4">
        The Health Diagnosis System is built using:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Next.js</strong>: A powerful React framework for server-side rendering and static site generation.</li>
        <li><strong>TypeScript</strong>: Enhances code quality and maintainability with static typing.</li>
        <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI development.</li>
        <li><strong>Clerk</strong>: A user authentication service that simplifies user management and enhances security.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to empower individuals with the knowledge and tools they need to take charge of their health. By providing easy access to symptom analysis and disease information, we aim to promote proactive health management and improve overall well-being.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Get Started</h2>
      <p className="text-lg text-gray-700 mb-4">
        To begin using the Health Diagnosis System, simply create an account, and start exploring the features. Whether you re looking to check your symptoms, learn about diseases, or manage your health profile, our platform is here to support you on your health journey.
      </p>
    </div>
  );
};

export default AboutPage;