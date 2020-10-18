import { $, createElement, handleError, hide, show } from "./lib/utils";
import { bot, greet, speechToText, textToSpeech } from "./modules";
import { Input } from "./lib/input";
import { Output } from "./lib/output";

interface App {
  input: Input;
  output: Output;
  $submit: HTMLElement;
  $mic: HTMLElement;
}

export const App = ({ input, output, $submit, $mic }: App) => {
  output.write = greet();
  textToSpeech(output.read);

  async function handleSubmit() {
    if (!input.isEmpty()) {
      const res = await bot(input.value);
      output.write = res;

      textToSpeech(output.read);
    }
  }

  async function handleMic() {
    input.reset();
    const interval = setInterval(() => {
      input.value += "🝊";
    }, 700);

    output.write = "Listening...";

    const transcript = await speechToText().catch(handleError);

    clearInterval(interval);

    if (!transcript) return (output.write = "Can't listen!");

    input.value = transcript;

    $submit.click();
  }

  function handleEnterKey(event) {
    const key = event.key || event.keyCode;

    if (event.defaultPrevented) return;

    if (key === "Enter" || key === 13) {
      $submit.click();
      input.reset();
    }
  }

  const toggleVisibility = element => (input.isEmpty() ? hide(element) : show(element));

  // mic, enter_key and cmd buttons clicks this submit button too!

  $submit.on("click", handleSubmit);

  $mic.on("click", handleMic);

  input.element.on("keypress", handleEnterKey);

  input.element.on("keyup", () => toggleVisibility($submit));

  input.element.on("focus", () => {
    input.reset();
    toggleVisibility($submit);
  });

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

  const btn_container = $("container-cmd-btn");

  for (const text of buttonTexts) {
    const $commandBtn = createElement("span", { class: "command-btn" }, text);

    $commandBtn.on("click", event => {
      const btn_text = event.target.innerText;
      input.value = btn_text;
      $submit.click();
    });

    btn_container.appendChild($commandBtn);
  }
};
