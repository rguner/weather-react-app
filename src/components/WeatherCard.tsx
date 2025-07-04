import React from 'react';

interface WeatherCardProps {
    city: string;
    temperature: number;
    conditions: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, conditions }) => {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Conditions: {conditions}</p>
        </div>
    );
};

export default WeatherCard;