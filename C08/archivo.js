const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formulario.html");
});

app.post("/", upload.single("myArchivo"), (req, res) => {
  res.send("Subido");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
