const Game = require('./components/game.jsx');
const React = require('react');
const ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
	  <Game />,
	  document.getElementById('main')
  );
});
