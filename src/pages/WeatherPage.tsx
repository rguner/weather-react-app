import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../services/weatherService';
import { WeatherData } from '../types/weather';

const WeatherPage: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleFetchWeather = async () => {
        if (!city) {
            setError('Please enter a city name');
            return;
        }
        setError('');
        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
        } catch (err) {
            setError('Failed to fetch weather data');
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
            />
            <button onClick={handleFetchWeather}>Get Weather</button>
            {error && <p>{error}</p>}
            {weatherData && (
                <WeatherCard
                    city={weatherData.city}
                    temperature={weatherData.temperature}
                    conditions={weatherData.conditions}
                />
            )}
        </div>
    );
};

export default WeatherPage;