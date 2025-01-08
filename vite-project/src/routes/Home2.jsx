import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
"use client";
import LoginBtn from "../components/LoginBtn";
import SignUpBtn from "../components/SignUpBtn";
import LogoutBtn from "../components/LogoutBtn";
import { useSelector } from "react-redux";

import Testimonials from "../components/Testimonials";

export default function Home2() {
    const LoginStatus = useSelector((Store) => Store.LoginStatus);
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          CartHive, <br /> Make Life Easy.
        </h2>
        <div className="d-flex gap-5 mb-4">
          {LoginStatus.isLoggedIn ? <LoginBtn className="btn btn-primary" /> : <LogoutBtn className="btn btn-danger" />}
          <SignUpBtn className="btn btn-success" />
        </div>
        <p
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>

        

      

      <Testimonials></Testimonials>
    </>
  );
}
