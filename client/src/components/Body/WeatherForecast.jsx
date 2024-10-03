// WeatherForecast.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function to format date as dd/mm/yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
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

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 animated-title">🌦️ Weather Forecast</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        transitionTime={700}
        className="animated-carousel"
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="d-flex justify-content-around weather-slide">
            {chunk.map((day, i) => (
              <div key={i} className="day-card p-3">
                <p className="date">{formatDate(day.date)}</p>
                <h4 className="day-name">{day.day}</h4>
                <div className="weather-icon">{day.icon}</div>
                <p className="temperature">{day.temp}</p>
                <p className="condition">{day.condition}</p>
                <p className="description">{day.description}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <style>{`
        /* Carousel Animation */
        .animated-carousel {
          animation: fadeIn 1.5s ease-in-out;
        }

        /* Title Animation */
        .animated-title {
          font-size: 2.5rem;
          color: #007bff;
          animation: slideDown 1s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Weather Slide */
        .weather-slide {
          padding: 30px;
          border-radius: 10px;
          background-color: #f0f8ff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          animation: zoomIn 0.7s ease-out;
        }

        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Day Cards */
        .day-card {
          width: 22%;
          background: linear-gradient(135deg, #007bff, #33b5e5);
          color: #fff;
          text-align: center;
          border-radius: 10px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .day-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        /* Styling for Elements */
        .date {
          font-size: 0.9rem;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .day-name {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .weather-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .temperature {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .condition {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .description {
          font-size: 0.9rem;
          color: #ddd;
        }

        @media (max-width: 768px) {
          .day-card {
            width: 45%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default WeatherForecast;
