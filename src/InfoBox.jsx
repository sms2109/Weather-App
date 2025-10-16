import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}) {
  
  const HOT_URL = "https://img.freepik.com/free-vector/flat-summer-heat-illustration-with-man-sweating-sun_23-2149433187.jpg";
  const COLD_URL = "https://st.depositphotos.com/5665934/51402/v/450/depositphotos_514023624-stock-illustration-girl-kid-shivering-with-cold.jpg";
  const RAIN_URL = "https://i.pinimg.com/474x/ee/df/04/eedf04fbc5a679a96b7ed5e0c8ba364a.jpg";

  return (
    <div className="InfoBox">
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} ({info.country}) {info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnySharpIcon/>
                : <SevereColdIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Max. Temp. = {info.temp_max}&deg;C</p>
              <p>Min. Temp. = {info.temp_min}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feels_like}&deg;C
              </p>
              <p>🌅 Sunrise = {info.sunrise}</p>
              <p>🌇 Sunset = {info.sunset}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
