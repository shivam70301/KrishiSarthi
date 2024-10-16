import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import watchlist from '../../assets/watchlist.png';
import notification from '../../assets/notification.png';
import homeIcon from '../../assets/home.png'; // Import your home icon
import locationIcon from '../../assets/location.png';
import { Link } from "react-router-dom";

// Sample districts of Maharashtra
const maharashtraDistricts = [
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara",
  "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli",
  "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
  "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
  "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg",
  "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
];

function NavigationBar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(maharashtraDistricts[0]);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const dropdownRef = useRef(null);

  const handleLocationSelect = (district) => {
    setSelectedLocation(district);
    localStorage.setItem("maharashtraDistricts", district);
    setShowDropdown(null);
  };

  const toggleDropdown = (dropdown, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({ left: rect.left, top: rect.bottom });
    setShowDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };
    setSelectedLocation(localStorage.getItem('maharashtraDistricts') || maharashtraDistricts[0]);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="KrishiSarthi Logo" />
        <span className="logo-text">KrishiSarthi</span>
      </div>

      <div className="nav-links" ref={dropdownRef}>
        {/* Home Button */}
        <div className="nav-link">
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>
        </div>

        {/* Location Dropdown */}
        <div className="nav-link" onClick={(e) => toggleDropdown("location", e)}>
          <img src={locationIcon} alt="Location" />
          <span className="location-text">{selectedLocation}</span>
          {showDropdown === "location" && (
            <div
              className="location-dropdown"
              style={{ left: dropdownPosition.left, top: dropdownPosition.top }}
            >
              {maharashtraDistricts.map((district) => (
                <div
                  key={district}
                  className="dropdown-item"
                  onClick={() => handleLocationSelect(district)}
                >
                  {district}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Watchlist Icon */}
        <div
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Watchlist")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Link to="/Watchlist">
            <img src={watchlist} alt="Watchlist" />
            {hoveredIcon === "Watchlist" && (
              <div className="hover-content">
                <div>Watchlist</div>
              </div>
            )}
          </Link>
        </div>

        {/* Notification Icon */}
        <div
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Notification")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Link to="/Notification">
            <img src={notification} alt="Notification" />
            {hoveredIcon === "Notification" && (
              <div className="hover-content">
                <div>Notifications</div>
              </div>
            )}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .nav-bar {
          background-color: #009400;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          white-space: nowrap;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .nav-bar {
            height: 80px;
            padding: 1rem 3rem;
          }
        }

        @media (max-width: 1024px) {
          .nav-bar {
            height: 70px;
            padding: 0.8rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .nav-bar {
            height: auto;
            padding: 0.5rem 1rem;
            flex-direction: column;
            align-items: center;
          }
          .nav-link {
            margin-bottom: 0.5rem;
          }
        }

        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-container img {
          width: 50px;
          height: 50px;
          margin-right: 0.5rem;
        }

        .logo-text {
          font-size: 24px;
          color: #ffffff;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .nav-link img {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
        }

        .location-text {
          color: white; /* Set the location text color to white */
        }

        .location-dropdown {
          position: fixed;
          background-color: #fff;
          padding: 8px 0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .dropdown-item {
          padding: 8px 12px;
          background-color: transparent;
          cursor: pointer;
          text-align: left;
          border-bottom: 1px solid #ccc;
        }

        .hover-content {
          position: absolute;
          top: 130%;
          left: 40%;
          transform: translateX(-50%);
          background-color: white;
          color: black;
          padding: 8px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          white-space: nowrap;
          font-size: 14px;
        }

        .hover-content div {
          margin-bottom: 4px;
        }

        .hover-content div:last-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 768px) {
          .nav-bar {
            flex-direction: column;
          }

          .nav-links {
            flex-direction: row;
            gap: 1rem;
            flex-wrap: nowrap;
            overflow-x: auto;
            white-space: nowrap;
          }
        }
      `}</style>
    </nav>
  );
}

export default NavigationBar;
