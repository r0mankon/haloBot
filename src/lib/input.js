export class Input {
  /** @type {HTMLInputElement} */
  element;

  constructor(el) {
    this.element = el;
  }

  get value() {
    return this.element.value.toLowerCase();
  }

  set value(value) {
    this.element.value = value;
  }

  reset() {
    this.value = null;
  }

  isEmpty() {
    return this.element.value === "" || this.element.value === null;
  }
}
