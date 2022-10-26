const express = require("express");
const app = express();

app.use("/static", express.static(__dirname + "/public"));

const { Router } = express;

const mascotasRouter = new Router();

mascotasRouter.use(express.json());
mascotasRouter.use(express.urlencoded({ extended: true }));

const mascotas = [];

mascotasRouter.get("/", (req, res) => {
  res.json(mascotas);
});

function addId(req, res, next) {
  req.body.id = mascotas.length + 1;
  next();
}

mascotasRouter.post("/", addId, (req, res) => {
  //   req.body.id = mascotas.length + 1;
  mascotas.push(req.body);
  res.json(req.body);
});

mascotasRouter.delete("/:id", (req, res) => {
  mascotas.splice(req.params.id - 1, 1);
  res.json(mascotas);
});

app.use("/mascotas", mascotasRouter);

app.use((req, res, next) => {
  res.status(400).send("Error 404");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
