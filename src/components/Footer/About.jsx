import React, { useState } from "react";
import logo1 from "../../assets/logo1.png"; // Import your logo
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ state for controlling which question is open
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle between opening and closing a question
  };

  return (
    <div className="container-fluid bg-light p-3" style={{ height: "100vh" }}> {/* Full viewport height */}
      <div className="row justify-content-center h-100"> {/* Full height row */}
        <div className="col-md-12 d-flex flex-column justify-content-between"> {/* Increased width to 12 */}
          <div className="scrollable-container"> {/* Added scrollable container */}
            <div className="row justify-content-center">
              {/* Left Side: About Information and Logo */}
              <div className="col-md-6 text-center">
                <img
                  src={logo1}
                  alt="KrishiSarthi Logo"
                  className="mb-3 fade-in"
                  style={{ maxWidth: "120px" }}
                />
                <h1 className="display-4 text-dark mb-4 fade-in">
                  About KrishiSarthi
                </h1>
                <p className="lead text-muted fade-in">
                  KrishiSarthi is your trusted companion in the world of agriculture. We provide valuable information on soil conditions, crop recommendations, pest control, and real-time market prices.
                </p>
                <p className="text-muted fade-in">
                  Join the KrishiSarthi community today for a smarter, sustainable farming future!
                </p>
              </div>

              {/* Right Side: FAQ Section */}
              <div className="col-md-6">
                <h2 className="h4 text-dark">Frequently Asked Questions</h2>
                <div className="faq-item" onClick={() => toggleFaq(1)}>
                  <strong>Q1: What is KrishiSarthi?</strong>
                  {openFaq === 1 && (
                    <p>A1: KrishiSarthi is a platform designed to empower farmers with information and tools to improve their agricultural practices.</p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(2)}>
                  <strong>Q2: How can I get started?</strong>
                  {openFaq === 2 && (
                    <p>A2: Simply register on our platform, and you will have access to a wealth of resources tailored for farmers.</p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(3)}>
                  <strong>Q3: Is the service free to use?</strong>
                  {openFaq === 3 && (
                    <p>A3: Yes, KrishiSarthi offers free services to empower farmers with knowledge and resources.</p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(4)}>
                  <strong>Q4: How can I provide feedback?</strong>
                  {openFaq === 4 && (
                    <p>A4: You can provide feedback using the form on this page or by contacting us directly through email or phone.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Feedback Form Section */}
            <div className="row mt-4"> {/* Reduced margin-top */}
              <div className="col-md-6">
                <h2 className="h4 text-dark mb-4 fade-in">
                  We Value Your Feedback!
                </h2>
                {submitted ? (
                  <p className="text-success text-center fade-in">
                    Thank you for your feedback!
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={feedback.name}
                      onChange={handleChange}
                      required
                      className="mb-2 p-1 border rounded feedback-input" // Reduced padding
                      style={{ fontSize: "0.9rem" }} // Smaller font size
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={feedback.email}
                      onChange={handleChange}
                      required
                      className="mb-2 p-1 border rounded feedback-input" // Reduced padding
                      style={{ fontSize: "0.9rem" }} // Smaller font size
                    />
                    <textarea
                      name="message"
                      placeholder="Your Feedback"
                      value={feedback.message}
                      onChange={handleChange}
                      required
                      className="mb-2 p-1 border rounded feedback-input" // Reduced padding
                      style={{ height: "80px", resize: "none", fontSize: "0.9rem" }} // Reduced height and font size
                    />
                    <button
                      type="submit"
                      className="btn btn-success feedback-button"
                      style={{ fontSize: "0.9rem", padding: "5px 10px" }} // Smaller button with reduced padding
                    >
                      Submit Feedback
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="col-md-6">
                <h2 className="h4 text-dark">Contact Us</h2>
                <p>
                  <i className="fas fa-envelope"></i> Email: support@krishisarthi.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> Phone: +123 456 7890
                </p>
                <p>
                  <i className="fas fa-comments"></i> WhatsApp: +123 456 7891
                </p>

                <h2 className="h4 text-dark mt-3">Follow Us</h2> {/* Reduced margin-top */}
                <div className="social-links">
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-threads"></i> Threads
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for animations and hover effects */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 2s;
        }
        .scrollable-container {
          max-height: 350px; /* Reduce height to fit the viewport */
          overflow-y: auto; /* Enable vertical scrollbar */
          border: 1px solid #ccc; /* Optional border */
          border-radius: 5px; /* Rounded corners */
          padding: 15px; /* Padding inside the container */
          background: white; /* Background color */
        }
        .social-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .social-icon {
          text-decoration: none;
          color: #007bff;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-icon:hover {
          color: #0056b3;
          transform: scale(1.1); /* Scale up on hover */
        }
        .feedback-input {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .feedback-input:focus {
          border-color: #007bff; /* Change border color on focus */
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add box shadow */
        }
        .feedback-button {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .feedback-button:hover {
          background-color: #0056b3; /* Darker green on hover */
          transform: scale(1.05); /* Scale up on hover */
        }
        .faq-item {
          margin-bottom: 15px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          padding: 10px;
          border: 1px solid transparent; /* To add hover effect */
        }
        .faq-item:hover {
          background-color: rgba(0, 123, 255, 0.1); /* Light blue background on hover */
          border: 1px solid rgba(0, 123, 255, 0.5); /* Blue border on hover */
        }
        .faq-item strong {
          font-weight: bold;
        }
        .faq-item p {
          margin: 0;
          padding: 10px 0;
        }
      `}</style>
    </div>
  );
}

export default About;
