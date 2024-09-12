import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import star from '../../assets/star.png';
import bell from '../../assets/bell.png';
import person from '../../assets/person.png';
import about from '../../assets/about.png';
import translateIcon from '../../assets/translator.png'; 
import locationIcon from '../../assets/location.png'; 

// Sample districts of Maharashtra (replace with your actual data)
const maharashtraDistricts = [
 "Ahmednagar",
"Akola",
"Amravati",
"Aurangabad",
"Beed",
"Bhandara",
"Buldhana",
"Chandrapur",
"Dhule",
"Gadchiroli",
"Gondia",
"Hingoli",
"Jalgaon",
"Jalna",
"Kolhapur",
"Latur",
"Mumbai City",
"Mumbai Suburban",
"Nagpur",
"Nanded",
"Nandurbar",
"Nashik",
"Osmanabad",
"Palghar",
"Parbhani",
"Pune",
"Raigad",
"Ratnagiri",
"Sangli",
"Satara",
"Sindhudurg",
"Solapur",
"Thane",
"Wardha",
"Washim",
"Yavatmal"
];

function NavigationBar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTranslatorDropdown, setShowTranslatorDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(maharashtraDistricts[0]); // Default to first district

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleTranslatorDropdown = () => {
    setShowTranslatorDropdown(!showTranslatorDropdown);
  };

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };

  const handleLocationSelect = (district) => {
    setSelectedLocation(district);
    setShowLocationDropdown(false); // Close dropdown after selection
  };

  return (
    <nav className="nav-bar" style={{
      backgroundColor: '#228B22',
      padding: '0.5rem 1rem', // Reduced padding 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '75px' // Set a fixed height for the navbar 
    }}>
      <div className="logo-container" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src={logo} alt="KrishiSarthi Logo" style={{
          width: '50px', // Reduced logo size
          height: '50px',
          marginRight: '0.5rem'
        }} />
        <span className="logo-text" style={{
          fontSize: '24px', // Slightly reduced font size
          color: '#FFFFFF',
          fontWeight: 'bold',
        }}>KrishiSarthi</span>
      </div>
      <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '20px',
              fontSize: '16px',
              width:'500px',
            }}
          />
      <div className="nav-links" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Translator Dropdown */}
        <div className="nav-link" 
          onMouseEnter={toggleTranslatorDropdown}
          onMouseLeave={toggleTranslatorDropdown}
          style={{
            marginRight: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <img src={translateIcon} alt="Translator" style={{
            width: '25px', // Reduced icon size
            height: '25px',
            marginRight: '0.5rem'
          }} />
          {showTranslatorDropdown && (
            <div className="translator-dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#fff',
              padding: '8px 12px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              zIndex: 1,
            }}>
              <button className="dropdown-item" style={{
                padding: '4px 8px',
                marginBottom: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
              }}>English</button>
              <button className="dropdown-item" style={{
                padding: '4px 8px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
              }}>मराठी</button>
            </div>
          )}
        </div>

        {/* Location Dropdown */}
        <div className="nav-link" 
      onMouseEnter={toggleLocationDropdown}
      onMouseLeave={toggleLocationDropdown}
      style={{
        marginRight: '1rem',
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <img src={locationIcon} alt="Location" style={{
        width: '20px', // Reduced icon size
        height: '20px',
        marginRight: '0.5rem'
      }} />
      <span style={{
        marginRight: '0.5rem' 
      }}>{selectedLocation}</span> {/* Display selected location */}
      {showLocationDropdown && (
        <div className="location-dropdown" style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          backgroundColor: '#fff',
          padding: '8px 12px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          zIndex: 1,
          maxHeight: '200px', /* Set a maximum height for the dropdown */
          overflowY: 'auto' /* Add a vertical scrollbar */
        }}>
          {maharashtraDistricts.map((district) => (
            <button 
              className="dropdown-item" 
              key={district} 
              onClick={() => handleLocationSelect(district)} 
              style={{
                padding: '4px 8px',
                marginBottom: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
              }}>
              {district}
            </button>
          ))}
        </div>
      )}
    </div>
        {/* Watchlist Button */}
        <button className="nav-link"
          onMouseEnter={() => handleIconHover('Watchlist')}
          onMouseLeave={handleIconLeave}
          style={{
            marginRight: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <img src={star} alt="Watchlist" style={{
            width: '20px', // Reduced icon size
            height: '20px',
            marginRight: '0.5rem'
          }} />
          {/* <span style={{
            display: 'inline-block' 
          }}></span>  */}
          {hoveredIcon === 'Watchlist' && (
            <div className="tooltip" style={{
              position: 'absolute',
              top: '100%', 
              left: '50%', 
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
              padding: '8px 12px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              Watchlist
            </div>
          )}
        </button>
        <button className="nav-link"
          onMouseEnter={() => handleIconHover('Notification')}
          onMouseLeave={handleIconLeave}
          style={{
            marginRight: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <img src={bell} alt="Notification" style={{
            width: '18px', // Reduced icon size
            height: '18px',
            marginRight: '0.5rem'
          }} />
          {/* <span style={{
            display: 'inline-block' 
          }}></span>  */}
          {hoveredIcon === 'Notification' && (
            <div className="tooltip" style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
              padding: '8px 12px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              Notification
            </div>
          )}
        </button>
        <button className="nav-link"
          onMouseEnter={() => handleIconHover('Profile')}
          onMouseLeave={handleIconLeave}
          style={{
            marginRight: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <img src={person} alt="Profile" style={{
            width: '18px', // Reduced icon size
            height: '18px',
            marginRight: '0.5rem'
          }} />
          {/* <span style={{
            display: 'inline-block' 
          }}></span>  */}
          {hoveredIcon === 'Profile' && (
            <div className="tooltip" style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
              padding: '8px 12px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              Profile
            </div>
          )}
        </button>
        <div className="search-container" style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '1rem'
        }}>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;