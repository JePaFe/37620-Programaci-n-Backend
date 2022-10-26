const http = require("http");

const server = http.createServer((req, res) => {
  const hora = new Date().getHours();

  let mensaje = "";

  if (hora >= 6 && hora <= 12) {
    mensaje = "Buenos días";
  } else if (hora >= 13 && hora <= 19) {
    mensaje = "Buenos tardes";
  } else {
    mensaje = "Buenos noches";
  }

  res.end(mensaje);
});

server.listen(8080, () => console.log("http://localhost:8080"));
