import React, { useState } from 'react';
import WeatherDisplay from './Components/WeatherDisplay';
import Search from './Components/Search';
import Button from './Components/Button';
import axios from 'axios';


const App = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to backend to fetch weather data for the input city
      const response = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeatherData(response.data);
      setError('');
      // Handle weather data response as needed
    } catch (error) {
      console.error(error);
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div>
      <Search city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {weatherData && city && <WeatherDisplay weatherData={weatherData} city={city} />}
    </div>
  );
};


export default App;
