import { $, hide, show } from "./lib/utils";
import { App } from "./app";
import strings from "./strings";
import { Input } from "./lib/Input";
import { Output } from "./lib/Output";

HTMLElement.prototype.on = function (event, eventListener) {
  return this.addEventListener(event, eventListener);
};
Window.prototype.on = function (event, eventListener) {
  return this.addEventListener(event, eventListener);
};

const $input: HTMLInputElement = $("input");
const $output = $("output-container");
const $mic = $("mic");
const $submit = $("submit");
const $dialog = $("container-dialog");

const input = new Input($input);
const output = new Output($output);

$("app_name").innerText = strings.app_name;
$("version").innerText = "Version: " + strings.version;
$("bugs").href = strings.bugs;

$("about-btn").on("click", () => show($dialog));
$("close-btn").on("click", () => hide($dialog));

window.on("click", event => event.target === $dialog && hide($dialog));

App({ input, output, $submit, $mic });
