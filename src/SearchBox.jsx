import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "http://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "05fedc8625533e8d5b0005d4d2622a44";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      function convertToIST(timestamp) {
        // Convert seconds to milliseconds
        const date = new Date(timestamp * 1000);
        const options = {
          weekday: "long", // Monday, Tuesday, ...
          day: "2-digit", // 01–31
          month: "short", // Jan, Feb, Mar, ...
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        };
        return date.toLocaleString("en-IN", options);
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        country: jsonResponse.sys.country,
        sunrise: convertToIST(jsonResponse.sys.sunrise),
        sunset: convertToIST(jsonResponse.sys.sunset),
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (evt) => {
    // console.log(evt.target.value);
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      {/* <h3>Search for the Weather</h3> */}
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          value={city}
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists in API</p>}
      </form>
    </div>
  );
}
