"use client";

import { useState } from "react";

const featuresData = [
  {
    title: "Fast Performance",
    desc: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements.",
    icon: <img src="/images/icons-01.png" alt="Fast Performance" className="w-full h-full object-contain" />,
  },
  {
    title: "Perfect Responsive",
    desc: "Our template is full perfect for all device. You can visit our template all device easily.",
    icon: <img src="/images/icons-02.png" alt="Perfect Responsive" className="w-full h-full object-contain" />,
  },
  {
    title: "Fast & Friendly Support",
    desc: "We are provide 24 hours support for all clients. You can purchase without hesitation.",
    icon: <img src="/images/icons-03.png" alt="Fast & Friendly Support" className="w-full h-full object-contain" />,
  },
  {
    title: "Easy to Use",
    desc: "Create your own custom template or section by copying, pasting, and assembling.",
    icon: <img src="/images/icons-04.png" alt="Easy to Use" className="w-full h-full object-contain" />,
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl relative shadow-[0_10px_30px_rgba(124,88,246,0.2)]"
          style={{ background: "linear-gradient(135deg, #7c58f6 0%, #a252ee 100%)" }}
        >
          {featuresData.map((feature, index) => {
            const isActive = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  flex flex-col justify-start relative cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                  px-6 py-8 md:px-8 md:py-10 lg:px-7.5 lg:py-11.25
                  ${isActive
                    ? "bg-[#1a2035] rounded-[14px] shadow-[0_20px_40px_rgba(0,0,0,0.35)] z-10 scale-[1.05] -translate-y-4 border-transparent"
                    : "bg-transparent rounded-none z-0 border-white/15 scale-100 translate-y-0"
                  }
                  ${index < featuresData.length - 1 && hoveredIndex !== index && hoveredIndex !== index + 1 ? "lg:border-r" : ""}
                  ${(index === 0 || index === 2) && hoveredIndex !== index && hoveredIndex !== index + 1 ? "sm:border-r lg:border-r-0" : ""}
                  ${index < 2 && hoveredIndex !== index && hoveredIndex !== index + 2 ? "sm:border-b" : ""}
                  border-b sm:border-b-0
                  ${index === featuresData.length - 1 || (index === 1 && hoveredIndex === 1) || (index === 3 && hoveredIndex === 3) ? "border-b-0" : ""}
                `}
              >
                <div
                  className={`w-12 h-12 md:w-12.5 md:h-12.5 mb-6 text-white transition-transform duration-300 ease-out ${isActive ? "-translate-y-1" : "translate-y-0"
                    }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-white text-lg font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
