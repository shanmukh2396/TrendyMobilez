// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a", // dark navy/blackish tone like reference
        color: "#cbd5e1",
        padding: "60px 40px 30px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px 60px",
        }}
      >
        {/* Column 1 – Brand & Description */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <i
              className="fa-solid fa-mobile-alt"
              style={{ fontSize: "2.1rem", color: "#60a5fa" }}
            ></i>
            <h3
              style={{
                margin: 0,
                fontSize: "1.8rem",
                color: "#f1f5f9",
                fontWeight: 700,
              }}
            >
              Trendy Mobilez
            </h3>
          </div>

          <p
            style={{
              margin: "0 0 20px 0",
              lineHeight: 1.7,
              fontSize: "0.96rem",
              color: "#94a3b8",
              maxWidth: "340px",
            }}
          >
            Your premier destination for the latest smartphones from Vivo, Oppo, iQOO, Samsung, Realme and more. Best prices, genuine products, and excellent service.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "16px", marginTop: "1.2rem" }}>
            <a href="#" style={{ color: "#60a5fa", fontSize: "1.5rem" }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={{ color: "#60a5fa", fontSize: "1.5rem" }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{ color: "#60a5fa", fontSize: "1.5rem" }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{ color: "#60a5fa", fontSize: "1.5rem" }}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4
            style={{
              marginBottom: "1.4rem",
              fontSize: "1.25rem",
              color: "#f1f5f9",
              fontWeight: 600,
            }}
          >
            Quick Links
          </h4>

          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <li><Link to="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/about" style={{ color: "#cbd5e1", textDecoration: "none" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 – Brands */}
        <div>
          <h4
            style={{
              marginBottom: "1.4rem",
              fontSize: "1.25rem",
              color: "#f1f5f9",
              fontWeight: 600,
            }}
          >
            Popular Brands
          </h4>

          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <li><Link to="/vivo" style={{ color: "#cbd5e1", textDecoration: "none" }}>Vivo</Link></li>
            <li><Link to="/oppo" style={{ color: "#cbd5e1", textDecoration: "none" }}>Oppo</Link></li>
            <li><Link to="/iqoo" style={{ color: "#cbd5e1", textDecoration: "none" }}>iQOO</Link></li>
            <li><Link to="/samsung" style={{ color: "#cbd5e1", textDecoration: "none" }}>Samsung</Link></li>
            <li><Link to="/realme" style={{ color: "#cbd5e1", textDecoration: "none" }}>Realme</Link></li>
          </ul>
        </div>

        {/* Column 4 – Contact Info */}
        <div>
          <h4
            style={{
              marginBottom: "1.4rem",
              fontSize: "1.25rem",
              color: "#f1f5f9",
              fontWeight: 600,
            }}
          >
            Contact Info
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.97rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <i className="fas fa-map-marker-alt" style={{ color: "#60a5fa", fontSize: "1.3rem", marginTop: "4px" }}></i>
              <div>
                Trendy Mobilez Store<br />
                Guntur, Andhra Pradesh<br />
                India
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="fas fa-phone-alt" style={{ color: "#60a5fa", fontSize: "1.3rem" }}></i>
              <span>+91 98765 43210</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="fas fa-envelope" style={{ color: "#60a5fa", fontSize: "1.3rem" }}></i>
              <span>support@trendymobilez.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid #334155",
          textAlign: "center",
          fontSize: "0.92rem",
          color: "#94a3b8",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Trendy Mobilez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
