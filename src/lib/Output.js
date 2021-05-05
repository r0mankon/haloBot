import { createElement } from "./utils";

export class Output {
  element: HTMLElement;

  constructor(el: HTMLElement) {
    this.element = el;
  }

  get read() {
    return this.element.innerText;
  }

  set write(value) {
    const span = createElement("span", { class: "output" }, value);
    if (!this.element.childNodes[0]) {
      return this.element.appendChild(span);
    }
    this.element.replaceChild(span, this.element.childNodes[0]);
  }
}
