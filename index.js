const { createServer } = require("./server");

const server = createServer();
server.listen({ port: 3000 }, function (err) {
  if (err) {
    throw err;
  }
});
