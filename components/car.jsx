const React = require('react');
const Car = require('../car.js');

const ReactCar = React.createClass({

  getInitialState() {
    return({ selected: false });
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
    if (this.props.dir === "up") {
      car.pos = [this.props.pos[0] + 1, this.props.pos[1]];
      this.props.carMoved(car.color, car);
    } else if (this.props.dir === "right") {
      let newY = this.state.posY + 1;
      car.pos = [this.props.pos[0], this.props.pos[1] + 1];
      this.props.carMoved(car.color, car);
    }
  },

  backward(){
    const car = this.props.car;
    if (this.props.dir === "up" ) {
      car.pos = [this.props.pos[0] - 1, this.props.pos[1]];
      this.props.carMoved(car.color, car);
    } else if (this.props.dir === "right") {
      car.pos = [this.props.pos[0], this.props.pos[1] - 1];
      this.props.carMoved(car.color, car);
    }
  },

  showDownArrow() {
    let position = this.props.pos;
    let size = this.props.size;
    if (this.inBounds(position[0] + size) &&
        (this.props.board.grid[position[0] + size][position[1]] === '-')) {
      return (<div className={`downarrow${size}`}>
        <div className={`pointer downarrow${size}-image`}> <img  onClick={this.forward} src='../images/arrowdown.jpg' /> </div>
      </div>);
    }
  },

  showUpArrow() {
    let position = this.props.car.pos;
    let size = this.props.size;
    if (this.inBounds(position[0] - 1) &&
      this.props.board.grid[position[0] - 1][position[1]] === '-') {
      return (<div className={`uparrow`}>
        <img className={`pointer uparrow`} onClick={this.backward} src='../images/arrowup.jpg' />
      </div>);
    }
  },

  showRightArrow() {
    let position = this.props.car.pos;
    let size = this.props.size;
    if (this.inBounds(position[1] + size) &&
        this.props.board.grid[position[0]][position[1] + size] === '-') {
      return (<div className={`rightarrow${this.props.size} pointer`}>
        <img className={`pointer rightarrow${size}-image`} onClick={this.forward} src='../images/arrowright.jpg' />
      </div>);
    }
  },

  showLeftArrow() {
    let position = this.props.car.pos;
    let size = this.props.size;
    if (this.inBounds(position[1] - 1) &&
        this.props.board.grid[position[0]][position[1] - 1] === '-') {
      return (<div className={`leftarrow pointer`}>
        <img className='pointer leftarrow' onClick={this.backward} src='../images/arrowleft.jpg' />
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
    let color = {backgroundColor: this.props.car.color};
    let image = `../images/${this.props.car.color}.jpg`
    // let size = this.props.car.size * 100;
    // let direction;
    // if (this.props.car.direction === "up") {
    //   direction = {background-color:color,height:`${size}px`,width: '100px'};
    // } else {
    //   direction = {background-color:color,height:`100px`,width:`${size}px`;}
    // }
    return (
      <div className={`square car-${this.props.car.direction}-${this.props.car.size} pointer `} style={color} onClick={this.toggleSelected}>
        {this.showSelected()}
      </div>
    );
  }

});

module.exports = ReactCar;
