const Car = require('./car');

const Game = function() {
  this.level = 1;
  this.cars = [];
  this.board = [['-','-','-','-','-','-'],
                ['-','-','-','-','-','-'],
                ['-','-','-','-','-','-'],
                ['-','-','-','-','-','-'],
                ['-','-','-','-','-','-'],
                ['-','-','-','-','-','-']];
};

Game.prototype.setupBoard = function (cars) {
  let that = this;
  cars.forEach((car) => {
    if (car.direction === "up") {
      that.board[car.pos[0]][car.pos[1]] = car;
      lengthCounter = 0;
      while (lengthCounter < car.size - 1) {
        that.board[car.pos[0 + lengthCounter]][car.pos[1]] = 'x';
        lengthCounter++;
      }
    } else if (car.direction === "right") {
      that.board[car.pos[0]][car.pos[1]] = car;
      lengthCounter = 0;
      while (lengthCounter < car.size - 1) {
        that.board[car.pos[0]][car.pos[1 + lengthCounter]] = 'x';
        lengthCounter++;
      }
    }
  });
};

Game.prototype.renderBoard = function(board) {
  let that = this;
  let renderInfoBoard;
  renderInfoBoard = this.board.map((row) => {
    return row.map((space) => {
      if (space instanceof Car) {
        return (<div className=`${space.color}` />); 
      }
    });
  });
};
