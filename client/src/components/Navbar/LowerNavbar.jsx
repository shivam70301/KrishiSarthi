import React from 'react';
import 'animate.css'; // For animations
import soil from '../../assets/soil.png';
import allcrop from '../../assets/allcrop.png';
import croprec from '../../assets/croprec.png';
import pesticides from '../../assets/pesticides.png';
import kgyan from '../../assets/KGyan.png';
import policies from '../../assets/policies.png';
import fair from '../../assets/fair.png';
import { Link } from "react-router-dom";

const Lower_Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/All_Crops" className="nav-link">
                <img src={allcrop} alt="All Crops" className="nav-icon" />
                <span className="nav-text">All Crops</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Soil_Information" className="nav-link">
                <img src={soil} alt="Soil Information" className="nav-icon" />
                <span className="nav-text">Soil Information</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Crop_Recommendation" className="nav-link">
                <img src={croprec} alt="Crop Recommendation" className="nav-icon" />
                <span className="nav-text">Crop Recommendation</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/K_Gyan" className="nav-link">
                <img src={kgyan} alt="KGyan" className="nav-icon" />
                <span className="nav-text">KGyan</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Policies" className="nav-link">
                <img src={policies} alt="Policies" className="nav-icon" />
                <span className="nav-text">Government Schemes</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Pesticides" className="nav-link">
                <img src={pesticides} alt="Pesticides" className="nav-icon" />
                <span className="nav-text">Pesticides</span>
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item animate__animated animate__fadeInUp">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Fair_Events" className="nav-link">
                <img src={fair} alt="Fair" className="nav-icon" />
                <span className="nav-text">Fair & Events</span>
              </Link>
            </div>
          </button>
        </li>

      </ul>
      <style jsx>{`
        .navbar {
          background-color: #f0f0f0;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          overflow-x: auto;
          box-shadow: rgb(51, 51, 51) 0px 0px 0px 3px;
        }
        .nav-list {
          list-style: none;
          display: flex;
          //gap: 4rem;
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
        .nav-item:hover {
          transform: scale(1.1);
          background-color: rgba(0, 128, 0, 0.1); /* Light green background on hover */
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
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .nav-icon:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transform: rotate(5deg); /* Rotate the icon slightly on hover */
        }
        .nav-text {
          text-align: center;
          margin-top: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .nav-text:hover {
          color: green; /* Text turns green on hover */
        }
        .nav-button {
          background-color: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        .nav-button:hover {
          background-color: #e0e0e0; /* Button background changes to light gray */
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
