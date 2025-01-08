"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import ContentCards from "./ContentCards";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export default function Content() {
  const values1 = {
    title: "Shopping",
    description: "Shop for the best products from the best brands.",
    button: "Get Started",
    link: "/shop",
    images: "images/shop.avif"
  }
  const values2 = {
    title: "News",
    description: "Get the latest news and updates from the world of fashion.",
    button: "Get Started",
    link: "/News",
    images: "images/News.avif"
  }
  const values3 = {
    title: "Stocks",
    description: "Invest in the best stocks and get the best returns.",
    button: "Get Started",
    link: "/stocks",
    images: "images/stocks.avif"
  }

  return (
    <>
    <div className="h-[40rem] w-full rounded-md bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex items-center justify-center w-full flex-col px-4">
       
        <div className="flex space-x-4"> 
          <ContentCards values={values1} />
          <ContentCards values={values2} />
          <ContentCards values={values3} />    
        </div>
        
      </div>
      <BackgroundBeams />
    </div>
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
    <TextRevealCard
      text="You know the business"
      revealText="I know the chemistry">
      <TextRevealCardTitle>
        Sometimes, you just need to see it.
      </TextRevealCardTitle>
      <TextRevealCardDescription>
        This is a text reveal card. Hover over the card to reveal the hidden text.
      </TextRevealCardDescription>
    </TextRevealCard>
  </div>
  </>
  );
}
