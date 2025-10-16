import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Jodhpur",
    country: "IN",
    feels_like: 29.86,
    humidity: 17,
    sunrise: "Thursday 16 Oct, 2025, 06:37 am",
    sunset: "Thursday 16 Oct, 2025, 06:09 pm",
    temp: 32.01,
    temp_max: 32.01,
    temp_min: 32.01,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Karan</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
