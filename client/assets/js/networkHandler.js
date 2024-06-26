/* NETWORK HANDLING*/
/* -------------------- */
// #region VARS

const apiURL = "https://teched-sd-w04.onrender.com";
//const apiURL = "http://127.0.0.1:8080";

// #endregion VARS
/* -------------------- */
// #region REQUESTS

/* GET all messages from remote */
export async function getMessages(
  successCallback,
  failureCallback = onFailureCallback
) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    console.log("GET response received.");
    successCallback(data);
  } else {
    failureCallback("GET", resp.status);
  }
}

/* POST a new message to remote */
export async function postMessage(
  postContent,
  successCallback,
  failureCallback = onFailureCallback
) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "POST",
    body: JSON.stringify(postContent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    console.log("POST response received.");
    successCallback(data);
  } else {
    failureCallback("POST", resp.status);
  }
}

/* DELETE a message from remote (based on ID) */
export async function deleteMessage(
  id,
  successCallback,
  failureCallback = onFailureCallback
) {
  const resp = await fetch(`${apiURL}/message`, {
    method: "DELETE",
    body: JSON.stringify({ id: `${id}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    console.log("DEL response received.");
    successCallback(data);
  } else {
    failureCallback("DEL", resp.status);
  }
}

/* PUT a like on the message, specified by ID, on the remote */
export async function putLike(
  id,
  successCallback,
  failureCallback = onFailureCallback
) {
  const resp = await fetch(`${apiURL}/like`, {
    method: "PUT",
    body: JSON.stringify({ id: `${id}` }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    console.log("PUT response received.");
    successCallback(data);
  } else {
    failureCallback("PUT", resp.status);
  }
}

function onFailureCallback(requestType, status) {
  console.log(`${requestType} request failed: ${status}`);
}
// #endregion REQUESTS
/* -------------------- */
