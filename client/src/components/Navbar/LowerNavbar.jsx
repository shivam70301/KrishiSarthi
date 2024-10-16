import React, { useState, useEffect } from 'react';
import 'animate.css'; // For animations
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import soil from '../../assets/soil.png';
import allcrop from '../../assets/allcrop.png';
import croprec from '../../assets/croprec.png';
import pesticides from '../../assets/pesticides.png';
import kgyan from '../../assets/KGyan.png';
import policies from '../../assets/policies.png';
import fair from '../../assets/fair.png';

const Lower_Navbar = () => {
  const location = useLocation(); // Get current location
  const [activeLink, setActiveLink] = useState(location.pathname); // Track the active link

  // Update the active link state when the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path); // Update the active link state when a button is clicked
  };

  const links = [
    { to: "/All_Crops", img: allcrop, alt: "All Crops", text: "All Crops" },
    { to: "/Soil_Information", img: soil, alt: "Soil Information", text: "Soil Information" },
    { to: "/Crop_Recommendation", img: croprec, alt: "Crop Recommendation", text: "Crop Recommendation" },
    { to: "/K_Gyan", img: kgyan, alt: "KGyan", text: "KGyan" },
    { to: "/Policies", img: policies, alt: "Government Schemes", text: "Government Schemes" },
    { to: "/Pesticides", img: pesticides, alt: "Pesticides", text: "Pesticides" },
    { to: "/Fair_Events", img: fair, alt: "Fair", text: "Fair & Events" }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index} className="nav-item animate__animated animate__fadeInUp">
            <button 
              className={`nav-button ${activeLink === link.to ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.to)}
            >
              <div className="navbar-buttons mbr-section-btn">
                <Link to={link.to} className="nav-link">
                  <img src={link.img} alt={link.alt} className="nav-icon" />
                  <span className="nav-text">{link.text}</span>
                </Link>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #f0f0f0;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          overflow-x: auto;
          box-shadow: rgb(51, 51, 51) 0px 0px 0px 3px;
        }
        .nav-list {
          list-style: none;
          display: flex;
          gap: 2rem;
          flex-wrap: nowrap;
          justify-content: space-between; /* Distribute space evenly */
          padding: 0;
          margin: 0;
          min-width: 100%;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        .nav-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
        .nav-text {
          text-align: center;
          margin-top: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .nav-button {
          background-color: transparent;
          border: none;
          padding-top: 0.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        .nav-button.active .nav-text {
          color: #009400; /* Text color changes to yellow when active */
        }
        .nav-button:hover .nav-text {
          color: green; /* Change text color to green on hover */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav-list {
            gap: 2rem;
          }
          .nav-icon {
            width: 80px;
            height: 80px;
          }
          .nav-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.3rem;
          }
          .nav-list {
            gap: 1rem;
            padding: 0;
          }
          .nav-icon {
            width: 60px;
            height: 60px;
          }
          .nav-text {
            font-size: 0.9rem;
          }
        }

        /* Animations */
        .nav-item {
          animation: slideIn 1s ease-in-out;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Lower_Navbar;
