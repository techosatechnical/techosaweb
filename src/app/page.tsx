"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CustomizeSection from "@/components/CustomizeSection";
import ElementsSection from "@/components/ElementsSection";
import CourseShowcaseSection from "@/components/CourseShowcaseSection";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* ───────────── HERO + NAVBAR (shared gradient background) ───────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "180px", 
          overflow: "hidden",
        }}
      >
        {/* Background gradient image — covers nav + hero */}
        <Image
          src="/images/bg-g1.webp"
          alt="hero background"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            zIndex: 0,
          }}
        />

        {/* shape-3: diagonal blue/lavender light rays — top-left area */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "10%",
            width: "780px",
            height: "480px",
            zIndex: 2,
            pointerEvents: "none",
            opacity: 0.85,
          }}
        >
          <Image
            src="/images/shape-3.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "top left" }}
          />
        </div>

        {/* shape-2: soft pink half-circle — right edge */}
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: 0,
            transform: "translateY(-50%)",
            width: "220px",
            height: "620px",
            zIndex: 2,
            pointerEvents: "none",
            opacity: 0.9,
          }}
        >
          <Image
            src="/images/shape-2.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "right center" }}
          />
        </div>

        {/* shape-1: large blue/lavender circle — bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: "130px",
            left: "-160px",
            width: "520px",
            height: "520px",
            zIndex: 2,
            pointerEvents: "none",
            opacity: 0.75,
          }}
        >
          <Image
            src="/images/shape-1.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* White fade at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(255,255,255,0.9) 100%)",
            zIndex: 1,
          }}
        />

        {/* Bottom Banner Shape */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <img
            src="/images/banner-bg-shape-1.png"
            alt="Bottom wave shape"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div style={{ width: "100%", height: "150px", backgroundColor: "#ffffff", marginTop: "-2px" }} />
        </div>

        <Navbar />
        <HeroSection />

        {/* Features Section now sits inside the hero to share the background */}
        <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-[4.5cm]" style={{ marginTop: "100px" }}>
          <FeaturesSection />
        </div>
      </section>

      {/* Customize Everything Section */}
      <CustomizeSection />

      {/* 100+ Elements Section with Marquee */}
      <ElementsSection />

      {/* Course Showcase Section */}
      <CourseShowcaseSection />

      {/* Inline CSS for hover states & reusable classes */}
      <style>{`
        .navbar { padding: 0 48px; }
        .hero-content { padding: 0 5cm 0 4.5cm; flex-direction: row; }
        .hero-text-container { max-width: 650px; }
        .hero-image-container { width: min(820px, 68vw); }
        .main-headline { font-size: clamp(48px, 6vw, 76px); }

        @media (max-width: 1200px) {
          .hero-content { padding: 0 2rem; }
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .nav-links { display: none !important; }
          .hero-content { flex-direction: column; padding: 40px 20px; text-align: center; }
          .hero-text-container { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .trust-badges { flex-direction: column; gap: 16px !important; margin-bottom: 24px !important; }
          .vertical-sep { width: 100% !important; height: 1px !important; }
          .main-headline { font-size: clamp(36px, 8vw, 48px) !important; }
          .hero-image-wrapper { width: 100%; justify-content: center !important; margin-top: 30px; }
          .hero-image-container { width: 100% !important; max-width: 500px; padding-bottom: 76%; /* Fallback for aspect-ratio */ }
          .float-bubble { display: none !important; }
        }

        .nav-item:hover span { color: #7B5EA7 !important; }

        .cta-btn {
          padding: 10px 26px;
          border-radius: 50px;
          border: 2px solid #1a1a2e;
          background: transparent;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a2e;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: #1a1a2e;
          color: #fff;
        }

        .float-bubble {
          position: absolute;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.38);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 8px 32px rgba(123, 94, 167, 0.15);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatY 4s ease-in-out infinite;
        }
        .float-bubble:nth-child(2) { animation-delay: -1.3s; }
        .float-bubble:nth-child(3) { animation-delay: -2.7s; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        /* Marquee Animations */
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Since we repeated 4 times, 1 set is 25% of width */
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
