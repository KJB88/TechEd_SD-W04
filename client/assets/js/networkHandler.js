/* NETWORK HANDLING*/
/* -------------------- */
// #region VARS
const apiURL = "https://teched-sd-w04.onrender.com";

//const apiURL = "http://127.0.0.1:8080";

// #endregion VARS
/* -------------------- */
// #region REQUESTS

/* GET all messages from remote */
export async function getMessages(callback) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  console.log("GET response received.");
  callback(data);
}

/* POST a new message to remote */
export async function postMessage(postContent, callback) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "POST",
    body: JSON.stringify(postContent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  console.log("POST response received.");
  callback(data);
}

/* DELETE a message from remote (based on ID) */
export async function deleteMessage(id, callback) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "DELETE",
    body: JSON.stringify({ id: `${id}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  console.log(data);
  callback(data);
}

/* PUT a like on the message, specified by ID, on the remote */
export async function putLike(id, callback) {
  const resp = await fetch(`${apiURL}/like`, {
    method: "PUT",
    body: JSON.stringify({ id: `${id}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  console.log(data);
  callback(data);
}

// #endregion REQUESTS
/* -------------------- */
