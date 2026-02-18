import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./Weather.css";

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

  const HOT_URL =
    "https://media.istockphoto.com/id/2163514272/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=612x612&w=0&k=20&c=jzI-cg0QeY_eRvFc3IUpgvPuguuK-fhiBkMz0YLVGNg=";
  const COLD_URL =
    "https://st.depositphotos.com/5665934/51402/v/450/depositphotos_514023624-stock-illustration-girl-kid-shivering-with-cold.jpg";
  const RAIN_URL =
    "https://www.goodlightscraps.com/content/rainy-season-scraps/rain-54.gif";

  // 🌈 decide full page background
  const backgroundImage =
    weatherInfo.humidity > 80
      ? RAIN_URL
      : weatherInfo.temp > 15
      ? HOT_URL
      : COLD_URL;

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div
    id="weather-screen"
    className="weather-app"
    style={{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
    }}
  >
      <h2>Weather App by Karan</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
