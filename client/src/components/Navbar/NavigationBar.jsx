import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import watchlist from '../../assets/watchlist.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/profile.png';
import translateIcon from '../../assets/translator.png';       
import locationIcon from '../../assets/location.png';
import { Link } from "react-router-dom";
import GoogleTranslate from './GoogleTranslate'

// Sample districts of Maharashtra (replace with your actual data)
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
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(null); // Track which dropdown is currently shown
  const [selectedLocation, setSelectedLocation] = useState(maharashtraDistricts[0]); // Default to first district
  const [dropdownPosition, setDropdownPosition] = useState({}); // Track the position of the dropdown

  const dropdownRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  // Handle location selection and close dropdown
  const handleLocationSelect = (district) => {
    setSelectedLocation(district);
    setShowDropdown(null); // Close dropdown after selection
  };

  // Toggle dropdown visibility and set its position
  const toggleDropdown = (dropdown, event) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Get the position of the button
    setDropdownPosition({ left: rect.left, top: rect.bottom }); // Set the dropdown position dynamically
    setShowDropdown((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="KrishiSarthi Logo" />
        <span className="logo-text">KrishiSarthi</span>
      </div>

      {/* Search Input */}
      <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      </div>

      <div className="nav-links" ref={dropdownRef}>
        {/* Translator Dropdown */}
        <div
        className="nav-link"
        onClick={(e) => toggleDropdown("translator", e)}
      >
        <img src={translateIcon} alt="Translator" />
        {showDropdown === "translator" && (
          <div
            className="translator-dropdown"
            style={{ left: dropdownPosition.left, top: dropdownPosition.top }}
          >
            <GoogleTranslate />
            <div className="dropdown-item">English</div>
            <div className="dropdown-item">मराठी</div>
          </div>
        )}
      </div>


        {/* Location Dropdown */}

        
        <div
          className="nav-link"
          onClick={(e) => toggleDropdown("location", e)}
        >
          <img src={locationIcon} alt="Location" />
          <span>{selectedLocation}</span>
          {showDropdown === "location" && (
            <div
              className="location-dropdown"
              style={{ left: dropdownPosition.left, top: dropdownPosition.top }}
            >
              {maharashtraDistricts.map((district) => (
                <div
                  key={district}
                  className="dropdown-item"
                  onClick={() => handleLocationSelect(district)} // Close dropdown on selection
                >
                  {district}
                  
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Other Icons */}
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
                {/* Add watchlist items dynamically here */}
              </div>
            )}
          </Link>
        </div>

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
                {/* Add notification items dynamically here */}
              </div>
            )}
          </Link>
        </div>

        <div
          className="nav-link"
          onMouseEnter={() => setHoveredIcon("Profile")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Link to="/Profile">
            <img src={profile} alt="Profile" />
            {hoveredIcon === "Profile" && (
              <div className="hover-content">
                <div>Profile</div>
                {/* Add profile details dynamically here */}
              </div>
            )}
          </Link>
        </div>
      </div>

      <style jsx>{`
/* Base style for larger screens (laptops and desktops) */
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

/* For large screens (desktops, large laptops) */
@media (min-width: 1024px) {
  .nav-bar {
    height: 80px;
    padding: 1rem 3rem;
  }
}

/* For medium screens (tablets, smaller laptops) */
@media (max-width: 1024px) {
  .nav-bar {
    height: 70px;
    padding: 0.8rem 1.5rem;
  }
}

/* For small screens (phones, small tablets) */
@media (max-width: 768px) {
  .nav-bar {
    height: auto;
    padding: 0.5rem 1rem;
    flex-direction: column;
    align-items: center; /* Center items in a column */
  }

  .nav-link {
    margin-bottom: 0.5rem;
  }
}

/* For extra small screens (small phones) */
@media (max-width: 480px) {
  .nav-bar {
    height: auto;
    padding: 0.5rem;
    flex-direction: column;
  }

  .nav-link {
    font-size: 14px;
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

        input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 16px;
          width: 300px;
          max-width: 100%;
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

        .translator-dropdown,
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
          top: 130%; /* Adjust to show hover text below the icon */
          left: 40%; /* Start at the middle of the icon */
          transform: translateX(-50%); /* Center it horizontally */
          background-color: white; /* White background */
          color: black; /* Black text color */
          padding: 8px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 9999; /* High z-index to ensure it appears on top */
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

          input {
            width: 100%;
            margin-bottom: 10px;
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
