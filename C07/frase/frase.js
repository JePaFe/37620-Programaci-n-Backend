const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = "Hola mundo como están";

app.get("/api/frase", (req, res) => {
  res.send(frase);
});

// /api/letras/1
app.get("/api/letras/:num", (req, res) => {
  res.send(frase[req.params.num - 1]);
});

// /api/palabras/1
app.get("/api/palabras/:num", (req, res) => {
  const palabras = frase.split(" ");
  res.send(palabras[req.params.num - 1]);
});

app.put("/api/palabras", (req, res) => {});

app.delete("/api/palabras", (req, res) => {});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
