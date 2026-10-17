const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ig/:username", (req, res) => { 
  const username = req.params.username;
  let {username} = req.params;
  const instadata = require("./data.json");
  console.log(instadata);
    res.render("instagram", { dat:instadata, username });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});