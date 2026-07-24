"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = [
  {
    id: 0,
    title: "Courses Layout.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    image: "/images/courses-layout.png"
  },
  {
    id: 1,
    title: "Header layout.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
    image: "/images/header-layout.png"
  },
  {
    id: 2,
    title: "Complete Design Toolkit.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 8-8 8-8-8 8-8z" />
        <path d="M12 2v16" />
        <path d="M4 10h16" />
      </svg>
    ),
    image: "/images/elements.png"
  },
  {
    id: 3,
    title: "Infinitely Flexible",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    image: "/images/code.png"
  },
];

export default function CustomizeSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to 3rd tab like screenshot
  const [progress, setProgress] = useState(0);

  // Auto-advance tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((currentTab) => (currentTab + 1) % tabs.length);
          return 0;
        }
        return prev + 1; // 1% every 50ms = 5 seconds per tab
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
    setProgress(0); // Reset progress when manually clicked
  };

  return (
    <section className="pt-20 pb-16 bg-white">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16">
        <div className="inline-block bg-[#F2F0FA] text-[#7c58f6] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
          YOU CAN CUSTOMIZE EVERYTHING
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] mb-6 tracking-tight">
          Take your Website to The <span className="text-[#5B8DEF]">Next Level!</span>
        </h2>
        <p className="text-[#777] text-lg">
          An all-in-one template with powerful features.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#f4f7fe] rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">

          {/* Left Column (Tabs) */}
          <div className="lg:w-100 shrink-0 flex flex-col z-10 relative">
            <div className="mb-10">
              <div className="inline-block bg-[#E8EFFF] text-[#5B8DEF] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
                ALL IN ONE FOR EDUCATION
              </div>
              <h3 className="text-3xl font-extrabold text-[#1a1a2e] leading-tight">
                Layout Ready, Build Everything.
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      relative flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300 z-10
                      ${isActive
                        ? "bg-[#f2f4f8] text-[#1a1a2e] font-bold shadow-[0_15px_35px_rgba(0,0,0,0.06)] translate-x-2"
                        : "bg-[#eef2f9] text-[#555] font-semibold hover:bg-[#e4ebf9]"
                      }
                    `}
                  >
                    {/* Progress Fill Background */}
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 h-full bg-[#dce5fa] rounded-xl z-0"
                        style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                      />
                    )}

                    <div className={`relative z-10 w-5 h-5 shrink-0 transition-colors ${isActive ? "text-[#1a1a2e]" : "text-[#777]"}`}>
                      {tab.icon}
                    </div>
                    <span className="relative z-10 text-[17px]">{tab.title}</span>

                    {/* Right Arrow pointer for active tab */}
                    {isActive && (
                      <div
                        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f2f4f8] rotate-45  z-[-1]"
                        style={{ boxShadow: "5px -5px 15px rgba(0,0,0,0.03)" }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column (Images) */}
          <div className="lg:w-full relative min-h-112.5 lg:min-h-137.5 flex items-center justify-center z-10">
            {/* Background dashed grid behind images can be a decorative image, but relying on absolute positioning of elements */}
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeTab === tab.id
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
              >
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  className="object-contain object-right"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Checks */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 md:gap-12 pb-10">
          {["Free future template updates", "Mix and Match Section Blocks", "Quality checked by Envato"].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-[#555] font-medium text-[15px]">
              <div className="w-5 h-5 rounded-full bg-[#26d06d] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
