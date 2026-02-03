import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        fontSize: "15px",
        lineHeight: "1.6",
      }}
    >
      <h2>Contact Us</h2>

      <p>
        Have questions about our products or need support? Feel free to reach
        out to us anytime.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          style={{ width: "100%", marginBottom: "15px" }}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{ width: "100%", marginBottom: "15px" }}
        />

        <label>Message</label>
        <textarea
          rows="4"
          placeholder="Type your message here"
          required
          style={{ width: "100%", marginBottom: "15px" }}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <p>
          <strong>Email:</strong> support@trendymobilez.com
        </p>
        <p>
          <strong>Phone:</strong> +91 92901 55238
        </p>
        <p>
          <strong>Address:</strong> Hyderabad, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
