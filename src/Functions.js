import { writeHtml } from "./index";

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

   async get_weather() {
      try {
         if (!navigator.geolocation in window) {
            alert("Your browser doesn't support geolocation");
         } else {
            navigator.geolocation.getCurrentPosition(async position => {
               const lat = position.coords.latitude;
               const lon = position.coords.longitude;
               const res = await fetch(
                  `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=58b6f7c78582bffab3936dac99c31b25`
               );
               const data = await res.json();

               // After hours of experimenting, I can't return the value from this function
               // as a result directly making output to the view

               if (data.cod === "404") {
                  writeHtml("I am not getting the weather");
               } else if (data.lat == "") {
                  writeHtml("Please turn on your Location Service");
               } else {
                  writeHtml(
                     `The weather condition in ${data.name} is mostly full of ${
                        data.weather[0].description
                     } at a temperature of ${Math.round(
                        (data.main.temp - 32) / 1.8
                     )} degree Celsius`
                  );
               }
            }, this.showError);
         }
      } catch (error) {
         if (error.message == "Failed to fetch") {
            alert("No internet");
         } else {
            alert(error.message);
         }
      }
   }

   showError(error) {
      switch (error.code) {
         case error.PERMISSION_DENIED:
            alert("Turn on your location");
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

   async get_jokes() {
      try {
         const res = await fetch("https://api.chucknorris.io/jokes/random");
         const data = await res.json();
         return data.value;
      } catch (error) {
         if (error.message == "Failed to fetch") {
            return "No internet";
         } else {
            return error.message;
         }
      }
   }

   async duck_duck_go(query) {
      try {
         const res = await fetch(
            `https://api.duckduckgo.com/?no_redirect=1&no_html=1&skip_disambig=1&q=${query}&format=json`
         );
         const data = await res.json();

         if (data.AbstractText !== "") {
            return data.AbstractText;
         } else if (
            data.RelatedTopics.length >= 3 &&
            typeof data.RelatedTopics[3].Topics !== "undefined" &&
            typeof data.RelatedTopics[3].Topics[0].Result !== "undefined"
         ) {
            let results;
            // some weird thing going on here!
            data.RelatedTopics[3].Topics.forEach(relatedTopic => {
               results += `<ul><li>${relatedTopic.Result}</li></ul>`;
            });

            // something unprofessional
            // I was getting a 'undefined' word in 'results'
            // I just filtered out the text undefined!
            let filteredResults;
            if (results.includes("undefined")) {
               filteredResults = results.replace("undefined", "");
            }
            return `I have several answers for you...<br>${filteredResults}`;
         } else {
            return "Sorry I can't get you.";
         }
      } catch (error) {
         if (error.message == "Failed to fetch") {
            return "No internet";
         } else {
            return error.message;
         }
      }
   }
}
const fun = new Functions();

export default fun;
