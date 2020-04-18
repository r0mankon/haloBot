/**
 * getElementById wrapper
 * @param {String} id DOM Element ID
 */
export function $(id) {
  return document.getElementById(id);
}

/**
 * querySelectorAll wrapper
 * @param {String} selector CSS selector
 */
export function $qsa(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Change elements visibility to visible
 * @param {HTMLElement} element DOM Element that will be visible
 */
export function reveal(element) {
  return (element.style.visibility = "visible");
}

/**
 * Change elements visibility to hidden
 * @param {HTMLElement} element DOM Element that will be hidden
 */
export function hide(element) {
  return (element.style.visibility = "hidden");
}

/**
 * Create new element with given tag name & set attributs
 * @param {String} tagName The name of an element
 * @param {{}} attributes { attrName: "attrValue" }
 */
export function createElement(tagName, attributes = {}) {
  const newElement = document.createElement(tagName);

  for (const attrName in attributes) {
    const attrValue = attributes[attrName];
    newElement.setAttribute(attrName, attrValue);
  }

  return newElement;
}

/**
 * fetch api wrapper
 * @param {String} url api to fetch data from
 */
export async function getFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      $("bot-speak").innerText = "No Internet";
    } else {
      alert(error.message);
    }
  }
}
