import { getFetch } from "../helper";

function showPositionError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Turn your location service on");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

export default async function getWeather(botSpeak) {
  const geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weather, showPositionError, geo_options);
  } else {
    botSpeak.setText("Geolocation is not supported by your device/browser");
  }

  async function weather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const data = await getFetch(
      `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=58b6f7c78582bffab3936dac99c31b25`
    );

    if (data.cod === "404") {
      botSpeak.setText("Weather not found");
    } else if (data.lat == "") {
      botSpeak.setText("Unable to find your Location");
    } else {
      botSpeak.setText(
        `The weather condition in ${data.name} is mostly ${
          data.weather[0].description
        } at a temperature of ${Math.round((data.main.temp - 32) / 1.8)} Degree Celsius`
      );
    }
  }
}
