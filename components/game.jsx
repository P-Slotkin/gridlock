const Gridlock = require('../gridlock.js');
const Car = require('../car.js');
const React = require('react');
const Levels = require('./levels.js');
const ReactCar = require('./car.jsx');

const Game = React.createClass({
  getInitialState() {
    const board = new Gridlock(Levels[1]);
    return ({ level: 1, board: board, cars: Levels[1]});
  },

  restartLevel() {
    this.setState({ board: new Gridlock(Levels[this.state.level]), cars: Levels[this.state.level] });
  },

  nextLevel() {
    let nextLevel = this.state.level + 1;
    if (this.state.level < 20) {
      this.setState({ board: new Gridlock(Levels[nextLevel]), level: nextLevel, cars: Levels[nextLevel] });
    }
  },

  previousLevel() {
    let previousLevel = this.state.level - 1;
    if (this.state.level > 1) {
      this.setState({ board: new Gridlock(Levels[previousLevel]), level: previousLevel, cars: Levels[previousLevel] });
    }
  },

  carMoved(color, newCar){
    let carsMissingOne = this.state.cars.filter((car) => {
      return car.color !== color;
    });
    carsMissingOne.push(newCar);
    this.setState({ cars: carsMissingOne });
    this.updateBoard();
  },

  renderBoard() {
    let that = this;
    let htmlBoard = this.state.board.grid.map((row) => {
      return row.map((space) => {
        if (space === '-') {
          return <div className='square empty'/>;
        } else if (space instanceof Object) {
          let car = <ReactCar carMoved={that.carMoved} car={space} board={that.state.board} color={space.color} size={space.size} pos={space.pos} dir={space.direction}/>;
          return car;
        } else if (space.length > 1) {
          let color = {backgroundColor: `${space}`}
          return <div className="square filled pointer" style={color}/>;
        }
      });
    });
    return htmlBoard;
  },

  updateBoard() {
    if (this.state.cars.length === 0) {
      return;
    } else {
      let newBoard = new Gridlock(this.state.cars)
      this.setState({ board: newBoard });
      if (newBoard.wonLevel()){
        this.nextLevel();
      }
    }
  },

  render() {
    // if (this.state.board.wonLevel()){
    //   this.nextLevel();
    // }
    return (
      <div className='page-container'>
        <div className='button pointer' onClick={this.restartLevel}>Restart</div>
        <div className='button pointer' onClick={this.previousLevel}>Previous</div>
        <div className='button pointer' onClick={this.nextLevel}>Next</div>
        <div className='game-container'>
          {this.renderBoard()}
        </div>
      </div>
    );
  }



});

module.exports = Game;
