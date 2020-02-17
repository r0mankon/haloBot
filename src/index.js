import {
  $about_button,
  $about_dialog,
  $input,
  $output_element,
  $close_button,
  $mic,
  $submit,
} from "./elements";
import { reveal, hide, createElement } from "./helper";
import Data from "./Data";

const data = new Data($output_element);

// addEventLister wrapper
HTMLElement.prototype.on = function(event, callback) {
  return this.addEventListener(event, callback);
};

const dom = {
  setHtml(value) {
    $output_element.innerHTML = value;
  },
  setText(value) {
    $output_element.innerText = value;
  },
};

function greet() {
  const greetings = [
    "Hi, What can I do for you?",
    "Welcome Back, How are you doing?",
    "What's up?",
    "How can I help you, Sir?",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function textToSpeech(text = $output_element.textContent) {
  if ("speechSynthesis" in window) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.cancel(); // stop any previous utterance

    if (text.includes("Loading...")) {
      synth.cancel();
    } else {
      synth.speak(utterance); // then speak the current utterance
    }
  } else {
    alert("SpeechSynthesis is not supported by your browser");
  }
}

// BUG: speechrecognition functionality not working most probably sync/async mater
// TODO: fix this bug
async function speechToText() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  await recognition.start();
  recognition.onstart = () => dom.setText("Listening...");
  recognition.onresult = async event => {
    const current = await event.resultIndex;
    const transcript = await event.results[current][0].transcript;

    if (event.results[0].isFinal) {
      return transcript;
    }
  };
}

function bot(input, data) {
  const inputValue = input.value.toLowerCase();

  // using arrow function instead of normal function for whatever reason
  const includes = key => {
    return inputValue.includes(key);
  };

  // PRO logic started!!!
  if (includes("hi")) {
    dom.setText("Hi, What can I do for you");
  } else if (includes("you")) {
    dom.setText("I am doing great. Thanks for asking");
  } else if (includes("bored")) {
    ("What can I do for you?");
  } else if (includes("thanks")) {
    dom.setText("Your are Welcome");
  } else if (includes("bye")) {
    dom.setText("Goode Bye");
  } else if (includes("time")) {
    dom.setText(data.getTime());
  } else if (includes("date")) {
    dom.setText(data.getDate());
  } else if (includes("month")) {
    dom.setText(data.getMonthName());
  } else if (includes("weather")) {
    dom.setText("Loading...");
    data.getWeather();
  } else if (includes("joke")) {
    dom.setText("Loading...");
    data.getJokes().then(joke => dom.setText(joke));
  } else {
    dom.setText("Loading...");
    data.duckDuckGo(inputValue).then(response => dom.setHtml(response));
  }

  textToSpeech();
}

function main(input, data) {
  dom.setText(greet());

  $about_button.on("click", () => reveal($about_dialog));
  $close_button.on("click", () => hide($about_dialog));

  // Press Enter key to perform submit
  input.on("keypress", event => {
    if (event.defaultPrevented) {
      return;
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      $submit.click();
      // clear tex field
      input.value = null;
    }
  });

  // Clear text field on focus
  input.on("focus", () => (input.value = null));

  $mic.on("click", async () => {
    input.value = await speechToText();
    bot(input, data);
  });

  $submit.on("click", () => {
    if (input.value !== "") {
      bot(input, data);
    }
  });

  // Create some command buttons

  const buttonTexts = [
    "Time",
    "Date",
    "Weather",
    "Tell me a joke",
    "What is bot",
    "Ecosia",
    "Computer Science",
  ];

  buttonTexts.forEach(text => {
    const $shortcut_btn = createElement("span", { class: "shortcut-btn" });
    $shortcut_btn.innerHTML = text;
    document.getElementById("container-sc-btn").appendChild($shortcut_btn);
  });

  const $all_shortcut_btn = document.querySelectorAll(".shortcut-btn");
  let btn_inner_text;

  // adding click listener to all buttons
  $all_shortcut_btn.forEach(button => {
    button.on("click", event => {
      btn_inner_text = event.target.innerText;
      input.value = btn_inner_text;
      $submit.click();
    });
  });

  textToSpeech();
}

main($input, data);
