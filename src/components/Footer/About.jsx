import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Import your logo

function About() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#228B22", // forest green background
        maxHeight: "50vh", // Reduced height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px", // Reduced padding
      }}
    >
      <div
        style={{
          maxWidth: "1200px", // Adjusted width for a smaller height
          maxHeight: "47vh", // Added max height for the content container
          overflowY: "auto", // Handle overflow if content exceeds the max height
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#fff",
          padding: "20px", // Reduced padding
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)", // Reduced shadow size
          gap: "30px", // Adjusted gap
        }}
      >
        {/* Left Side: About Information and Logo */}
        <div style={{ flex: 1 }}>
          <img
            src={logo}
            alt="KrishiSarthi Logo"
            style={{
              maxWidth: "120px", // Adjusted logo size
              marginBottom: "15px", // Adjusted margin
            }}
          />
          <h1 style={{ fontSize: "2rem", color: "#333" }}>About KrishiSarthi</h1> {/* Adjusted font size */}
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}> {/* Adjusted font size and line height */}
            KrishiSarthi is your trusted companion in the world of agriculture.
            Built with the aim of empowering farmers, KrishiSarthi offers a
            wealth of information on soil conditions, crop recommendations, pest
            control, and real-time market prices. Whether you're a small-scale
            farmer or a large agricultural business, KrishiSarthi provides the
            tools you need to make informed decisions, improve crop yields, and
            stay updated with the latest agricultural trends.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
            Our platform is designed to bridge the gap between traditional farming
            practices and modern technology. With a focus on sustainability and
            innovation, we aim to help farmers achieve better productivity and
            profitability.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
            Join the KrishiSarthi community today and take a step towards a
            smarter, more sustainable farming future.
          </p>
        </div>

        {/* Right Side: Feedback Form */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "15px" }}> {/* Adjusted font size */}
            We Value Your Feedback!
          </h2>
          {submitted ? (
            <p style={{ color: "#4CAF50", fontSize: "1rem", textAlign: "center" }}> {/* Adjusted font size */}
              Thank you for your feedback!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px", // Reduced gap
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={feedback.name}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={feedback.email}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={feedback.message}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  height: "120px", // Reduced height
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  resize: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "8px 15px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
