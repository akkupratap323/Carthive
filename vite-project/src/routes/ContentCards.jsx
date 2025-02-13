"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export default function AnimatedPinDemo({ values }) {
  return (
    <div className="h-auto w-full flex flex-col sm:flex-row items-center justify-center">
      <PinContainer title="/ui.aceternity.com" href={values?.link}>
        <div className="flex flex-col sm:flex-row basis-full p-4 tracking-tight text-slate-100/50 w-[20rem] sm:w-[30rem] sm:h-[15rem] rounded-lg shadow-lg">
          <div className="sm:w-1/2 flex flex-col justify-between">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              {values?.title}
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                {values?.description}
              </span>
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-1 items-center justify-center mt-4 sm:mt-0">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={values?.images}
              alt="item image"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
