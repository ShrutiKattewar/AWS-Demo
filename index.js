const http = require("http");

const user = {
  id: 1,
  name: "Shruti",
  id: 2,
  name: "Akshay",
  id: 3,
  name: "Goud",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });

  res.end(JSON.stringify(user));
});

server.listen(4500, () => {
  console.log("Server is running on port 4500");
});
