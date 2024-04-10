/* COMMON HELPERS */
/* -------------------- */

/* Steps the Current value by Step.
Hanldes overflow by wrapping around from Max to Min and Min to Max */
function stepValue(current, step, min, max) {
  current += step;

  if (current > max) current = min;
  else if (current < min) current = max;

  return current;
}

/* Updates a given text element with the given text*/
function updateTextElement(element, text) {
  element.textContent = text;
}

/* Get a random integer from 0 to max */
function getRandomIntFromZero(max) {
  return Math.floor(Math.random() * max);
}

/* Capitalize the first letter of a string */
function capitliseFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* Is the value a number? */
function isNumber(value) {
  return typeof value === "number";
}

/* Clamp a value between a given min and a given max */
function clampNumber(value, min, max) {
  return Math.max(Math.min(value, Math.max(min, max)), Math.min(min, max));
}

/* --------------------------- */
