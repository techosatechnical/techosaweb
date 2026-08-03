import Image from "next/image";

export default function Navbar() {
  return (
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src="/images/techosa.png" alt="Techosa Logo" width={150} height={42} style={{ objectFit: "contain" }} />
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
  );
}
