/* ELEMENT BUILDER */
/* -------------------- */
const messageLog = document.getElementById("message-log");

export function buildMessage(respPayload) {
  respPayload.forEach((entry) => {
    const entryContainer = document.createElement("div"); // Parent container
    entryContainer.classList.add("entry-container");

    const idContainer = document.createElement("span"); // ID
    idContainer.classList.add("drop-shadow-2px", "id-container");
    idContainer.textContent = entry.id;
    entryContainer.appendChild(idContainer);

    const nameContainer = document.createElement("span"); // Name
    nameContainer.classList.add("drop-shadow-2px", "name-container");
    nameContainer.textContent = entry.name;
    entryContainer.appendChild(nameContainer);

    const messageContainer = document.createElement("span"); // Message
    messageContainer.classList.add("drop-shadow-2px", "message-container");
    messageContainer.textContent = entry.message;
    entryContainer.appendChild(messageContainer);

    messageLog.appendChild(entryContainer); // Whack it on existing DOM object
  });
}
