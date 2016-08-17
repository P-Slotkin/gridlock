const React = require('react');
const Car = require('../car.js');

const ReactCar = React.createClass({

  getInitialState() {
    let posX = this.props.pos[0];
    let posY = this.props.pos[1];
    return({ selected: false, posX: posX, posY: posY });
  },

  toggleSelected() {
    if (this.state.selected) {
      this.setState({ selected: false });
    } else {
      this.setState({ selected: true });
    }
  },

  inBounds(n) {
    if (n < 6 && n >= 0) {
      return true;
    } else {
      return false;
    }
  },

  forward(){
    const car = this.props.car;
    console.log(car);
    if (this.props.dir === "up") {
      this.setState({ posX: this.state.posX + 1 });
      car.pos = [this.props.pos[0] + 1, this.props.pos[1]];
      this.props.carMoved(car.color, car);
    } else if (this.props.dir === "right") {
      let newY = this.state.posY + 1;
      car.pos = [this.props.pos[0], this.props.pos[1] + 1];
      this.props.carMoved(car.color, car);
      this.setState({ posY: newY });
    }
  },

  backward(){
    const car = this.props.car;
    console.log('backwards');
    if (this.props.dir === "up" ) {
      car.pos = [this.props.pos[0] - 1, this.props.pos[1]];
      this.props.carMoved(car.color, car);
      this.setState({ posX: this.state.posX - 1 });
    } else if (this.props.dir === "right") {
      car.pos = [this.props.pos[0], this.props.pos[1] - 1];
      this.props.carMoved(car.color, car);
      this.setState({ posY: this.state.posY - 1 });
    }
  },

  showDownArrow() {
    let position = [this.state.posX, this.state.posY];
    let size = this.props.size;
    if (this.inBounds(position[0] + size) &&
        this.props.board.grid[position[0] + size + 1][position[1]] === '-') {
      return (<div onClick={this.forward} className={`downarrow${size}`}>
        <img className={`pointer downarrow${size}`}  src='../images/arrowdown.jpg' />
      </div>);
    }
  },

  showUpArrow() {
    let position = [this.state.posX, this.state.posY];
    let size = this.props.size;
    if (this.inBounds(position[0] - 1) &&
      this.props.board.grid[position[0] - 1][position[1]] === '-') {
      return (<div className='uparrow'>
        <img className='pointer' onClick={this.backward} src='../images/arrowup.jpg' />
      </div>);
    }
  },

  showRightArrow() {
    let position = [this.state.posX, this.state.posY];
    let size = this.props.size;
    if (this.inBounds(position[1] + size) &&
        this.props.board.grid[position[0]][position[1] + size + 1] === '-') {
      return (<div className={`rightarrow ${this.props.size} pointer`}>
        <img className='pointer' onClick={this.forward} src='../images/arrowright.jpg' />
      </div>);
    }
  },

  showLeftArrow() {
    let position = [this.state.posX, this.state.posY];
    let size = this.props.size;
    if (this.inBounds(position[1] - 1) &&
        this.props.board.grid[position[0]][position[1] - 1] === '-') {
      return (<div className={`leftarrow ${this.props.size} pointer`}>
        <img className='pointer' onClick={this.backward} src='../images/arrowleft.jpg' />
      </div>);
    }
  },

  showSelected() {
    if (this.state.selected) {
      if (this.props.dir === "up") {
        return(
          <div>
            {this.showUpArrow()}
            {this.showDownArrow()}
          </div>
        );
      } else if (this.props.dir === "right") {
        return(
          <div>
            {this.showLeftArrow()}
            {this.showRightArrow()}
          </div>
        );
      }
    }
  },

  render: function() {
    return (
      <div className="square car pointer" onClick={this.toggleSelected}>
        {this.showSelected()}
      </div>
    );
  }

});

module.exports = ReactCar;
