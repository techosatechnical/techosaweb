"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const featureList = [
  { name: "LMS Admin UI/UX", coming: false },
  { name: "Lesson Pages", coming: true },
  { name: "Lesson Types", coming: false },
  { name: "Single Page Variation", coming: false },
  { name: "User Profile", coming: false },
  { name: "Quick Action", coming: true },
  { name: "Teacher Profile", coming: false },
  { name: "Filter the Courses", coming: false },
  { name: "Student Profile", coming: false },
  { name: "Course Wishlist", coming: false },
  { name: "Course With Tab", coming: false },
  { name: "Course Ratings", coming: true },
];

const TOTAL_SLIDES = 11;
const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => {
  const num = (i + 1).toString().padStart(2, '0');
  return {
    num: num,
    src: `/images/course-layout-${num}.png`,
    title: `Course Layout ${["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"][i]}`
  };
}).reverse();

export default function CourseShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Start at index 0 (which is now Eleven)
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="w-full px-4 lg:pl-0 lg:pr-12 xl:pr-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">

          {/* Left Side: Swiper Cards */}
          <div className="lg:w-1/2 relative z-10 w-full flex flex-col items-center mb-10 lg:mb-0 lg:pl-4">

            {/* Decorative Ribbon Background positioned relative to the cards */}
            <div className="absolute top-[-10%] left-[-10%] w-[180%] h-[120%] z-0 opacity-80 pointer-events-none">
              <Image
                src="/images/left-right-line-small.svg"
                alt="decorative line"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left top' }}
              />
            </div>

            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-4/3 flex justify-center items-center overflow-hidden">

              {/* Prev Button */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-15 md:h-15 bg-[#2d5be3] rounded-full flex items-center justify-center text-white z-60 hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(45,91,227,0.3)] cursor-pointer"
              >
                <svg width="24" height="24" className="md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className="w-[75%] md:w-[85%] h-[95%] relative z-50">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards, Navigation]}
                  className="w-full h-full"
                  initialSlide={10}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                  }}
                  cardsEffect={{
                    perSlideOffset: 15,
                    perSlideRotate: 3,
                    rotate: true,
                    slideShadows: true,
                  }}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={slide.src} className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-100 bg-white flex flex-col h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          unoptimized
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Next Button */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-15 md:h-15 bg-[#2d5be3] rounded-full flex items-center justify-center text-white z-60 hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(45,91,227,0.3)] cursor-pointer"
              >
                <svg width="24" height="24" className="md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="mt-8 text-center text-[#a0a5ba] font-semibold tracking-widest text-[16px]">
              {TOTAL_SLIDES - activeIndex} / {TOTAL_SLIDES}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 relative z-20 pl-0 lg:pl-10 bg-white shadow-none lg:shadow-[-20px_0_30px_rgba(255,255,255,1)] py-4 lg:py-10 text-center lg:text-left">

            <div className="inline-block bg-[#E8EFFF] text-[#5B8DEF] text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
              COURSE SHOWCASE
            </div>

            <h2 className="text-[32px] md:text-[50px] lg:text-[54px] font-extrabold text-[#1a1a2e] mb-5 leading-[1.15] tracking-tight">
              Manage your courses in an authentic way.
            </h2>

            <p className="text-[#666] text-[16px] md:text-[20px] mb-8 lg:mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
              Create your website course layout by choosing from 12 layout options.
            </p>

            {/* Feature Icons Image */}
            <div className="mb-10 lg:mb-12 flex justify-center lg:justify-start">
              <Image
                src="/images/course-format.png"
                alt="Course Formats"
                width={400}
                height={100}
                className="w-auto h-auto max-h-16 md:max-h-21.25"
                unoptimized
              />
            </div>

            <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-5 tracking-tight">Courses Feature List:</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-left">
              {featureList.map((feature, i) => (
                <div key={i} className="flex items-start md:items-center gap-2 md:gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8EFFF] flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B8DEF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                    <span className="text-[#555] font-semibold text-[13px] md:text-[14px] leading-tight">{feature.name}</span>
                    {feature.coming && (
                      <span className="bg-[#f0ebff] text-[#7c58f6] text-[9px] md:text-[10px] font-extrabold px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Coming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
