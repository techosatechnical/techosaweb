"use client";

import React from "react";
import Image from "next/image";

export default function InnerPagesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-10 w-48 h-48 md:w-72 md:h-72 bg-[#7c58f6] rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#2d5be3] rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-300 mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">

        <div className="text-center mb-10 md:mb-16 max-w-3xl">
          <div className="inline-block bg-[#2a2a4a] text-[#a586ff] text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6 border border-[#a586ff]/20">
            INNER PAGES
          </div>
          <h2 className="text-[32px] md:text-[50px] font-extrabold text-white mb-4 md:mb-6 leading-[1.2] tracking-tight">
            Beautiful Inner Pages.
          </h2>
          <p className="text-[#a0a5ba] text-[16px] md:text-[20px] leading-relaxed px-2 md:px-0">
            Pre-built inner pages covering all your needs. From about us and contact to user profiles and 404 error pages, we've got you covered.
          </p>
        </div>

        {/* Large Mockup container with scroll-like presentation */}
        <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-[#0f0f1b]">
          {/* Mac OS window controls mock */}
          <div className="bg-[#1f1f33] h-8 md:h-10 w-full flex items-center px-3 md:px-4 gap-1.5 md:gap-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#0f0f1b] w-32 md:w-48 h-4 md:h-6 rounded-md border border-white/5"></div>
            </div>
          </div>

          <div className="w-full relative h-100 md:h-150 overflow-hidden">
            {/* We use an unoptimized Image in a wrapper that animates on hover (scroll down effect) */}
            <div className="w-full absolute top-0 left-0 transition-transform duration-[4s] md:duration-[6s] ease-in-out group-hover:-translate-y-[calc(100%-400px)] md:group-hover:-translate-y-[calc(100%-600px)]">
              <Image
                src="/images/courses-layout.png"
                alt="Inner Pages Layouts"
                width={1200}
                height={3000}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                unoptimized
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
