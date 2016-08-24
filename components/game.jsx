const Gridlock = require('../gridlock.js');
const Car = require('../car.js');
const React = require('react');
const Levels = require('./levels.js');
const ReactCar = require('./car.jsx');
const Optimal = require('./optimal.js');

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
    let modal = document.getElementById('victory');
    let finishedModal = document.getElementById('finished');
    modal.style.display = "none";
    finishedModal.style.display = "none";
    this.moveCounter = 0;
    let cars = this.makeCars(Levels[this.state.level]);
    this.setState({ carBoard: new Gridlock(cars), cars: cars });
  },

  nextLevel() {
    let modal = document.getElementById('victory');
    modal.style.display = "none";
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
        } else if (space === '>') {
          return <div className='square empty'><img src='../images/directarrow.jpg'/></div>;
        } else if (space === '+') {
          return <div className='square empty-winner'><img src='../images/directarrow.jpg'/></div>;
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

  showInstructions(e){
    let modal = document.getElementById('instructions');
    modal.style.display = "block";
    modal.onclick = function(e) {
        modal.style.display = "none";
        e.stopPropagation();
    };
  },

  showStars(){
    if (this.moveCounter === Optimal[this.state.level]) {
      return (<img src='../images/3stars.jpg' />);
    } else if ((this.moveCounter - Optimal[this.state.level]) * 3 <= Optimal[this.state.level]) {
      return (<img src='../images/2stars.jpg' />);
    } else {
      return (<img src='../images/1stars.jpg' />);
    }
  },

  showVictory(){
    if (this.state.level < 20) {
      let modal = document.getElementById('victory');
      modal.style.display = "block";
      modal.onclick = function(e) {
        if (e.target == modal) {
          e.stopPropagation();
        }
      };
    } else {
      let modal = document.getElementById('finished');
      modal.style.display = "block";
      modal.onclick = function(e) {
        if (e.target == modal) {
          e.stopPropagation();
        }
      };
    }
  },

  updateBoard() {
    if (this.state.cars.length === 0) {
      return;
    } else {
      let newBoard = new Gridlock(this.state.cars);
      this.setState({ carBoard: newBoard });
      if (newBoard.wonLevel()){
        this.showVictory();
      }
    }
  },

  render() {
    return (
      <div className='game-outline'>
        <div className='page-container'>
          <div id="instructions" className="instructions">
            <div className="modal-content shorter">
              <h1>How To Play:</h1>
              <div className='modal-list-box'>
                <h6>Select cars and then a direction to move them. Try to move the red car all the way to the right!</h6>
              </div>
            </div>
          </div>
          <div id="victory" className="victory">
            <div className="modal-content">
              <div className='star-container'>
                {this.showStars()}
              </div>
              <h1>Complete!</h1>
              <div className='modal-list-box'>
                <div className='modal-list-left'>
                  <p className="pleft">Level</p>
                  <p className="pleft">Moves</p>
                  <p className="pleft">Optimal</p>
                </div>
                <div className='modal-list-center'>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                </div>
                <div className='modal-list-right'>
                  <p className="redp">{this.state.level}</p>
                  <p id='check' className="redp">{this.moveCounter}</p>
                  <p className="redp">{Optimal[this.state.level]}</p>
                </div>
              </div>
              <div className='modal-buttons close'>
                <div className='modal-button-next pointer' onClick={this.nextLevel}><img src="../images/modalnext.jpg"/></div>
                <div className='modal-button-restart restart pointer' onClick={this.restartLevel}><img src="../images/redo.jpg"/></div>
              </div>
            </div>
          </div>
          <div id="finished" className="finished">
            <div className="modal-content">
              <div className='star-container'>
                {this.showStars()}
              </div>
              <h1>Finished!</h1>
              <div className='modal-list-box'>
                <div className='modal-list-left'>
                  <p className="pleft">Level</p>
                  <p className="pleft">Moves</p>
                  <p className="pleft">Optimal</p>
                </div>
                <div className='modal-list-center'>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                </div>
                <div className='modal-list-right'>
                  <p className="redp">{this.state.level}</p>
                  <p id='check' className="redp">{this.moveCounter}</p>
                  <p className="redp">{Optimal[this.state.level]}</p>
                </div>
              </div>
              <div className='modal-buttons close'>
                <p>More levels coming soon!</p>
                <div className='modal-button-restart restart pointer' onClick={this.restartLevel}><img src="../images/redo.jpg"/></div>
              </div>
            </div>
          </div>
          <div className='button-headers'>
            <div className='button-headers level-head'>LEVEL|MOVES</div>
          </div>
          <div className='button-container'>
            <div className='button-left previous pointer' onClick={this.previousLevel}><img src="../images/pointerleft.jpg"/></div>
            <div className='button-left level'>
              <h3>{this.state.level}</h3>
            </div>
            <div className='button-left next pointer' onClick={this.nextLevel}><img src="../images/pointerright.jpg"/></div>
            <div className='button-left'>
              <h4 className='blue'>|</h4>
            </div>
            <div className='button-left move-counter'>
              <h4>{this.moveCounter}</h4>
            </div>
            <div className='button-right restart pointer' onClick={this.restartLevel}><img src="../images/redo.jpg"/></div>
            <div className='button-right instruct pointer' onClick={this.showInstructions}><img src="../images/question.jpg"/></div>
          </div>
          <div className='game-container'>
            {this.renderBackGroundBoard()}
          </div>
          {this.renderCarBoard()}
          <div className='media-buttons'>
            <div className='button-left media pointer'><a href="https://www.linkedin.com/in/peter-slotkin-183738126?trk=nav_responsive_tab_profile"><img src="../images/linked.jpg"/></a></div>
            <div className='button-left media pointer'><a href="https://github.com/P-Slotkin"><img src="../images/git.jpg"/></a></div>
            <div className='button-right media pointer'><a href="http://peterslotkin.me/"><img src="../images/portfolio.jpg"/></a></div>
          </div>
        </div>
      </div>
    );
  }



});

module.exports = Game;
