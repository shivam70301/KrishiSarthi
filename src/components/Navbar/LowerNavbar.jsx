import React from 'react';
import soil from '../../assets/soil.png';
import crop from '../../assets/crop.png';
import cropdisease from '../../assets/cropdisease.png';
import croppest from '../../assets/croppest.png';
import kgyan from '../../assets/KGyan.png';
import policies from '../../assets/policies.png';
import weather from '../../assets/weather.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button">
            <img src={soil} alt="Soil Information" className="nav-icon" />
            <p className="nav-text">Soil Information</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={crop} alt="Crop Recommendation" className="nav-icon" />
            <p className="nav-text">Crop Recommendation</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={cropdisease} alt="Crop Diseases" className="nav-icon" />
            <p className="nav-text">Crop Diseases</p>
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
            <img src={kgyan} alt="KGyan" className="nav-icon" />
            <p className="nav-text">KGyan</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={policies} alt="Policies" className="nav-icon" />
            <p className="nav-text">Government Policies & Schemes</p>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button">
            <img src={weather} alt="Weather" className="nav-icon" />
            <p className="nav-text">Weather Forecast</p>
          </button>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #f0f0f0;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .nav-list {
          list-style: none;
          display: flex;
          gap: 4rem; /* Increased gap for more space */
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%; /* Make the icons rounded */
        }
        .nav-text {
          text-align: center;
          margin-top: 5px; /* Add some spacing between icon and text */
        }
        .nav-button {
          background-color: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex; /* Align icon and text together */
          flex-direction: column; /* Stack icon and text */
          align-items: center; /* Center the icon and text */
        }
        .nav-button:hover {
          background-color: #ccc;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;