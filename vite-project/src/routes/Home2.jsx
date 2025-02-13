import React from "react";
import { useSelector } from "react-redux";
import GoogleLoginButton from "./login3";
import Testimonials from "../components/Testimonials";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Home2() {
  const LoginStatus = useSelector((store) => store.LoginStatus);

  return (
    <>
      <div className="home2 flex flex-col items-center justify-center w-full px-4 pt-20 pb-20"> {/* Increased padding to the top and bottom */}
        <h2
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          CartHive, <br /> Make Life Easy.
        </h2>
        <div className="flex gap-5 mb-6">
          <GoogleLoginButton />
        </div>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </div>

      <Testimonials />

      <section className="flex flex-col items-center justify-center w-full px-10 pt-20 pb-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <FaEnvelope size={30} className="mb-2 text-blue-500" />
            <p className="text-lg font-semibold">Email Us</p>
            <p className="text-gray-600">akkupratap323@gmail.com</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaPhoneAlt size={30} className="mb-2 text-green-500" />
            <p className="text-lg font-semibold">Call Us</p>
            <p className="text-gray-600">+91 8005729753</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaMapMarkerAlt size={30} className="mb-2 text-red-500" />
            <p className="text-lg font-semibold">Visit Us</p>
            <p className="text-gray-600">IIIT Nagpur </p>
          </div>
        </div>
      </section>
    </>
  );
}
