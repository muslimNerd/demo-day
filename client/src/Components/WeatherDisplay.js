import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ weatherData, city}) => {
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  // Render weather data
  return (
    <div className='weatherp'>
      <h2>Weather for {city}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      {/* Render other weather data as needed */}
    </div>
  );
};

export default WeatherDisplay;
