<template>
    <div id="board">
      <canvas ref="canvas" width="640" height="400" @mousedown="handleMouseDown" @mousemove="handleMouseMove"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gridSize: 40, // size of each square in the grid
        grid: [], // 2D array representing the grid
        isDragging: false // flag to track when the user is dragging the mouse
      };
    },
    mounted() {
      // initialize the grid with empty values
      this.grid = new Array(10).fill(new Array(16).fill(null));
      // draw the grid initially
      this.drawGrid();
    },
    methods: {
      handleMouseDown(event) {
        // set isDragging to true
        this.isDragging = true;
        // calculate the position of the mouse relative to the canvas
        const rect = this.$refs.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // calculate the grid square that the mouse is over
        const row = Math.floor(y / this.gridSize);
        const col = Math.floor(x / this.gridSize);
        // update the grid with the new value
        this.grid[row][col] = "X";
        // redraw the grid
        this.drawGrid();
      },
      handleMouseMove(event) {
        // if the user is dragging the mouse, update the grid as the mouse moves
        if (this.isDragging) {
          // calculate the position of the mouse relative to the canvas
          const rect = this.$refs.canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          // calculate the grid square that the mouse is over
          const row = Math.floor(y / this.gridSize);
          const col = Math.floor(x / this.gridSize);
          // update the grid with the new value
          this.grid[row][col] = "X";
          // redraw the grid
          this.drawGrid();
        }
      },
      drawGrid() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let row = 0; row < this.grid.length; row++) {
          for (let col = 0; col < this.grid[row].length; col++) {
            const value = this.grid[row][col];
            const x = col * this.gridSize;
            const y = row * this.gridSize;
            ctx.fillStyle = value ? "black" : "white";
            ctx.fillRect(x, y, this.gridSize, this.gridSize);
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid black;
  }
  </style>