import React, { useState } from 'react';

// Weather icons (using Unicode emojis for simplicity)
const icons = {
    sunny: '☀️',
    partlySunny: '⛅',
    cloudy: '☁️',
    rainy: '🌧️',
    thunderstorm: '⛈️',
};

// Mock weather data for today, daily, monthly, and air quality
const weatherData = {
    TODAY: {
        day: "Saturday",
        date: "October 5, 2024",
        time: "12:58 PM",
        temperature: '33°C',
        realFeel: '40°C',
        realFeelShade: '37°C',
        condition: 'Partly sunny',
        lookingAhead: 'A thunderstorm late Sunday night',
        icon: icons.partlySunny,
    },
    DAILY: [
        { day: 'Monday', temp: '22°C', condition: 'Sunny', icon: icons.sunny },
        { day: 'Tuesday', temp: '19°C', condition: 'Partly Cloudy', icon: icons.partlySunny },
        { day: 'Wednesday', temp: '21°C', condition: 'Rainy', icon: icons.rainy },
        { day: 'Thursday', temp: '18°C', condition: 'Cloudy', icon: icons.cloudy },
        { day: 'Friday', temp: '20°C', condition: 'Sunny', icon: icons.sunny },
    ],
    MONTHLY: [
        { week: 'Week 1', avgTemp: '20°C', condition: 'Sunny', icon: icons.sunny },
        { week: 'Week 2', avgTemp: '22°C', condition: 'Cloudy', icon: icons.cloudy },
        { week: 'Week 3', avgTemp: '19°C', condition: 'Rainy', icon: icons.rainy },
        { week: 'Week 4', avgTemp: '21°C', condition: 'Partly Cloudy', icon: icons.partlySunny },
    ],
    AIR_QUALITY: {
        aqi: 'Poor',
        pm25: '55 µg/m³',
        pm10: '90 µg/m³',
    },
};

const WeatherForecast = () => {
    const [selected, setSelected] = useState('TODAY');

    const handleButtonClick = (view) => {
        setSelected(view);
    };

    const renderContent = () => {
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
                            <span style={styles.icon}>{weatherData.TODAY.icon}</span>
                            <h1 style={styles.temp}>{weatherData.TODAY.temperature}</h1>
                        </div>
                        <p style={styles.realFeel}>RealFeel: <span style={styles.realFeelValue}>{weatherData.TODAY.realFeel}</span></p>
                        <p style={styles.condition}>{weatherData.TODAY.condition}</p>
                        <div style={styles.forecast}>
                            <p>{weatherData.TODAY.lookingAhead}</p>
                        </div>
                    </div>
                );
            case 'DAILY':
                return (
                    <div style={styles.forecastSection}>
                        {weatherData.DAILY.slice(0, 3).map((day, index) => (
                            <div key={index} style={styles.forecastCard}>
                                <h4>{day.day}</h4>
                                <span style={styles.icon}>{day.icon}</span>
                                <p>Temp: {day.temp}</p>
                                <p>{day.condition}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'MONTHLY':
                return (
                    <div style={styles.forecastSection}>
                        {weatherData.MONTHLY.map((week, index) => (
                            <div key={index} style={styles.forecastCard}>
                                <h4>{week.week}</h4>
                                <span style={styles.icon}>{week.icon}</span>
                                <p>Average Temp: {week.avgTemp}</p>
                                <p>{week.condition}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'AIR QUALITY':
                return (
                    <div style={styles.airQuality}>
                        <p>AQI: {weatherData.AIR_QUALITY.aqi}</p>
                        <p>PM2.5: {weatherData.AIR_QUALITY.pm25}</p>
                        <p>PM10: {weatherData.AIR_QUALITY.pm10}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={styles.appContainer}>
            <h1 style={styles.heading}>Weather Forecast</h1>
            <div style={styles.buttonContainer}>
                <NavButton isActive={selected === 'TODAY'} onClick={() => handleButtonClick('TODAY')}>TODAY</NavButton>
                <NavButton isActive={selected === 'DAILY'} onClick={() => handleButtonClick('DAILY')}>DAILY</NavButton>
                <NavButton isActive={selected === 'MONTHLY'} onClick={() => handleButtonClick('MONTHLY')}>MONTHLY</NavButton>
                <NavButton isActive={selected === 'AIR QUALITY'} onClick={() => handleButtonClick('AIR QUALITY')}>AIR QUALITY</NavButton>
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
                backgroundColor: isActive ? '#4a90e2' : '#e6f0dc',
                color: isActive ? '#fff' : '#4a90e2',
            }}
        >
            {children}
        </button>
    );
};

// Styles
const styles = {
    appContainer: {
        padding: '30px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #56ccf2, #2f80ed)',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '3em',
        color: '#fff',
        marginBottom: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    navButton: {
        padding: '15px 30px',
        margin: '0 5px',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s, color 0.3s',
    },
    weatherCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '15px',
        margin: '20px auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        color: '#333',
        transition: 'transform 0.3s',
        textAlign: 'center',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    day: {
        fontSize: '1.5em',
        color: '#4a90e2',
    },
    dateTime: {
        fontSize: '1em',
        color: '#888',
    },
    date: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        margin: '10px 0',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: '5em',
        marginBottom: '10px',
        transition: 'transform 0.3s',
    },
    temp: {
        fontSize: '4em',
        margin: '10px 0',
        color: '#333',
    },
    realFeel: {
        fontSize: '0.8em', // Decrease font size
        fontStyle: 'italic', // Make it italic
        color: '#888',
    },
    condition: {
        fontSize: '2em',
        margin: '5px 0',
        color: 'black',
    },
    forecast: {
        marginTop: '20px',
        fontStyle: 'italic',
        color: '#333',
    },
    forecastSection: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    forecastCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
        margin: '10px',
        cursor: 'pointer',
    },
    forecastCardHover: {
        transform: 'scale(1.05)',
    },
    airQuality: {
        fontSize: '1.5em',
        color: '#fff',
    },
};

// Export the WeatherForecast component
export default WeatherForecast;
