// src/app/weather/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { WiDaySunny, WiWindy, WiHumidity } from 'react-icons/wi'; // Import weather icons
import { FaSmog } from 'react-icons/fa'; // Import air quality icon

const WeatherPage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = '7fff8aec40790216d52edecfe28097ce'; // Replace with your OpenWeatherMap API key
  const CITY = 'Istanbul';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
  const AIR_QUALITY_URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=41.0082&lon=28.9784&appid=${API_KEY}`; // Coordinates for Istanbul

  useEffect(() => { 
    const fetchWeather = async () => {
      try {
        const weatherResponse = await fetch(URL);
        if (!weatherResponse.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        // Fetch air quality data
        const airQualityResponse = await fetch(AIR_QUALITY_URL);
        if (!airQualityResponse.ok) {
          throw new Error('Failed to fetch air quality data');
        }
        const airQualityData = await airQualityResponse.json();
        setAirQuality(airQualityData);
      } catch (err) {
        setError(W.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [URL, AIR_QUALITY_URL]);

  const getAirQualityAdvice = (aqi: number) => {
    if (aqi === 1) {
      return "Air quality is good. Enjoy your day outside!";
    } else if (aqi === 2) {
      return "Air quality is moderate. It's a good day for outdoor activities.";
    } else if (aqi === 3) {
      return "Air quality is unhealthy for sensitive groups. Limit prolonged outdoor exertion.";
    } else if (aqi === 4) {
      return "Air quality is unhealthy. Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
    } else if (aqi === 5) {
      return "Air quality is very unhealthy. Avoid outdoor activities and take precautions.";
    } else {
      return "Air quality data is not available.";
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  const aqi = airQuality?.list[0]?.main?.aqi;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-white mb-4">Weather in {CITY}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-3xl text-center mb-2">{weather?.weather[0]?.description}</h2>
        <p className="text-center text-xl flex items-center justify-center">
          <WiDaySunny className="mr-2 text-yellow-500" size={40} />
          Temperature: {weather?.main?.temp} °C
        </p>
        <p className="text-center text-xl flex items-center justify-center">
          <WiHumidity className="mr-2 text -blue-500" size={40} />
          Humidity: {weather?.main?.humidity}%
        </p>
        <p className="text-center text-xl flex items-center justify-center">
          <WiWindy className="mr-2 text-gray-500" size={40} />
          Wind Speed: {weather?.wind?.speed} m/s
        </p>
      </div>

      {/* Air Quality Section */}
      <h2 className="text-4xl font-semibold text-center text-white mt-6">Air Quality in {CITY}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <p className="text-center text-xl">Air Quality Index (AQI): {aqi}</p>
        <p className="text-center text-xl">Main Pollutant: {airQuality?.list[0]?.components?.pm2_5 ? 'PM2.5' : 'N/A'}</p>
        <p className="text-center text-xl">PM2.5: {airQuality?.list[0]?.components?.pm2_5} µg/m³</p>
        <p className="text-center text-xl">PM10: {airQuality?.list[0]?.components?.pm10} µg/m³</p>
        <p className="text-center text-xl">NO2: {airQuality?.list[0]?.components?.no2} µg/m³</p>
        <p className="text-center text-xl">SO2: {airQuality?.list[0]?.components?.so2} µg/m³</p>
        <p className="text-center text-xl">O3: {airQuality?.list[0]?.components?.o3} µg/m³</p>

        {/* Air Quality Advice */}
        <div className="mt-4 text-center">
          <h3 className="text-3xl font-semibold">Advice:</h3>
          <p className="text-xl">{getAirQualityAdvice(aqi)}</p>
          <FaSmog className="mx-auto text-gray-600" size={50} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;