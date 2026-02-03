import React from "react";
import "../styles/Bgc.css";
const About = () => {
  return (
    <div
      style={{ padding: "40px", lineHeight: "1.7", fontSize: "15px" }}
      className="app-container"
    >
      <h2 style={{ textAlign: "center" }}>About Us</h2>

      <p style={{ textAlign: "center" }}>
        Welcome to <strong>Trendy Mobilez</strong> — your one-stop destination
        for the latest smartphones from top brands. We focus on providing
        genuine products, competitive prices, and a smooth shopping experience.
      </p>

      <p style={{ textAlign: "center" }}>
        Our mission is to make cutting-edge mobile technology accessible to
        everyone. From budget-friendly models to premium flagship devices, we
        carefully curate our collection to meet every customer’s needs.
      </p>

      <p style={{ textAlign: "center" }}>
        We work with trusted brands like <strong>Samsung</strong>,{" "}
        <strong>Vivo</strong>, <strong>Realme</strong>, <strong>Oppo</strong>,
        and <strong>iQOO</strong> to ensure quality, performance, and
        reliability.
      </p>

      <p style={{ textAlign: "center" }}>
        At Trendy Mobilez, customer satisfaction comes first. Our support team
        is always ready to help you choose the right device and answer your
        questions.
      </p>

      <h4 style={{ textAlign: "center", fontSize: "20px" }}>Why Choose Us?</h4>
      <ul style={{ maxWidth: "400px", margin: "auto", listStyleType: "none", textAlign: "center" }}>
        <p>Latest mobile collections</p>
        <p>Trusted brands & genuine products</p>
        <p>Affordable pricing</p>
        <p>Customer-friendly support</p>
      </ul>
    </div>
  );
};

export default About;
