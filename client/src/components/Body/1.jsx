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
const DEFAULT_CITY = 'Mumbai'; // Default city
const API_URL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const WeatherForecast = () => {
    const [selected, setSelected] = useState('TODAY');
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
                    TODAY: {
                        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        temperature: `${data.main.temp}°C`,
                        realFeel: `${data.main.feels_like}°C`,
                        condition: data.weather[0].description,
                        lookingAhead: 'Stay tuned for upcoming weather conditions.',
                        icon: getWeatherIcon(data.weather[0].main),
                    },
                };
                setWeatherData(realTimeWeatherData);
            })
          
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

    const handleButtonClick = (view) => {
        setSelected(view);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchCity = e.target.elements.city.value.trim();
        setCity(searchCity || DEFAULT_CITY); // Set city to searchCity or default to Mumbai if empty
    };

    const renderContent = () => {
        if (!weatherData) {
            return <p style={styles.loadingText}>Loading weather data...</p>;
        }

        switch (selected) {
            case 'TODAY':
                return (
                    <div style={styles.weatherCard}>
                        <div style={styles.header}>
                            <h2 style={styles.day}>{weatherData.TODAY.day}</h2>
                            <h2 style={styles.dateTime}>{weatherData.TODAY.time}</h2>
                        </div>
                        <h2 style={styles.date}>{weatherData.TODAY.date}</h2>
                        <div style={styles.iconContainer}>
                            <span style={styles.icon}>
                                {weatherData.TODAY.icon}
                            </span>
                            <h1 style={styles.temp}>
                                {weatherData.TODAY.temperature}
                            </h1>
                        </div>
                        <p style={styles.realFeel}>RealFeel: <span style={styles.realFeelValue}>{weatherData.TODAY.realFeel}</span></p>
                        <p style={styles.condition}>
                            {weatherData.TODAY.condition}
                        </p>
                        <div style={styles.forecast}>
                            <p>{weatherData.TODAY.lookingAhead}</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
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
            <div style={styles.buttonContainer}>
                <NavButton isActive={selected === 'TODAY'} onClick={() => handleButtonClick('TODAY')}>TODAY</NavButton>
            </div>
            {renderContent()}
        </div>
    );
};

// Button component
const NavButton = ({ onClick, children, isActive }) => {
    return (
        <button
            onClick={onClick}
            style={{
                ...styles.navButton,
                backgroundColor: isActive ? '#007BFF' : '#e0e0e0',
                color: isActive ? '#fff' : '#007BFF',
            }}
        >
            {children}
        </button>
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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: '20px',
    },
    navButton: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
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
        alignItems: 'center',
    },
    icon: {
        fontSize: '4em',
        marginRight: '10px',
    },
    temp: {
        fontSize: '3em',
        fontWeight: 'bold',
        margin: '0',
    },
    realFeel: {
        fontSize: '1.2em',
        color: '#777',
    },
    realFeelValue: {
        fontWeight: 'bold',
    },
    condition: {
        margin: '10px 0',
        fontSize: '1.2em',
        color: '#333',
    },
    forecast: {
        marginTop: '20px',
        color: '#555',
    },
    loadingText: {
        fontSize: '1.5em',
        color: '#999',
    },
};

export default WeatherForecast;
