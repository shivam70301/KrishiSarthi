import React from 'react';
import soil from '../../assets/soil.png';
import crop from '../../assets/crop.png';
import cropdisease from '../../assets/cropdisease.png';
import croppest from '../../assets/croppest.png';
import kgyan from '../../assets/KGyan.png';
import policies from '../../assets/policies.png';
import tool from '../../assets/Agriculture_Plan.png';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/crops">
                <img src={soil} alt="Soil Information" className="nav-icon" />
                All Crops
              </Link>
            </div>
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-button">
            <img src={crop} alt="Crop Recommendation" className="nav-icon" />
            <p className="nav-text">Soil Information</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={cropdisease} alt="Crop Diseases" className="nav-icon" />
            <p className="nav-text">Crop Recommendation</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={kgyan} alt="KGyan" className="nav-icon" />
            <p className="nav-text">KGyan</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={tool} alt="Plan" className="nav-icon" />
            <p className="nav-text">Agriculture Plan</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={policies} alt="Policies" className="nav-icon" />
            <p className="nav-text">Government Schemes</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={croppest} alt="Pesticides" className="nav-icon" />
            <p className="nav-text">Pesticides</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={tool} alt="Tool" className="nav-icon" />
            <p className="nav-text">Fair & Events</p>
          </button>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #f0f0f0;
          padding: 1rem;
          display: flex;
          justify-content: center;
          overflow-x: auto; /* Allows horizontal scrolling if needed */
        }
        .nav-list {
          list-style: none;
          display: flex;
          gap: 4rem; /* Horizontal gap between items */
          flex-wrap: nowrap; /* Keeps items in a single row */
          padding: 0;
          margin: 0;
          min-width: 100%; /* Ensures the list takes up full width */
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%; /* Rounded icons */
        }
        .nav-text {
          text-align: center;
          margin-top: 5px;
        }
        .nav-button {
          background-color: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-button:hover {
          background-color: #ccc;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav-list {
            gap: 1rem; /* Smaller gap on medium screens */
          }
          .nav-icon {
            width: 50px;
            height: 50px; /* Smaller icons */
          }
        }

        @media (max-width: 480px) {
          .nav-list {
            gap: 0.5rem; /* Even smaller gap on small screens */
          }
          .nav-icon {
            width: 40px;
            height: 40px; /* Even smaller icons */
          }
          .nav-text {
            font-size: 0.7rem; /* Smaller text */
          }
        }
      `}</style>
    </nav>
  );
};


export default Navbar;
