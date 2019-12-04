import {
   about_button,
   about_dialog,
   input_field,
   output,
   close_button,
   mic,
   submit
} from "./elements";
import fun from "./function";

HTMLElement.prototype.show = function() {
   this.style.visibility = "visible";
};

HTMLElement.prototype.hide = function() {
   this.style.visibility = "hidden";
};

about_button.onclick = () => about_dialog.show();

close_button.onclick = () => about_dialog.hide();

// Enter key action
input_field.addEventListener("keypress", function(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      submit.click();
      input_field.value = "";
   }
});

// Clear text field on focus
input_field.onfocus = () => (input_field.value = "");

export function write_output(data) {
   output.textContent = data;
}

function speak(text = output.textContent) {
   if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      speechSynthesis.speak(msg);
   } else {
      console.log("SpeechSynthesis not supported in your browser");
   }
}

function listen() {
   window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;

   const recognition = new SpeechRecognition();
   recognition.start();
   recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;

      if (event.results[0].isFinal) {
         input_field.value = transcript;
         bot();
      }
   };
}

function duck_duck_go(query) {
   fetch(
      `https://api.duckduckgo.com/?no_redirect=1&no_html=1&skip_disambig=1&q=${query}&format=json`
   )
      .then(response => response.json())
      .then(data => {
         if (data.AbstractText !== "") {
            write_output(data.AbstractText);
         } else if (data.AbstractText === "" && data.RelatedTopics !== []) {
            write_output(
               `I have several answers for you...
               ${data.RelatedTopics[3].Topics[1].Text}`
            );
         } else {
            write_output("Sorry I have nothing to say");
         }
      })
      .catch(error => alert(error));
}

function bot() {
   let inputValue = input_field.value.toLowerCase();

   if (inputValue.includes("hi")) {
      write_output("Hi, What can I do for you");
   } else if (inputValue.includes("you")) {
      write_output("I am doing great. Thanks for asking");
   } else if (inputValue.includes("bored")) {
      ("I can tell you a joke or you can play a game");
   } else if (inputValue.includes("thanks")) {
      write_output("Your are Welcome");
   } else if (inputValue.includes("bye")) {
      write_output("Goode Bye");
   } else if (inputValue.includes("time")) {
      write_output(fun.getTime());
   } else if (inputValue.includes("date")) {
      write_output(fun.getDate());
   } else if (inputValue.includes("month")) {
      write_output(fun.getMonthName());
   } else if (inputValue.includes("weather")) {
      fun.get_weather();
   } else if (inputValue.includes("joke")) {
      fun.get_jokes();
   } else {
      duck_duck_go(inputValue);
   }

   if (output.textContent !== "Welcome") {
      speak();
   }
}

mic.onclick = () => listen();

submit.onclick = () => {
   if (input_field.value !== "") {
      bot();
   }
};

// Pre Suggestion
const press = [
   "Time",
   "Date",
   "Weather",
   "Tell me a joke",
   "What is bot",
   "When did first world war happen",
   "Ecosia"
];

const press_container = document.querySelector("#quick-tiles");

press.forEach(array_element => {
   const tile = document.createElement("span");
   tile.className = "tile";
   tile.innerHTML = array_element;
   press_container.appendChild(tile);
});

const all_pres = document.querySelectorAll(".tile");
let tiles_inner_text;

all_pres.forEach(tile => {
   tile.addEventListener("click", event => {
      tiles_inner_text = event.target.innerText;
      input_field.value = tiles_inner_text;
      submit.click();
   });
});

speak();
