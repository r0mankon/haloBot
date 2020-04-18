import { $, $qsa, reveal, hide, createElement } from "./helper";
import DateTime from "./api/DateTime";
import getWeather from "./api/getWeather";
import getJokes from "./api/getJokes";
import flipCoin from "./api/flipCoin";
import duckDuckGo from "./api/ddg";

const dateTime = new DateTime();
const $botSpeak = $("bot-speak");
const $input = $("input");
const $submit = $("submit");

const botSpeak = {
  setHtml(value) {
    $botSpeak.innerHTML = value;
  },
  setText(value) {
    $botSpeak.innerText = value;
  },
};

// addEventLister wrapper for html element
HTMLElement.prototype.on = function (event, callback) {
  return this.addEventListener(event, callback);
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

function textToSpeech(text = $botSpeak.textContent) {
  if ("speechSynthesis" in window) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.cancel(); // stop any previous utterance

    if (text.includes("Loading...")) {
      synth.cancel();
    } else {
      synth.speak(utterance); // then make the current utterance
    }
  } else {
    alert("SpeechSynthesis is not supported by your device/browser");
  }
}

// BUG: speech recognition functionality not working most probably sync/async mater
// TODO: fix this bug
async function speechToText() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  await recognition.start();
  recognition.onstart = () => botSpeak.setText("Listening...");
  recognition.onresult = async event => {
    const current = await event.resultIndex;
    const transcript = await event.results[current][0].transcript;

    if (event.results[0].isFinal) {
      return transcript;
    }
  };
}

function bot(input) {
  const inputValue = input.value.toLowerCase();

  const includes = key => {
    return inputValue.includes(key);
  };

  // PRO logic started!!!

  if (includes("hi") || includes("hello") || includes("howdy") || includes("hey")) {
    botSpeak.setText(greet());
    textToSpeech();
  } else if (includes("you")) {
    botSpeak.setText("I am doing great. Thanks for asking");
    textToSpeech();
  } else if (includes("bored")) {
    botSpeak.setText("What can I do for you?");
    textToSpeech();
  } else if (includes("thanks")) {
    botSpeak.setText("Your are Welcome");
    textToSpeech();
  } else if (includes("bye")) {
    botSpeak.setText("Goode Bye");
    textToSpeech();
  } else if (includes("time")) {
    botSpeak.setText(dateTime.getTime());
    textToSpeech();
  } else if (includes("date")) {
    botSpeak.setText(dateTime.getDate());
    textToSpeech();
  } else if (includes("month")) {
    botSpeak.setText(dateTime.getMonthName());
    textToSpeech();
  } else if (includes("coin")) {
    botSpeak.setHtml(flipCoin());
  } else if (includes("weather")) {
    botSpeak.setText("Loading...");
    getWeather(botSpeak);
    textToSpeech();
  } else if (includes("joke")) {
    botSpeak.setText("Loading...");
    getJokes().then(joke => {
      botSpeak.setText(joke);
      textToSpeech();
    });
  } else {
    botSpeak.setText("Loading...");
    duckDuckGo(inputValue).then(response => {
      botSpeak.setHtml(response);
      textToSpeech();
    });
  }
}

function main(input) {
  botSpeak.setText(greet());
  textToSpeech();

  const dialogContainer = $("container-dialog");

  $("about-btn").on("click", () => reveal(dialogContainer));
  $("close-btn").on("click", () => hide(dialogContainer));

  window.addEventListener("click", event => {
    if (event.target === dialogContainer) {
      hide(dialogContainer);
    }
  });

  // Enter key to perform submit
  input.on("keypress", event => {
    if (event.defaultPrevented) {
      return;
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      $submit.click();
      input.value = null;
    }
  });

  // Clear input on focus
  input.on("focus", () => (input.value = null));

  $("mic").on("click", async () => {
    input.value = await speechToText();
    bot(input);
  });

  $submit.on("click", () => {
    if (input.value !== "") {
      bot(input);
    }
  });

  // Some command buttons

  const buttonTexts = [
    "Weather",
    "Flip coin",
    "Tell me a joke",
    "What is bot",
    "Ecosia",
    "Computer Science",
    "Time",
    "Date",
    "Month name",
  ];

  buttonTexts.forEach(text => {
    const $commandBtn = createElement("span", { class: "command-btn" });
    $commandBtn.innerHTML = text;
    $("container-cmd-btn").appendChild($commandBtn);
  });

  // adding click listener to all buttons
  $qsa(".command-btn").forEach(button => {
    button.on("click", event => {
      const btn_text = event.target.innerText;
      input.value = btn_text;
      $submit.click();
    });
  });
}

// Executing main function
main($input);
