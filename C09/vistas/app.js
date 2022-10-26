const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("datos", {
    titulo: "Prueba",
    mensaje: "Mensaje ...",
    autor: "Juan",
    version: "1.2",
  });
});

const PORT = 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
