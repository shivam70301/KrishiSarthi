import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Weather icons (using Unicode emojis for simplicity)
const icons = {
    sunny: '☀️',
    partlySunny: '⛅',
    cloudy: '☁️',
    rainy: '🌧️',
    thunderstorm: '⛈️',
};

// OpenWeatherMap API configuration
const API_KEY = '53c0b54f8db437f1a51861991e512b88'; // Replace with your OpenWeatherMap API key
const DEFAULT_CITY = 'palghar'; // Default city
const API_URL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const WeatherForecast = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(DEFAULT_CITY);

    useEffect(() => {
        // Fetch weather data from OpenWeatherMap API
        console.log("Fetching weather data...");
        fetchWeatherData(city);
    }, [city]);

    const fetchWeatherData = (city) => {
        axios.get(API_URL(city))
            .then(response => {
                const data = response.data;
                console.log("Weather data fetched:", data); // Log fetched data
                const realTimeWeatherData = {
                    day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    temperature: `${data.main.temp}°C`,
                    realFeel: `${data.main.feels_like}°C`,
                    condition: data.weather[0].description,
                    icon: getWeatherIcon(data.weather[0].main),
                };
                setWeatherData(realTimeWeatherData);
            });
    };

    // Get corresponding icon based on weather condition
    const getWeatherIcon = (condition) => {
        switch (condition) {
            case 'Clear':
                return icons.sunny;
            case 'Clouds':
                return icons.partlySunny;
            case 'Rain':
                return icons.rainy;
            case 'Thunderstorm':
                return icons.thunderstorm;
            default:
                return icons.cloudy;
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchCity = e.target.elements.city.value.trim();
        setCity(searchCity || DEFAULT_CITY);
    };

    const renderContent = () => {
        if (!weatherData) {
            return <p style={styles.loadingText}>Loading weather data...</p>;
        }

        return (
            <div style={styles.weatherCard}>
                <div style={styles.header}>
                    <h2 style={styles.day}>{weatherData.day}</h2>
                    <h2 style={styles.dateTime}>{weatherData.time}</h2>
                </div>
                <h2 style={styles.date}>{weatherData.date}</h2>
                <div style={styles.iconContainer}>
                    <span style={styles.icon}>{weatherData.icon}</span>
                    <h1 style={styles.temp}>{weatherData.temperature}</h1>
                </div>
                <p style={styles.realFeel}>RealFeel: <span style={styles.realFeelValue}>{weatherData.realFeel}</span></p>
                <p style={styles.condition}>{weatherData.condition}</p>
            </div>
        );
    };

    return (
        <div style={styles.appContainer}>
            <h1 style={styles.heading}>Weather Forecast</h1>
            <form onSubmit={handleSearch} style={styles.searchForm}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city in Maharashtra"
                    defaultValue={DEFAULT_CITY}
                    style={styles.searchInput}
                />
                <button type="submit" style={styles.searchButton}>Search</button>
            </form>
            {renderContent()}
        </div>
    );
};

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        padding: '2%',
        textAlign: 'center',
        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
        minHeight: '60vh',
        fontFamily: 'Arial, sans-serif',
        margin: '2% 8%',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        fontSize: '2.5em',
        color: '#fff',
        marginBottom: '15px',
    },
    searchForm: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    searchInput: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
        width: '200px',
    },
    searchButton: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    weatherCard: {
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    day: {
        fontSize: '1.5em',
    },
    dateTime: {
        fontSize: '1em',
        color: '#555',
    },
    date: {
        fontSize: '1.2em',
        fontWeight: '600',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column', // Stack icon and temperature vertically
        alignItems: 'center',
    },
    icon: {
        fontSize: '4em',
        marginBottom: '0px', // Add space between icon and temperature
    },
    temp: {
        fontSize: '3em',
        fontWeight: 'bold',
        margin: '0',
    },
    realFeel: {
        fontSize: '1em',
        color: '#777',
        fontStyle: 'italic',
    },
    realFeelValue: {
        fontWeight: 'bold',
    },
    condition: {
        margin: '10px 0',
        fontSize: '1.8rem',
        color: '#333',
        fontWeight: 'bold', // Makes the text bold
        width: '100%', // Adjust the width as needed, here it's set to full width
        fontFamily: 'Georgia, serif', // Example of a different font family (you can replace with your preferred font)
        textAlign: 'center', // Center the text
        textTransform: 'capitalize',
    },
    
    loadingText: {
        fontSize: '1.5em',
        color: '#999',
    },
};

export default WeatherForecast;
