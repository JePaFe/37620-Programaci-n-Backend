const moment = require("moment");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue;'>Bienvenidos</h1>");
});

let contador = 0;
app.get("/visitas", (req, res) => {
  res.send(`La cantidad de visitas: ${++contador}`);
});

app.get("/fyh", (req, res) => {
  const hora = moment().format("DD/M/YYYY HH:mm:ss");
  res.send({ fyh: hora });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
