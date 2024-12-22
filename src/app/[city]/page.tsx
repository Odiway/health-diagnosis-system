'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface AirQualityResponse {
  list: { main: { aqi: number } }[];
}

const AIR_QUALITY_THRESHOLD = 3; // Unhealthy threshold

export default function CityAirQuality() {
  const params = useParams();
  const { city } = params;

  const [aqi, setAqi] = useState<number | null>(null);
  const [warning, setWarning] = useState('');

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}' +
            `q=${city}&appid=YOUR_API_KEY`
        );

        if (!response.ok) throw new Error('Failed to fetch air quality data');

        const data: AirQualityResponse = await response.json();
        const airQualityIndex = data.list[0].main.aqi;

        setAqi(airQualityIndex);

        if (airQualityIndex >= AIR_QUALITY_THRESHOLD) {
          setWarning('Dikkat! Hava kirliliği çok yüksek, lütfen dışarı çıkmayın.');
        } else {
          setWarning('');
        }
      } catch (error) {
        console.error('Error fetching AQI:', error);
      }
    };

    if (city) fetchAirQuality();
  }, [city]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        {city.toUpperCase()} Hava Kalitesi
      </h1>

      {aqi !== null ? (
        <p className="text-lg text-center">
          Hava Kalite Endeksi (AQI): <strong>{aqi}</strong>
        </p>
      ) : (
        <p className="text-center">Hava kalitesi verisi yükleniyor...</p>
      )}

      {warning && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded-md text-red-600 text-center font-medium">
          {warning}
        </div>
      )}
    </div>
  );
}
