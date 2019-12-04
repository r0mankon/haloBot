import { write_output } from "./index";

class Functions {
   constructor() {
      this.date = new Date();
      this.time = new Date(Date.now());
   }

   getTime() {
      return `The Time is ${this.time.toLocaleString("en-US", {
         hour: "numeric",
         minute: "numeric",
         hour12: true
      })}`;
   }

   getMonthName() {
      let monthNumber = this.date.getMonth();
      let monthNames = [
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
         "December"
      ];

      let currentMonthName = monthNames[monthNumber];

      return currentMonthName;
   }

   getDate() {
      let dayNames = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
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

   get_weather() {
      if (!navigator.geolocation) {
         alert("Your browser does not support geolocation api.");
      } else {
         const position = navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(
               `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=58b6f7c78582bffab3936dac99c31b25`
            )
               .then(function(response) {
                  return response.json();
               })
               .then(function(json) {
                  if (json.cod === "404") {
                     return "I am not getting weather";
                  } else if (json.lat == "") {
                     write_output("Please turn on your GPS");
                  } else {
                     write_output(
                        `The weather condition in ${
                           json.name
                        } is mostly full of ${
                           json.weather[0].description
                        } at a temperature of ${Math.round(
                           (json.main.temp - 32) / 1.8
                        )} degree Celsius`
                     );
                  }
               })
               .catch(error => write_output(error));
         }, this.showError);
      }
   }

   showError(error) {
      switch (error.code) {
         case error.PERMISSION_DENIED:
            alert("Please enable Geolocation.");
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

   get_jokes() {
      fetch("https://api.chucknorris.io/jokes/random")
         .then(res => res.json())
         .then(json => write_output(json.value))
         .catch(error => console.log(error));
   }
}

const fun = new Functions();

export default fun;
