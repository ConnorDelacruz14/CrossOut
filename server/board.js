class Board {
  constructor(height, width, words) {
    this.height = height;
    this.width = width;
    this.words = Object.keys(words);
    this.board = new Array(height);
  }

  FillBoard() {
    for (let i = 0; i < this.height; i++) {
      this.board[i] = new Array(this.width);
    }

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.board[i][j] = "▮";
      }
    }
  }

  AddHorizontalWord(word) {
    let x, y, overlappingLetter, hasNeighbor;

    do {
      x = Math.floor(Math.random() * this.height);
      y = Math.floor(Math.random() * (this.width - word.length));
      overlappingLetter = false;
      hasNeighbor = false;

      for (let i = 0; i < word.length; i++) {
        if (this.board[x][y + i] !== "▮") {
          if (i > 0 && this.board[x][y + i - 1] !== "▮") {
            hasNeighbor = true;
          }
          if (i < word.length - 1 && this.board[x][y + i + 1] !== "▮") {
            hasNeighbor = true;
          }
          if (this.board[x][y + i] !== word[i]) {
            overlappingLetter = true;
            break;
          }
        }
      }
    } while (overlappingLetter || hasNeighbor);

    for (let i = 0; i < word.length; i++) {
      this.board[x][y + i] = word[i];
    }
  }

  AddVerticalWord(word) {
    let x, y, overlappingLetter, hasNeighbor;

    do {
      x = Math.floor(Math.random() * (this.height - word.length));
      y = Math.floor(Math.random() * this.width);
      overlappingLetter = false;
      hasNeighbor = false;

      for (let i = 0; i < word.length; i++) {
        if (this.board[x + i][y] !== "▮") {
          if (i > 0 && this.board[x + i - 1][y] !== "▮") {
            hasNeighbor = true;
          }
          if (i < word.length - 1 && this.board[x + i + 1][y] !== "▮") {
            hasNeighbor = true;
          }
          if (this.board[x + i][y] !== word[i]) {
            overlappingLetter = true;
            break;
          }
        }
      }
    } while (overlappingLetter || hasNeighbor);

    for (let i = 0; i < word.length; i++) {
      this.board[x + i][y] = word[i];
    }
  }

  CreateGameBoard() {
    for (const word of this.words) {
      if (Math.floor(Math.random() * 2)) {
        this.AddHorizontalWord(word);
      } else {
        this.AddVerticalWord(word);
      }
    }
  }

  PrintBoard() {
    for (let i = 0; i < this.height; i++) {
      console.log(this.board[i].join(" "));
    }
  }
}

module.exports = Board;
