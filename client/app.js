/* CLIENT ENTRY POINT */
/* -------------------- */
// #region IMPORTS

import { buildMessage } from "./assets/js/elementFactory.js";
import { clearEntries } from "./assets/js/elementFactory.js";

import { getMessages } from "./assets/js/networkHandler.js";
import { postMessage } from "./assets/js/networkHandler.js";

// #endregion IMPORTS
/* -------------------- */
// #region INIT

const headerDiv = document.getElementById("header-div");
const contentPanel = document.getElementById("content-panel");
const inputForm = document.getElementById("input-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");

const collapseBtn = document.getElementById("collapse-btn");

let isCollapsed = false;
const smallScreen = window.matchMedia("(max-width: 400px)");

// Initialize app when DOM loaded
window.onload = () => {
  smallScreen.addEventListener("change", () => {
    autoCollapse();
    contentSlide();
  });
  clearEntries();
  getMessages(buildMessage);

  collapseBtn.addEventListener("click", headerSlide);

  // Stop ENTER from submitting and instead skip to next
  nameInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") messageInput.focus();
  });

  // Submit handling
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation(); // Consume event
    readFormData(e);
  });
};

// #endregion INIT
/* -------------------- */
// #region FORBIDDEN MAGIC

function readFormData(submitEvent) {
  const formData = new FormData(submitEvent.target);
  const values = Object.fromEntries(formData);

  postMessage(values, onPostCallback);
  nameInput.value = "";
  messageInput.value = "";
}

function onPostCallback(data) {
  clearEntries();
  buildMessage(data);
}

export function onDeleteCallback(data) {
  clearEntries();
  buildMessage(data);
}

export function onPutCallback(data) {
  clearEntries();
  buildMessage(data);
}
// #endregion FORBIDDEN MAGIC
/* -------------------- */
//#region FUN STUFF

/* Cha cha Slideeeeeeeeeeeeeeee the header */
function headerSlide() {
  if (!isCollapsed) {
    console.log("Collapsing");
    headerDiv.animate(
      {
        top: ["0px", "-75px", "-100px", "-150px"],
      },
      { duration: 1000, easing: "ease-out", iterations: 1 }
    );

    headerDiv.style.setProperty("top", "-150px");
    isCollapsed = true;
    collapseBtn.innerText = "v";
    return;
  }

  console.log("Uncollapsing");
  headerDiv.animate(
    {
      top: ["-100px", "-25px", "0px"],
    },
    { duration: 1000, easing: "ease-out", iterations: 1 }
  );

  headerDiv.style.setProperty("top", "0px");
  isCollapsed = false;
  collapseBtn.innerText = "^";
}

function contentSlide() {
  /*
  if (smallScreen.matches) {
    contentPanel.animate(
      {
        top: ["0px", "25px", "50px", "75px", "100px"],
      },
      { duration: 1000, easing: "ease-out", iterations: 1 }
    );
  }
  */
}
function autoCollapse() {
  if (smallScreen.matches) {
    if (!isCollapsed) headerSlide(); // Collapsin' time!
  } else {
    if (isCollapsed) headerSlide(true);
  }
}
//#endregion FUN STUFF
/* -------------------- */
