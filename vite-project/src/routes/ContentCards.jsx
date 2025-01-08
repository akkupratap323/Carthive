"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export default function AnimatedPinDemo({ values }) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="/ui.aceternity.com" href={values?.link}>
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {values?.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {values?.description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
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
