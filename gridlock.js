function Board(cars) {
  this.grid = [];
  this.generateBoard();
  this.setupLevel(cars);
}

Board.prototype.generateBoard = function () {
  this.grid = [];
  for (let i = 0; i < 6; i++) {
    this.grid.push([]);
    for (let j = 0; j < 6; j++) {
      this.grid[i].push('-');
    }
  }
};

Board.prototype.setupLevel = function(cars) {
  cars.forEach((car) => {
    if (car.direction === "up") {
      this.grid[car.pos[0]][car.pos[1]] = car;
      let lengthCounter = 1;
      while (lengthCounter < car.size) {
        this.grid[car.pos[0] + lengthCounter][car.pos[1]] = 'x';
        lengthCounter++;
      }
    } else if (car.direction === "right") {
      this.grid[car.pos[0]][car.pos[1]] = car;
      let lengthCounter = 1;
      while (lengthCounter < car.size) {
        this.grid[car.pos[0]][car.pos[1] + lengthCounter] = 'x';
        lengthCounter++;
      }
    }
  });
};

Board.prototype.wonLevel = function() {
  let won;
  if (this.grid[2][4].color === "red") {
    won = true;
  } else {
    won = false;
  }
  return won;
};

Board.prototype.wonGame = function() {
  let won;
  if (this.level >= 21) {
    won = true;
  } else {
    won = false;
  }
  return won;
};

module.exports = Board;
