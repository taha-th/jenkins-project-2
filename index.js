const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey I m the king of devops and hamza is my junior fuck you");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app.listen(5000, () => {
  console.log("listening");
});
