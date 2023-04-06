var app = require("express");
var http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});

// io.on("connection", (socket) => {
//   console.log("a player connected!");

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const http = require("http");
// const socketio = require("socket.io");

// const server = http.createServer(app);
// const io = socketio(server);

// io.on("connection", (socket) => {
//   console.log("a player connected!");

//   socket.on("disceonnect", () => {
//     console.log("player disconnected");
//   });

//   socket.on("message", (message) => {
//     console.log(`received message: ${message}`);
//     io.emit("message", message);
//   });
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
