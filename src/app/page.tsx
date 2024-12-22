// app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6 md:p-12 space-y-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto bg-opacity-80 bg-teal-600 py-8 px-6 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to the Health Diagnosis System
        </h1>
        <p className="text-xl text-white mb-8">
          An advanced system designed to help you track and analyze your symptoms.
        </p>
        <a
          href="/symptoms"
          className="inline-block bg-teal-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-teal-700"
        >
          Start Diagnosis
        </a>
      </div>

      <div className="text-center my-12">
  <h2 className="text-3xl font-semibold text-teal-600 mb-6">
    Watch Our Introduction Video
  </h2>
  <div className="max-w-4xl mx-auto">
    <video controls className="rounded-lg" width="100%" height="500">
      <source src="spublic\istockphoto-1058347820-640_adpp_is.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Symptom Checker</h2>
          <p className="text-gray-700 mb-4">
            Quickly check your symptoms and receive possible diagnoses. Stay informed about your health.
          </p>
          <a
            href="/symptoms"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Try Now
          </a>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Profile</h2>
          <p className="text-gray-700 mb-4">
            Keep track of your health and symptom history. Personalize your experience by updating your profile.
          </p>
          <a
            href="/profile"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Go to Profile
          </a>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Get Insights</h2>
          <p className="text-gray-700 mb-4">
            Access valuable insights into your health and well-being. Make informed decisions based on your symptoms.
          </p>
          <a
            href="/about"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="text-center max-w-4xl mx-auto mt-12 bg-opacity-80 bg-teal-600 py-8 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-6">
          About the Health Diagnosis System
        </h2>
        <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
          Our system uses state-of-the-art technology to help individuals assess their symptoms and receive potential health condition matches. Whether you are feeling unwell or want to monitor your health, we aim to provide you with accurate and actionable insights.
        </p>
        <a
          href="/about"
          className="inline-block bg-teal-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-teal-700"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
}
// app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6 md:p-12 space-y-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto bg-opacity-80 bg-teal-600 py-8 px-6 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to the Health Diagnosis System
        </h1>
        <p className="text-xl text-white mb-8">
          An advanced system designed to help you track and analyze your symptoms.
        </p>
        <a
          href="/symptoms"
          className="inline-block bg-teal-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-teal-700"
        >
          Start Diagnosis
        </a>
      </div>

      <div className="text-center my-12">
  <h2 className="text-3xl font-semibold text-teal-600 mb-6">
    Watch Our Introduction Video
  </h2>
  <div className="max-w-4xl mx-auto">
    <video controls className="rounded-lg" width="100%" height="500">
      <source src="spublic\istockphoto-1058347820-640_adpp_is.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Symptom Checker</h2>
          <p className="text-gray-700 mb-4">
            Quickly check your symptoms and receive possible diagnoses. Stay informed about your health.
          </p>
          <a
            href="/symptoms"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Try Now
          </a>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Profile</h2>
          <p className="text-gray-700 mb-4">
            Keep track of your health and symptom history. Personalize your experience by updating your profile.
          </p>
          <a
            href="/profile"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Go to Profile
          </a>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Get Insights</h2>
          <p className="text-gray-700 mb-4">
            Access valuable insights into your health and well-being. Make informed decisions based on your symptoms.
          </p>
          <a
            href="/about"
            className="bg-teal-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-teal-700"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="text-center max-w-4xl mx-auto mt-12 bg-opacity-80 bg-teal-600 py-8 px-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-6">
          About the Health Diagnosis System
        </h2>
        <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
          Our system uses state-of-the-art technology to help individuals assess their symptoms and receive potential health condition matches. Whether you are feeling unwell or want to monitor your health, we aim to provide you with accurate and actionable insights.
        </p>
        <a
          href="/about"
          className="inline-block bg-teal-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-teal-700"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
}
