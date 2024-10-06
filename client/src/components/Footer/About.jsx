import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.png";
import facebook from "../../assets/facebook.png";
import threads from "../../assets/threads.png";
import emailIcon from "../../assets/email.png"; // New email icon
import mobileIcon from "../../assets/mobile.png"; // New mobile icon
import whatsappIcon from "../../assets/whatsapp.png"; // New WhatsApp icon
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFeedback({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        // Handle error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error (e.g., show a message to the user)
    }
  };
  

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container-fluid bg-light p-3">
      <div className="row justify-content-center h-100">
        <div className="col-md-12 d-flex flex-column justify-content-between">
          <div className="scrollable-container">
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
                  KrishiSarthi is your trusted companion in the world of
                  agriculture. We provide valuable information on soil
                  conditions, crop recommendations, pest control, and real-time
                  market prices.
                </p>
                <p className="text-muted fade-in">
                  Join the KrishiSarthi community today for a smarter,
                  sustainable farming future!
                </p>
              </div>

              {/* Right Side: FAQ Section */}
              <div className="col-md-6">
                <h2 className="h4 text-dark">Frequently Asked Questions</h2>
                <div className="faq-item" onClick={() => toggleFaq(1)}>
                  <strong>Q1: What is KrishiSarthi?</strong>
                  {openFaq === 1 && (
                    <p>
                      A1: KrishiSarthi is a platform designed to empower farmers
                      with information and tools to improve their agricultural
                      practices.
                    </p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(2)}>
                  <strong>Q2: How can I get started?</strong>
                  {openFaq === 2 && (
                    <p>
                      A2: Simply register on our platform, and you will have
                      access to a wealth of resources tailored for farmers.
                    </p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(3)}>
                  <strong>Q3: Is the service free to use?</strong>
                  {openFaq === 3 && (
                    <p>
                      A3: Yes, KrishiSarthi offers free services to empower
                      farmers with knowledge and resources.
                    </p>
                  )}
                </div>
                <div className="faq-item" onClick={() => toggleFaq(4)}>
                  <strong>Q4: How can I provide feedback?</strong>
                  {openFaq === 4 && (
                    <p>
                      A4: You can provide feedback using the form on this page
                      or by contacting us directly through email or phone.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Feedback Form Section */}
            <div className="row mt-4">
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
                      className="mb-2 p-1 border rounded feedback-input"
                      style={{ fontSize: "0.9rem" }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={feedback.email}
                      onChange={handleChange}
                      required
                      className="mb-2 p-1 border rounded feedback-input"
                      style={{ fontSize: "0.9rem" }}
                    />
                    <textarea
                      name="message"
                      placeholder="Your Feedback"
                      value={feedback.message}
                      onChange={handleChange}
                      required
                      className="mb-2 p-1 border rounded feedback-input"
                      style={{
                        height: "80px",
                        resize: "none",
                        fontSize: "0.9rem",
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-success feedback-button"
                      style={{ fontSize: "0.9rem", padding: "5px 10px" }}
                    >
                      Submit Feedback
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="col-md-6">
                <h2 className="h4 text-dark">Contact Us</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <a
                      href="mailto:support@krishisarthi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center"
                    >
                      <img
                        src={emailIcon}
                        alt="Email"
                        style={{ width: "30px", height: "30px", marginRight: "10px" }}
                      />
                      <span>support@krishisarthi.com</span>
                    </a>
                  </div>
                  <div className="contact-item">
                    <img
                      src={mobileIcon}
                      alt="Mobile"
                      style={{ width: "30px", height: "30px", marginRight: "10px" }}
                    />
                    <span>+91 50045 67890</span>
                  </div>
                  <div className="contact-item">
                    <img
                      src={whatsappIcon}
                      alt="WhatsApp"
                      style={{ width: "30px", height: "30px", marginRight: "10px" }}
                    />
                    <span> +91 9898567891</span>
                  </div>
                </div>

                <h2 className="h4 text-dark mt-3">Follow Us</h2>
               
                <div className="social-links d-flex justify-content-start">
  <a
    href="https://www.instagram.com/accounts/login/"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={instagram}
      alt="Instagram"
      style={{ width: "30px", height: "30px", margin: "0 5px" }}
    />
  </a>
  <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer">
    <img
      src={x}
      alt="X"
      style={{ width: "30px", height: "30px", margin: "0 5px" }}
    />
  </a>
  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <img
      src={facebook}
      alt="Facebook"
      style={{ width: "30px", height: "30px", margin: "0 5px" }}
    />
  </a>
  <a href="https://www.threads.net/login/" target="_blank" rel="noreferrer">
    <img
      src={threads}
      alt="Threads"
      style={{ width: "30px", height: "30px", margin: "0 5px" }}
    />
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-in {
          animation: fadeIn 2s;
        }
        .scrollable-container {
          max-height: 350px;
          overflow-y: auto;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 15px;
          background: white;
        }
.social-links {
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
  justify-content: start; /* Align icons to the left */
}


     
        .feedback-input {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .feedback-input:focus {
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        .feedback-button {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .feedback-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        .faq-item {
          margin-bottom: 15px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          padding: 10px;
          border: 1px solid transparent;
        }
        .faq-item:hover {
          background-color: rgba(0, 123, 255, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.5);
        }
        .faq-item strong {
          font-weight: bold;
        }
        .faq-item p {
          margin: 0;
          padding: 10px 0;
        }
        .contact-info {
          margin-top: 10px; /* Space between heading and icons */
        }
        .contact-item {
          margin-bottom: 10px; /* Space between each contact item */
          display: flex;
          align-items: center; /* Center items vertically */
        }
      `}</style>
    </div>
  );
}

export default About;
