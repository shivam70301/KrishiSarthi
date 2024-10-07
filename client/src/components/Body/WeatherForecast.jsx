import React, { useState } from 'react';

// Weather icons (using Unicode emojis for simplicity)
const icons = {
    sunny: '☀️',
    partlySunny: '⛅',
    cloudy: '☁️',
    rainy: '🌧️',
    thunderstorm: '⛈️',
};

// Mock weather data for today, daily, weekly, and monthly forecasts
const weatherData = {
    TODAY: {
        day: "Saturday",
        date: "October 5, 2024",
        time: "12:58 PM",
        temperature: '33°C',
        realFeel: '40°C',
        realFeelShade: '37°C',
        condition: 'Partly Cloudy',
        lookingAhead: 'Mostly sunny throughout the day.',
        icon: icons.partlySunny,
    },
    DAILY: [
        { day: 'Monday', temp: '22°C', condition: 'Sunny', icon: icons.sunny },
        { day: 'Tuesday', temp: '19°C', condition: 'Partly Cloudy', icon: icons.partlySunny },
        { day: 'Wednesday', temp: '21°C', condition: 'Rainy', icon: icons.rainy },
        { day: 'Thursday', temp: '18°C', condition: 'Cloudy', icon: icons.cloudy },
        { day: 'Friday', temp: '20°C', condition: 'Sunny', icon: icons.sunny },
    ],
    WEEKLY: [
        { week: 'Week 1', avgTemp: '20°C', condition: 'Sunny', icon: icons.sunny },
        { week: 'Week 2', avgTemp: '22°C', condition: 'Cloudy', icon: icons.cloudy },
        { week: 'Week 3', avgTemp: '19°C', condition: 'Rainy', icon: icons.rainy },
        { week: 'Week 4', avgTemp: '21°C', condition: 'Partly Cloudy', icon: icons.partlySunny },
    ],
    MONTHLY: [
        { month: 'January', avgTemp: '20°C', condition: 'Sunny', icon: icons.sunny },
        { month: 'February', avgTemp: '22°C', condition: 'Cloudy', icon: icons.cloudy },
        { month: 'March', avgTemp: '19°C', condition: 'Rainy', icon: icons.rainy },
        { month: 'April', avgTemp: '21°C', condition: 'Partly Cloudy', icon: icons.partlySunny },
    ],
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
                        <div style={selected === 'TODAY' ? styles.iconTempSmall : styles.iconContainer}>
                            <span style={selected === 'TODAY' ? styles.iconSmall : styles.icon}>
                                {weatherData.TODAY.icon}
                            </span>
                            <h1 style={selected === 'TODAY' ? styles.tempSmall : styles.temp}>
                                {weatherData.TODAY.temperature}
                            </h1>
                        </div>
                        <p style={styles.realFeel}>RealFeel: <span style={styles.realFeelValue}>{weatherData.TODAY.realFeel}</span></p>
                        <p style={selected === 'TODAY' ? styles.conditionNoMargin : styles.condition}>
                            {weatherData.TODAY.condition}
                        </p>
                        <div style={selected === 'TODAY' ? styles.forecastNoMargin : styles.forecast}>
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
            case 'WEEKLY':
                return (
                    <div style={styles.forecastSection}>
                        {weatherData.WEEKLY.map((week, index) => (
                            <div key={index} style={styles.forecastCard}>
                                <h4>{week.week}</h4>
                                <span style={styles.icon}>{week.icon}</span>
                                <p>Average Temp: {week.avgTemp}</p>
                                <p>{week.condition}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'MONTHLY':
                return (
                    <div style={styles.forecastSection}>
                        {weatherData.MONTHLY.map((month, index) => (
                            <div key={index} style={styles.forecastCard}>
                                <h4>{month.month}</h4>
                                <span style={styles.icon}>{month.icon}</span>
                                <p>Average Temp: {month.avgTemp}</p>
                                <p>{month.condition}</p>
                            </div>
                        ))}
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
                <NavButton isActive={selected === 'WEEKLY'} onClick={() => handleButtonClick('WEEKLY')}>WEEKLY</NavButton>
                <NavButton isActive={selected === 'MONTHLY'} onClick={() => handleButtonClick('MONTHLY')}>MONTHLY</NavButton>
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        padding: '2%',
        textAlign: 'center',
        background: 'linear-gradient(to right, #56ccf2, #2f80ed)',
        minHeight: '60vh',
        fontFamily: 'sans-serif, Arial',
        marginLeft: '8%',
        marginBottom:'2%',
        marginRight: '8%',
        marginTop: '6.5%',
    },
    heading: {
        fontSize: '2.5em',
        color: '#fff',
        marginBottom: '15px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        flexWrap: 'wrap',
    },
    navButton: {
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s, color 0.3s',
    },
    weatherCard: {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '15px',
        margin: '15px auto',
        width: '70%',
        maxWidth: '300px',
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
        fontSize: '0.9em',
        color: '#888',
    },
    date: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        margin: '5px 0',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: '7em',  //for all icons 
        marginBottom: '0px',
        marginTop: '0px',
    },
    temp: {
        fontSize: '3em',
        margin: '5px 0',
        color: '#333',
    },
    iconTempSmall: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSmall: {
        fontSize: '2.5em',
        marginBottom: '5px',
    },
    tempSmall: {
        fontSize: '2em',
        margin: '5px 0',
    },
    realFeel: {
        fontSize: '0.8em',
        fontStyle: 'italic',
        color: '#888',
    },
    condition: {
        fontSize: '1.8em',
        margin: '5px 0',
        color: 'black',
    },
    conditionNoMargin: {
        fontSize: '1.8em',
        margin: '0', // No margin for TODAY button
        padding: '0', // No padding for TODAY button
        color: 'black',
    },
    forecast: {
        marginTop: '10px',
        fontStyle: 'italic',
        color: '#333',
    },
    forecastNoMargin: {
        marginTop: '0', // No margin for TODAY button
        padding: '0', // No padding for TODAY button
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
        padding: '10px',
        borderRadius: '10px',
        width: '200px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
        margin: '5px',
        cursor: 'pointer',
        minHeight: '296px',
        maxHeight: '400px',
        fontWeight: 'bold',     //  tex bold
    fontSize: '1.1em'  
    },
};

export default WeatherForecast;
