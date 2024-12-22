'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  FaUser,
  FaUserAlt,
  FaBirthdayCake,
  FaWeight,
  FaRulerVertical,
  
  FaSmoking,
  FaWineBottle,
} from 'react-icons/fa';

interface UserMetadata {
  age?: string | number;
  weight?: string | number;
  height?: string | number;
  lastname?: string;
  firstname?: string;
  phoneNumber?: string;
  recentDisease?: string;
  smokingStatus?: string;
  drinkingStatus?: string;
}

export default function ProfilePage() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    lastname: '',
    firstname: '',
    phoneNumber: '',
    recentDisease: '',
    smokingStatus: '',
    drinkingStatus: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user?.publicMetadata) {
      const { age, weight, height, lastname, firstname, phoneNumber, recentDisease, smokingStatus, drinkingStatus } = user.publicMetadata as UserMetadata;
      setFormData({
        age: age?.toString() || '',
        weight: weight?.toString() || '',
        height: height?.toString() || '',
        lastname: lastname || '',
        firstname: firstname || '',
        phoneNumber: phoneNumber || '',
        recentDisease: recentDisease || '',
        smokingStatus: smokingStatus || '',
        drinkingStatus: drinkingStatus || '',
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Saving...');

    try {
      const res = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage('Failed to update profile.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 space-y-8">
      <h1 className="text-4xl font-bold text-center text-teal-600">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaUser /> First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaUserAlt /> Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Health Metrics Section */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Health Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaBirthdayCake /> Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaWeight /> Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaRulerVertical /> Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Lifestyle Information Section */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lifestyle Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaSmoking /> Smoking Status
              </label>
              <input
                type="text"
                name="smokingStatus"
                value={formData.smokingStatus}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaWineBottle /> Drinking Status
              </label>
              <input
                type="text"
                name="drinkingStatus"
                value={formData.drinkingStatus}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>

      {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
    </div>
  );
}
