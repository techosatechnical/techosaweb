"use client";

import React from "react";
import Image from "next/image";

export default function HeaderLayoutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/4 right-0 w-100 h-100 bg-linear-to-bl from-[#7c58f6]/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 -left-25 w-125 h-125 bg-linear-to-tr from-[#2d5be3]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-300 mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-[#E8EFFF] text-[#5B8DEF] text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
            HEADER LAYOUTS
          </div>
          <h2 className="text-[32px] md:text-[50px] font-extrabold text-[#1a1a2e] mb-4 md:mb-6 leading-[1.2] tracking-tight">
            Awesome Header Layouts.
          </h2>
          <p className="text-[#666] text-[16px] md:text-[20px] max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Choose the perfect header for your website from our collection of beautifully designed and fully responsive layouts.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-white transform transition-transform duration-500 hover:-translate-y-2 group">
          {/* Main Mockup Image */}
          <div className="w-full relative pt-[120%] md:pt-[45%]"> {/* Aspect ratio adjustment for mobile vs desktop */}
            <Image
              src="/images/header-layout.png"
              alt="Header Layouts Showcase"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              unoptimized
            />

            {/* Overlay Gradient on Hover for a glossy feel */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
}
