const Gridlock = require('../gridlock.js');
const Car = require('../car.js');
const React = require('react');
const Levels = require('./levels.js');
const ReactCar = require('./car.jsx');

const Game = React.createClass({
  getInitialState() {
    let cars = this.makeCars(Levels[1]);
    const carBoard = new Gridlock(cars);
    const backGroundBoard = new Gridlock([]);
    this.moveCounter = 0;
    return ({ level: 1, carBoard: carBoard, board: backGroundBoard, cars: cars });
  },

  makeCars(blueprint) {
    return blueprint.map((attrs) => { return new Car({ color: attrs[0], size: attrs[1], pos: attrs[2], direction: attrs[3] }); });
  },

  restartLevel() {
    this.moveCounter = 0;
    let cars = this.makeCars(Levels[this.state.level]);
    this.setState({ carBoard: new Gridlock(cars), cars: cars });
  },

  nextLevel() {
    this.moveCounter = 0;
    let nextLevel = this.state.level + 1;
    let cars = this.makeCars(Levels[nextLevel]);
    if (this.state.level < 20) {
      this.setState({ carBoard: new Gridlock(cars), level: nextLevel, cars: cars });
    }
  },

  previousLevel() {
    this.moveCounter = 0;
    let previousLevel = this.state.level - 1;
    let cars = this.makeCars(Levels[previousLevel]);
    if (this.state.level > 1) {
      this.setState({ carBoard: new Gridlock(cars), level: previousLevel, cars: cars });
    }
  },

  carMoved(color, newCar){
    this.moveCounter++;
    let carsMissingOne = this.state.cars.filter((car) => {
      return car.color !== color;
    });
    carsMissingOne.push(newCar);
    this.setState({ cars: carsMissingOne });
    this.updateBoard();
  },

  renderBackGroundBoard() {
    let htmlBoard = this.state.board.grid.map((row) => {
      return row.map((space) => {
        if (space === '-') {
          return <div className='square empty'/>;
        }
      });
    });
    return htmlBoard;
  },

  renderCarBoard() {
    let that = this;
    let carBoard = this.state.carBoard.grid.map((row) => {
      return row.map((space) => {
        if (space instanceof Object) {
          return <ReactCar carMoved={that.carMoved} car={space} board={that.state.carBoard} color={space.color} size={space.size} pos={space.pos} dir={space.direction}/>;
        }
      });
    });
    return (
      <div className="car-board-container">
        {carBoard}
      </div>
    );
  },

  updateBoard() {
    if (this.state.cars.length === 0) {
      return;
    } else {
      let newBoard = new Gridlock(this.state.cars);
      this.setState({ carBoard: newBoard });
      if (newBoard.wonLevel()){
        this.nextLevel();
      }
    }
  },

  render() {
    return (
      <div className='game-outline'>
        <div className='page-container'>
          <div className='button-headers'>
            <div className='button-headers level-head'>LEVEL</div>
          </div>
          <div className='button-container'>
            <div className='button-left previous pointer' onClick={this.previousLevel}><img src="../images/pointerleft.jpg"/></div>
            <div className='button-left level'>
              <h3>{this.state.level}</h3>
            </div>
            <div className='button-left next pointer' onClick={this.nextLevel}><img src="../images/pointerright.jpg"/></div>
            <div className='button-left move-counter'>
              <h4>{this.moveCounter}</h4>
            </div>
            <div className='button-right restart pointer' onClick={this.restartLevel}><img src="../images/redo.jpg"/></div>
          </div>
          <div className='game-container'>
            {this.renderBackGroundBoard()}
          </div>
          {this.renderCarBoard()}
        </div>
      </div>
    );
  }



});

module.exports = Game;
