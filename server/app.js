const MAX_PLAYERS = 4;
let players = {};

const Board = require("./board");
const height = 10;
const width = 15;
const words = {
  fable: "Short story with animals",
  bat: "Winged creature",
  enable: "Opposite of disable",
  ape: "Type of monkey",
  panda: "Animal that eats bamboo",
  axis: "Turn around this point",
  say: "_ _ _ something, anything!",
  yarn: "Crochet with this material",
};

const gameBoard = new Board(height, width, words);
gameBoard.FillBoard();
gameBoard.CreateGameBoard();
gameBoard.PrintBoard();

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

    if (Object.keys(players).length === MAX_PLAYERS) {
      // Begin if lobby is full
      io.emit("start_game", gameBoard, words);
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
