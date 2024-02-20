const { on } = require("events");
const http = require("http");

const requestListener = (req, res) => {
  // console.log(req, { depth: 0 });
  // console.log(req.url);
  console.dir(res);
  // res.end("Hello Node\n");
  res.write("Hello NodeMon\n");
  res.end();
};

// const server = http.createServer(requestListener);
const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});
