

import { ReactNode } from "react";
import Link from "next/link";
import {
  FaStethoscope,
  FaHome,
  FaStethoscope as SymptomIcon,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
  FaCloudSun,
} from "react-icons/fa"; // Added FaClipboardList for the Diseases page
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Health Diagnosis System",
  description: "A better health diagnosis system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <header className="fixed top-0 left-0 right-0 bg-teal-600 bg-opacity-60 shadow-md z-10">
  <nav className="container mx-auto px-4 py-4 flex items-center relative">
    {/* Navigation Pages on the Left */}
    <div className="flex space-x-8">
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
        <SymptomIcon className="mr-2" /> Symptom Checker
      </Link>
      <Link
        href="/diseases"
        className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
      >
        <FaClipboardList className="mr-2" /> Diseases
      </Link>
      <Link
        href="/profile"
        className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
      >
        <FaUser className="mr-2" /> Profile
      </Link>
    </div>

    {/* Icon in the Middle */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Link
        href="/"
        className="text-3xl font-extrabold text-white hover:text-yellow-400 transition duration-300 ease-in-out"
      >
        <FaStethoscope className="inline mr-2" />
      </Link>
    </div>

    {/* Sign-In/Sign-Up on the Right */}
    <div className="flex space-x-8 ml-auto">
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
      <Link
        href="/weather"
        className="flex items-center text-white hover:text-yellow-400 transition duration-300 ease-in-out"
      >
        <FaCloudSun className="mr-2" /> Weather
      </Link>
    </div>
  </nav>
</header>


          {/* Main Content */}
          <main className="pt-20">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}