let players = {};

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

io.on("connection", (socket) => {
  socket.on("connect_player", (playerId) => {
    if (players[playerId]) {
      // Already in game
      console.log(`Player ${playerId} reconnected`);
    } else {
      // New user
      console.log(`Player ${playerId} connected`);
      players[playerId] = socket.id;
    }
    if (Object.keys(players).length === 4) {
      io.emit("start_game");
    }
    io.emit("update_player_count", Object.keys(players).length);
  });

  socket.on("disconnect", () => {
    const playerId = Object.keys(players).find(
      (key) => players[key] === socket.id
    );
    if (playerId) {
      delete players[playerId];
    }
    console.log(`Player ${playerId} disconnected`);
    io.emit("update_player_count", Object.keys(players).length);
  });
});
