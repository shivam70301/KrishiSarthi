import React from 'react';
import soil from '../../assets/soil.png';
import crop from '../../assets/crop.png';
import croppest from '../../assets/croppest.png';
import kgyan from '../../assets/KGyan.png';
import policies from '../../assets/policies.png';
import tool from '../../assets/Agriculture_Plan.png';
import { Link } from "react-router-dom";
const Lower_Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li className="nav-item">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/All_Crops">
                <img src={crop} alt="All Crops" className="nav-icon" />
                All Crops
              </Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
          <div className="navbar-buttons mbr-section-btn">
              <Link to="/Soil_Information">
            <img src={soil} alt="Soil Information" className="nav-icon" />
            Soil Information
            </Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/Crop_Recommendation"><img src={crop} alt="Crop Recommendation" className="nav-icon" />
              Crop Recommendation</Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/K_Gyan">
              <img src={kgyan} alt="KGyan" className="nav-icon" />
              KGyan
              </Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div>
              <Link to="/Agriculture_Plan">
              <img src={tool} alt="Plan" className="nav-icon" />
           Agriculture Plan
              </Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div>
              <Link to ="/Policies">
              <img src={policies} alt="Policies" className="nav-icon" />
              Government Schemes
              </Link>
            </div>
           
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div>
              <Link to="/Pesticides">
              <img src={croppest} alt="Pesticides" className="nav-icon" />
              Pesticides
              </Link>
            </div>
          </button>
        </li>


        <li className="nav-item">
          <button className="nav-button">
            <div>
              <Link to="/Fair_Events">
              <img src={tool} alt="Tool" className="nav-icon" />
              Fair & Events
              </Link>
            </div>
    
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


export default Lower_Navbar;
