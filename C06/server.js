const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/contacto", (req, res) => {
  res.send("contacto");
});

const PORT = 3000;

app.listen(PORT, () => console.log("http://localhost:3000"));
