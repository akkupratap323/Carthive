"use client";
import React from "react";
import ContentCards from "./ContentCards";

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
      <div className="h-auto w-full bg-white flex flex-col items-center justify-center py-10 px-4">
        <div className="max-w-4xl w-full flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <ContentCards values={values1} />
            <ContentCards values={values2} />
            <ContentCards values={values3} />
          </div>
        </div>
      </div>
    </>
  );
}
