const Cell = require("./cell.js");
const functions = require("./functions.js");

var grid = [];
var gridSize = 10;
var maxMines = 15;

//At first fill the grid with empty cells
for (var y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (var x = 0; x < gridSize; x++) {
        grid[y][x] = new Cell();
    }
}

// Then place some mines around
grid = functions.placeMines(maxMines, gridSize, grid);

//And then at last set the newMinesCounter
for (var y = 0; y < gridSize; y++) {
    for (var x = 0; x < gridSize; x++) {
        grid = functions.findingNeighbors(grid, y, x);
    }
}

//Print Grid
for (var y = 0; y < gridSize; y++) {
    var line = "";
    for (var x = 0; x < gridSize; x++) {
        var cell = grid[y][x];
        line += "||";
        if (cell.isMine) {
            line += ":boom:";
        } else {
            line += functions.getEmoji(cell.minesNearby);
        }
        line += "||";
    }
    console.log(line);
}