import { getFetch, handleError } from "../lib/utils";
import { openWeatherMap as owm } from "./config.json";

export async function getWeather() {
  const { lat, lon } = await getPosition();

  let results;

  const data = await getFetch(
    `${owm.base_url}?units=imperial&lat=${lat}&lon=${lon}&APPID=${owm.api_key}`
  );

  if (data.cod === "404") {
    return (results = "Weather not found");
  }

  if (data.lat == "") {
    return (results = "Unable to find your Location");
  }

  results = template(data);

  return results;
}

function template(data) {
  return `
    <h2 style='margin-bottom: 0; font-weight: normal'>${data.name}</h2>
    <h1 style='font-size: 36px'>
       ${Math.floor((data.main.temp - 32) / 1.8)}<sup>°C</sup>
    </h1>
    <p>Feels Like: ${data.weather[0].main}</p>
    <p>Wind: ${Math.floor(data.wind.speed)} km/h</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}

function getPosition() {
  return new Promise((resolve, reject) => {
    let results;

    const geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
    };

    if (!navigator.geolocation) {
      return (results = "Geolocation is not supported by your device/browser");
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        results = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        resolve(results);
      },
      handle_position_error,
      geo_options
    );
  });
}

function handle_position_error(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return handleError("Turn your location service on");

    case error.POSITION_UNAVAILABLE:
      return handleError("Location information is unavailable.");

    case error.TIMEOUT:
      return handleError("The request to get location timed out.");

    case error.UNKNOWN_ERROR:
      return handleError("An unknown error occurred.");

    default:
      return handleError("Error Not Known! 👽");
  }
}
