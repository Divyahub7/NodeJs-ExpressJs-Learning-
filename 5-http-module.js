// HTTP module - Node js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    return res.end("here is the about section");
  }
  res.end(`
    <h1>OOps!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home<a>`);
});

server.listen(5000);
