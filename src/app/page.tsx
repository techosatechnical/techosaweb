"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

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
            bottom: "-180px",
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

        {/* ───────────── NAVBAR ───────────── */}
        <nav
          className="navbar"
          style={{
            position: "relative",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
            background: "transparent",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, #7B5EA7, #5B8DEF)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(123,94,167,0.4)",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: "15px",
                  fontStyle: "italic",
                  letterSpacing: "-1px",
                }}
              >
                hi
              </span>
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#7B5EA7",
                letterSpacing: "-0.5px",
              }}
            >
              Study
            </span>
          </div>

          {/* Nav links (Pill shape) */}
          <div
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 24px rgba(123, 94, 167, 0.08)",
              padding: "12px 40px",
              borderRadius: "50px",
            }}
          >
            {[
              "Home",
              "Courses",
              "Dashboard",
              "Pages",
              "Elements",
              "Blog",
            ].map((label) => (
              <div
                key={label}
                className="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#1a1a2e",
                  }}
                >
                  {label}
                </span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.45 }}>
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="#1a1a2e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="cta-btn">Purchase Now</button>
        </nav>

        {/* ───────────── HERO CONTENT ───────────── */}

        <div
          className="float-bubble"
          style={{ top: "88px", left: "58%" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#7B5EA7" opacity="0.85" />
          </svg>
        </div>

        {/* YouTube icon – top-right of diagram */}
        <div
          className="float-bubble"
          style={{ top: "95px", right: "220px", width: "50px", height: "50px" }}
        >
          <svg width="22" height="16" viewBox="0 0 26 18" fill="none">
            <rect x="0" y="0" width="26" height="18" rx="5" fill="#FF0000" opacity="0.85" />
            <polygon points="10,5 20,9 10,13" fill="white" />
          </svg>
        </div>

        {/* Heart bubble – bottom-centre-left of diagram */}
        <div
          className="float-bubble"
          style={{ bottom: "150px", left: "46%", width: "44px", height: "44px" }}
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
                <div className="vertical-sep" style={{ width: "1px", height: "48px", background: "rgba(0,0,0,0.13)" }} />

                {/* Envato Elite */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                  <TypeAnimation
                    sequence={[
                      'University.',
                      2500,
                      'High School.',
                      2500,
                      'Kindergarten.',
                      2500,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{
                      backgroundImage: "linear-gradient(135deg, #7B5EA7 0%, #5B8DEF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block"
                    }}
                  />
                </div>
              </h1>

              {/* Tagline */}
              <p style={{ fontSize: "18px", color: "#777", lineHeight: 1.75, margin: 0 }}>
                The most{" "}
                <strong style={{ color: "#1a1a2e", fontWeight: "700" }}>powerful</strong> yet the{" "}
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
      </section>

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
      `}</style>
    </div>
  );
}
