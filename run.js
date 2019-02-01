var grid = [];
var gridSize = 10;
var maxMines = 10;

//At first fill the grid with empty cells
for (var y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (var x = 0; x < gridSize; x++) {
        grid[y][x] = new Celly();
    }
}

// Then place some mines around
placeMines();
//And then at last set the newMinesCounter
for (var y = 0; y < gridSize; y++) {
    for (var x = 0; x < gridSize; x++) {
        findingNeighbors(grid, y, x);
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
            line += getEmoji(cell.minesNearby);
        }
        line += "||";
    }
    console.log(line);
}


class Celly {
    constructor() {
        this.isMine = false;
        this.minesNearby = 0;
    }
}

function findingNeighbors(myArray, i, j) {
    var rowLimit = myArray.length - 1;
    var columnLimit = myArray[0].length - 1;
    for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
        for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
            if (x !== i || y !== j) {
                if(myArray[x][y].isMine){
                    grid[i][j].minesNearby++;
                }
            }
        }
    }
}

function placeMines() {
    var placedMines = 0;
    while (placedMines < maxMines) {
        var x = getRandomNumber(gridSize);
        var y = getRandomNumber(gridSize);
        if (!grid[y][x].isMine) {
            grid[y][x].isMine = true;
            placedMines++;
        }
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getEmoji(number) {
    switch (number) {
        case 0:
            return ":zero:";
        case 1:
            return ":one:";
        case 2:
            return ":two:";
        case 3:
            return ":three:";
        case 4:
            return ":four:";
        case 5:
            return ":five:";
        case 6:
            return ":six:";
        case 7:
            return ":seven:";
        case 8:
            return ":eight:";
    }
}