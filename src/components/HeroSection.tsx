"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["University.", "High School.", "Kindergarten."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatDown {
          0% { opacity: 0; transform: translateY(-15px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(15px); }
        }
        .animate-float-down {
          animation: floatDown 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          display: inline-block;
        }
      `}</style>
      {/* ───────────── HERO CONTENT ───────────── */}

      <div className="float-bubble" style={{ top: "88px", left: "58%" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            fill="#7B5EA7"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* YouTube icon – top-right of diagram */}
      <div
        className="float-bubble"
        style={{ top: "95px", right: "220px", width: "50px", height: "50px" }}
      >
        <svg width="22" height="16" viewBox="0 0 26 18" fill="none">
          <rect
            x="0"
            y="0"
            width="26"
            height="18"
            rx="5"
            fill="#FF0000"
            opacity="0.85"
          />
          <polygon points="10,5 20,9 10,13" fill="white" />
        </svg>
      </div>

      {/* Heart bubble – bottom-centre-left of diagram */}
      <div
        className="float-bubble"
        style={{ top: "50%", left: "55%", width: "44px", height: "44px" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 14 21 12 21Z"
            fill="#FF6B9D"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          flex: 1,
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="hero-content"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* LEFT: Text content */}
          <div className="hero-text-container" style={{ flex: "0 0 auto" }}>
            {/* Trust badges */}
            <div
              className="trust-badges"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                marginBottom: "32px",
              }}
            >
              {/* Stars + count */}
              <div>
                <Image
                  src="/images/rating-2.png"
                  alt="5 star rating"
                  width={130}
                  height={23}
                  style={{ display: "block", marginBottom: "8px" }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#666",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  18900+ Trust Customer
                </p>
              </div>

              {/* Vertical separator */}
              <div
                className="vertical-sep"
                style={{
                  width: "1px",
                  height: "48px",
                  background: "rgba(0,0,0,0.13)",
                }}
              />

              {/* Envato Elite */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src="/images/elite.png"
                  alt="Envato Elite Author badge"
                  width={52}
                  height={52}
                />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#666",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Envato Elite Author
                </p>
              </div>
            </div>

            {/* Main headline */}
            <h1
              className="main-headline"
              style={{
                fontWeight: "800",
                lineHeight: 1.1,
                color: "#1a1a2e",
                margin: "0 0 18px",
                letterSpacing: "-2px",
              }}
            >
              <div style={{ whiteSpace: "nowrap" }}>Have your dreams</div>
              <div style={{ whiteSpace: "nowrap" }}>sites in minutes</div>
              <div style={{ whiteSpace: "nowrap" }}>
                for{" "}
                <span
                  key={index}
                  className="animate-float-down bg-linear-65 from-indigo-600 to-fuchsia-400"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {words[index]}
                </span>
              </div>
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontSize: "18px",
                color: "#777",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              The most{" "}
              <strong style={{ color: "#1a1a2e", fontWeight: "700" }}>
                powerful
              </strong>{" "}
              yet the{" "}
              <strong
                style={{
                  color: "#1a1a2e",
                  fontWeight: "700",
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                  textUnderlineOffset: "4px",
                }}
              >
                easiest
              </strong>{" "}
              template ever.
            </p>
          </div>

          {/* RIGHT: Banner illustration */}
          <div
            className="hero-image-wrapper"
            style={{
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              className="hero-image-container"
              style={{
                position: "relative",
                aspectRatio: "1.31",
              }}
            >
              <Image
                src="/images/banner-group-image.png"
                alt="hiStudy education platform categories illustration"
                fill
                priority
                style={{ objectFit: "contain", objectPosition: "right center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
