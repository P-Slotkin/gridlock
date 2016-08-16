const Car = function(options) {
  // pos is the top/left most space of the car
  this.pos = options.pos;
  this.direction = options.direction;
  this.color = options.color;
  this.size = options.size;
  this.game = options.game;
};

Car.prototype.remove = function() {
  this.game.remove(this);
};

Car.prototype.forward = function () {
  if (this.direction === "up") {
    this.pos = [this.pos[0] + 1, this.pos[1]];
  } else if (this.direction === "right") {
    this.pos = [this.pos[0], this.pos[1] + 1];
  }
};

Car.prototype.backward = function () {
  if (this.direction === "up" ) {
    this.pos = [this.pos[0] - 1, this.pos[1]];
  } else if (this.direction === "right") {
    this.pos = [this.pos[0], this.pos[1] - 1];
  }
};

module.exports = Car;
