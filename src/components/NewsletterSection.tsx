"use client";

import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 border-t border-gray-100 flex justify-center items-center relative z-10 px-4 bg-linear-to-r from-orange-50 to-[#F8F2FF]">
      <div className="max-w-300 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 sm:px-8">

        {/* Left Side: Title */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1a1a2e] leading-tight mb-1">
            Get Latest Histudy Update
          </h2>
          <p className="text-[32px] md:text-[42px] font-normal text-[#1a1a2e] leading-tight">
            Our Newsletter
          </p>
        </div>

        {/* Right Side: Input and Button */}
        <div className="w-full md:w-auto md:min-w-120">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center bg-white rounded-lg p-2 shadow-[0_15px_35px_rgba(0,0,0,0.05)] w-full"
          >
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="flex-1 w-full bg-transparent border-none outline-none text-[#666] px-5 py-4 sm:py-5 text-base sm:text-lg "
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto mt-2 sm:mt-0 bg-linear-to-r from-[#4461E4] to-[#A445E7] text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-md transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shadow-md text-base sm:text-lg"
            >
              Subscribe
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
