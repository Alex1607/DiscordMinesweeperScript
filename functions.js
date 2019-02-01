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