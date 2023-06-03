import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=b14481c7031b04ae859c4953915683e1&query=${location}`
      );

      const { temperature, humidity } = response.data.current;
      setTemperature(temperature);
      setHumidity(humidity);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="app-container">
    <div className="App">
    <h1>Weather App</h1>
    <p>Use this site to get the weather!</p>
    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={handleLocationChange}
    />
    <button className="search-button" onClick={fetchWeatherData}>Search</button>
    {temperature !== null && (
      <div>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
      </div>
    )}
  </div>
  </div>

  );
}

export default App;
