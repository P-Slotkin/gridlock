const Gridlock = require('../gridlock');
const Car = require('./car');
const React = require('react');
const Levels = require('./levels');

const Game = React.createClass({
  getInitialState() {
    const board = new Gridlock.Board(Levels[1]);
    return ({ level: 1, board: board});
  },

  restartLevel() {
    this.setState({ board: new Gridlock.Board(Levels[this.state.level])});
  }



});
