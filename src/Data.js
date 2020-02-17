import { getFetch } from "./helper";

class Data {
  constructor(output) {
    this.output = output;
    this.date = new Date();
    this.time = new Date(Date.now());
  }

  getTime() {
    return `The Time is ${this.time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  }

  getMonthName() {
    const monthNumber = this.date.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentMonthName = monthNames[monthNumber];

    return currentMonthName;
  }

  getDate() {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    this.date.setDate(this.date.getDate());
    let date =
      "Today is " +
      dayNames[this.date.getDay()] +
      ", " +
      this.date.getDate() +
      " " +
      this.getMonthName() +
      ", " +
      this.date.getFullYear();

    return date;
  }

  showPositionError(error) {
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

  async getWeather() {
    const setHtml = html => {
      return (this.output.innerHTML = html);
    };

    const geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        weather,
        this.showPositionError,
        geo_options
      );
    } else {
      setHtml("Geolocation is not supported by your browser");
    }

    async function weather(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const data = await getFetch(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=58b6f7c78582bffab3936dac99c31b25`
      );

      if (data.cod === "404") {
        setHtml("Weather not found");
      } else if (data.lat == "") {
        setHtml("Unable to find your Location");
      } else {
        setHtml(
          `The weather condition in ${data.name} is mostly full of ${
            data.weather[0].description
          } at a temperature of ${Math.round(
            (data.main.temp - 32) / 1.8
          )} degree Celsius`
        );
      }
    }
  }

  async getJokes() {
    const data = await getFetch("https://api.chucknorris.io/jokes/random");
    return await data.value;
  }

  async duckDuckGo(query) {
    const data = await getFetch(
      `https://api.duckduckgo.com/?no_redirect=1&no_html=1&skip_disambig=1&q=${query}&format=json`
    );

    if (data.AbstractText !== "") {
      return data.AbstractText;
    } else if (
      data.RelatedTopics.length >= 3 &&
      typeof data.RelatedTopics[3].Topics !== undefined &&
      typeof data.RelatedTopics[3].Topics[0].Result !== undefined
    ) {
      let results;
      // some weird thing going on here!
      data.RelatedTopics[3].Topics.forEach(relatedTopic => {
        results += `<ul><li>${relatedTopic.Result}</li></ul>`;
      });

      // some more bullshit...
      // I was getting a 'undefined' in the above 'results'
      // I just filtered out the text undefined!
      let filteredResults;
      if (await results.includes("undefined")) {
        filteredResults = results.replace("undefined", "");
      }
      return `I have several answers for you...<br>${filteredResults}`;
    } else {
      return "Sorry I can't get you.";
    }
  }
}

export default Data;
