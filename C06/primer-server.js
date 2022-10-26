const http = require("http");

// const server = http.createServer();
// server.on("request", procesa);
// server.listen(3000);
// console.log("localhost:3000");

// function procesa(request, response) {
//   let url = request.url;
//   console.log(`URL solicitada: ${url}`);
//   response.end("Hola");
// }

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hola mundo");
});

server.listen(3000, () => console.log("http://localhost:3000"));

server.on("error", (error) => console.log(error));
