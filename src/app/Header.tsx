// app/layout.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus, FaStethoscope } from "react-icons/fa"; // Import icons
import { ClerkProvider } from "@clerk/nextjs"; // Ensure Clerk provider wraps the layout
import "./globals.css";
W
export const metadata = {
  title: "Health Diagnosis System",
  description: "A better health diagnosis system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-opacity-60 shadow-md z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between bg-opacity-25  items-center">
          {/* Logo or Branding */}
          <div>
            <Link
              href="/"
              className="text-3xl font-extrabold text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaHome className="inline mr-2" /> Health Diagnosis
            </Link>
          </div>

          {/* Navigation Links with Icons */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link
              href="/symptoms"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaStethoscope className="mr-2" /> Symptom Checker
            </Link>
            <Link
              href="/profile"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaUser className="mr-2" /> Profile
            </Link>
            <Link
              href="/sign-in"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaSignInAlt className="mr-2" /> Sign In
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-3xl text-white hover:text-yellow-400"
              id="mobile-menu-button"
            >
              &#9776;
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 p-4 space-y-4 shadow-lg rounded-lg">
            <Link
              href="/"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link
              href="/symptoms"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaStethoscope className="mr-2" /> Symptom Checker
            </Link>
            <Link
              href="/profile"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaUser className="mr-2" /> Profile
            </Link>
            <Link
              href="/sign-in"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaSignInAlt className="mr-2" /> Sign In
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>
    </ClerkProvider>
  );
}