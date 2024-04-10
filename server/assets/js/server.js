import express from "express";

export const app = express();
app.use(express.json());

app.get("/", function (request, response) {
  console.log("/ is called!");
  response.json("Hitting root route. Stop it.");
});

app.listen(8080, function () {
  console.log("Listening on 8080.");
});
