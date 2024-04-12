const apiURL = "https://teched-sd-w04.onrender.com/";

getMessages();

async function getMessages() {
  const resp = await fetch(`${apiURL}messages`);
  const data = resp.json();

  console.log(data);
}
