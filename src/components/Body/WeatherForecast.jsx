// WeatherForecast.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// Import react-responsive-carousel CSS
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Function to format date as dd/mm/yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
const WeatherForecast = () => {
  // Sample weather data with dates
  const weatherData = [
    { date: '2024-09-16', day: 'Monday', temp: '28°C', condition: 'Sunny', description: 'Clear sky with no clouds.', icon: '☀️' },
    { date: '2024-09-17', day: 'Tuesday', temp: '26°C', condition: 'Partly Cloudy', description: 'Some clouds, but still mostly sunny.', icon: '⛅' },
    { date: '2024-09-18', day: 'Wednesday', temp: '24°C', condition: 'Rainy', description: 'Showers throughout the day.', icon: '🌧️' },
    { date: '2024-09-19', day: 'Thursday', temp: '25°C', condition: 'Showers', description: 'Occasional rain showers.', icon: '🌦️' },
    { date: '2024-09-20', day: 'Friday', temp: '27°C', condition: 'Partly Cloudy', description: 'Some clouds with occasional sun.', icon: '⛅' },
    { date: '2024-09-21', day: 'Saturday', temp: '30°C', condition: 'Sunny', description: 'Bright and sunny throughout the day.', icon: '☀️' },
    { date: '2024-09-22', day: 'Sunday', temp: '29°C', condition: 'Clear', description: 'Clear sky and warm temperatures.', icon: '☀️' },
    // Add more days as needed
  ];

  // Function to split data into chunks of 4 days
  const splitIntoChunks = (data, daysPerChunk = 4) => {
    const result = [];
    for (let i = 0; i < data.length; i += daysPerChunk) {
      result.push(data.slice(i, i + daysPerChunk));
    }
    return result;
  };

  const chunks = splitIntoChunks(weatherData);

  const carouselStyle = {
    width: '100%',
    margin: '0 auto',
  };

  const slideStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const dayContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  };

  const dayStyle = {
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 10px',
    flex: '0 0 23%', // Adjust width to fit exactly 4 days in one row
    boxSizing: 'border-box',
  };

  const dateStyle = {
    fontSize: '14px',
    color: '#888',
    margin: '5px 0',
  };

  const iconStyle = {
    fontSize: '24px',
    margin: '5px 0',
  };

  const tempStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 0',
  };

  const conditionStyle = {
    fontSize: '14px',
    margin: '5px 0',
  };

  const descriptionStyle = {
    fontSize: '12px',
    color: '#555',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
    marginBottom: '20px',      
  };
  return (
    <div style={carouselStyle}>
      <h2 style={titleStyle}>Weather Forecast</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        responsive={responsive}
      >
        {chunks.map((chunk, index) => (
          <div key={index} style={slideStyle}>
            <div style={dayContainerStyle}>
              {chunk.map((day, i) => (
                <div key={i} style={dayStyle}>
                  <p style={dateStyle}>{formatDate(day.date)}</p>
                  <h4>{day.day}</h4>
                  <div style={iconStyle}>{day.icon}</div>
                  <p style={tempStyle}>{day.temp}</p>
                  <p style={conditionStyle}>{day.condition}</p>
                  <p style={descriptionStyle}>{day.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WeatherForecast;
