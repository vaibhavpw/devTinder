const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/abc", (req, res) => {
    res.send("abc from server");
  });

app.listen(3000, () => console.log("listening on port 3000"));

