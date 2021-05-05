import { getFetch } from "../../lib/utils";
import { openWeatherMap as owm } from "../config.json";
import getPosition from "./getPosition";
import template from "./template";

export async function getWeather() {
  const { lat, lon } = await getPosition();

  const data = await getFetch(
    `${owm.base_url}?units=imperial&lat=${lat}&lon=${lon}&APPID=${owm.api_key}`
  );

  if (data.cod === "404") {
    return "Weather not found";
  }

  if (data.lat == "") {
    return "Unable to find your Location";
  }

  return template(data);
}
