import {
   about_button,
   about_dialog,
   input_field,
   output_element,
   close_button,
   mic,
   submit
} from "./elements";
import fun from "./Functions";

HTMLElement.prototype.show = function() {
   this.style.visibility = "visible";
};

HTMLElement.prototype.hide = function() {
   this.style.visibility = "hidden";
};

// Unexpectedly exports for Function.js
export function writeHtml(data) {
   output_element.innerHTML = data;
}

function greet() {
   const greetings = [
      "Hi, What can I do for you?",
      "Welcome Back, How are you doing?",
      "What's up?",
      "How can I help you, Sir?"
   ];
   return greetings[Math.floor(Math.random() * greetings.length)];
}

function text_to_speech(text = output_element.textContent) {
   if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      speechSynthesis.speak(msg);
   } else {
      alert("SpeechSynthesis not supported in your browser");
   }
}

function speech_to_text() {
   const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

   const recognition = new SpeechRecognition();
   recognition.start();
   recognition.onstart = () => writeHtml("Listening...");
   recognition.onresult = event => {
      let current = event.resultIndex;
      const transcript = event.results[current][0].transcript;

      if (event.results[0].isFinal) {
         return transcript;
      }
   };
}

function justifyText() {
   // childish hard coded value cause I've no the other solution
   if (output_element.innerText.length > 100) {
      output_element.style.textAlign = "justify";
   } else {
      output_element.style.textAlign = "center";
   }
}

function bot() {
   const inputValue = input_field.value.toLowerCase();
   // using arrow function instead of normal function for whatever reason
   const includes = key => {
      return inputValue.includes(key);
   };

   // childish logic started!!!

   if (includes("hi")) {
      writeHtml("Hi, What can I do for you");
   } else if (includes("you")) {
      writeHtml("I am doing great. Thanks for asking");
   } else if (includes("bored")) {
      ("What can I do for you?");
   } else if (includes("thanks")) {
      writeHtml("Your are Welcome");
   } else if (includes("bye")) {
      writeHtml("Goode Bye");
   } else if (includes("time")) {
      writeHtml(fun.getTime());
   } else if (includes("date")) {
      writeHtml(fun.getDate());
   } else if (includes("month")) {
      writeHtml(fun.getMonthName());
   } else if (includes("weather")) {
      fun.get_weather(); // Looks unexpected
   } else if (includes("joke")) {
      fun.get_jokes().then(res => writeHtml(res));
   } else {
      fun.duck_duck_go(inputValue).then(res => writeHtml(res));
   }

   text_to_speech();
   justifyText();
}

function main() {
   about_button.onclick = () => about_dialog.show();
   close_button.onclick = () => about_dialog.hide();

   // Enter key press to submit
   input_field.addEventListener("keypress", event => {
      if (event.keyCode === 13) {
         event.preventDefault();
         submit.click();
         // clear tex field
         input_field.value = "";
      }
   });

   // Clear text field on focus
   input_field.onfocus = () => (input_field.value = "");

   writeHtml(greet());

   mic.onclick = () => {
      input_field.value = speech_to_text();
      bot();
   };

   submit.onclick = () => {
      if (input_field.value !== "") {
         bot();
      }
   };

   // Some Command shortcut buttons

   const shortcut_text_array = [
      "Time",
      "Date",
      "Weather",
      "Tell me a joke",
      "What is bot",
      "Ecosia",
      "Computer Science"
   ];

   shortcut_text_array.forEach(text => {
      const shortcut_btn = document.createElement("span");
      shortcut_btn.className = "shortcut-btn";
      shortcut_btn.innerHTML = text;
      document.querySelector(".container-sc-btn").appendChild(shortcut_btn);
   });

   const all_shortcut_btn = document.querySelectorAll(".shortcut-btn");
   let btn_inner_text;

   // adding event listener to all buttons
   all_shortcut_btn.forEach(button => {
      button.addEventListener("click", event => {
         btn_inner_text = event.target.innerText;
         input_field.value = btn_inner_text;
         submit.click();
      });
   });

   text_to_speech();
}

main();
