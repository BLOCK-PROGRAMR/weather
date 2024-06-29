import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = '1b221c52d58c14010c7ef972370d2c89'; // Replace with your OpenWeatherMap API key

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded-md mr-2"
        />
        <button
          onClick={getWeather}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>
      {weather && (
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
