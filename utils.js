/**
 *
 * @param {Object} tagData
 * @returns {HTMLElement}
 */

export function createHTMLElement({
    el,
    attributes,
    children,
    style,
    events,
    text,
  }) {
    const tag = document.createElement(el);
    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) =>
        tag.setAttribute(name, value)
      );
    }
    if (style) {
      Object.entries(style).forEach(([name, value]) => (tag.style[name] = value));
    }
    if (events) {
      Object.entries(events).forEach(([eventName, callback]) =>
        tag.addEventListener(eventName, callback)
      );
    }
    if (text) {
      tag.textContent = text;
    }
    if (children) {
      children.forEach((child) => {
        if (typeof child == "string") {
          child = document.createTextNode(child);
        }
        tag.appendChild(child);
      });
    }
    return tag;
  }