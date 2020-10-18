// Typescript like syntax using @babel/plugin-transform-typescript

export function $(id: string) {
  return document.getElementById(id);
}

export function $$(selector: string) {
  return document.querySelectorAll(selector);
}

export function show(element: HTMLElement) {
  element.style.visibility = "visible";
}

export function hide(element: HTMLElement) {
  element.style.visibility = "hidden";
}

export function createElement(tagName = "div", attributes = {}, children: string) {
  const newElement = document.createElement(tagName);

  for (const [attrName, attrValue] of Object.entries(attributes)) {
    newElement.setAttribute(attrName, String(attrValue));
  }
  newElement.innerHTML = children;

  return newElement;
}

export async function getFetch(url: string) {
  try {
    const data = await fetch(url).then(res => res.json());
    return data;
  } catch (error) {
    return error;
  }
}

export function handleError(error) {
  if (typeof error === "string") return alert("Error: " + error);

  if (error.message === "Failed to fetch") {
    return alert("You're not connected to the internet! 😥");
  }

  if (error.message) return alert("Error: " + error.message);
  if (error.error) return alert("Error: " + error.error);
}
