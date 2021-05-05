export default function template(data) {
  return `
      <h2 style='margin-bottom: 0; font-weight: normal'>
        ${data.name}
      </h2>
      <h1 style='font-size: 36px'>
        ${Math.floor((data.main.temp - 32) / 1.8)}<sup>°C</sup>
      </h1>
      <p>
        ${data.weather[0].main}
      </p>
      <p>
        Wind: ${Math.floor(data.wind.speed)} km/h
      </p>
      <p>
        Humidity: ${data.main.humidity}%
      </p>
  `;
}
