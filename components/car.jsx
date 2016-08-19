const React = require('react');
const Car = require('../car.js');

const ReactCar = React.createClass({

  getInitialState() {
    return({ selected: false });
  },

  // componentDidMount() {
  //   this.token = window.addEventListener('click', this.toggleOff);
  // },

  // componentWillUnmount() {
  //   this.token.remove();
  // },

  toggleOff(e){
    console.log(e.target.attributes.color);
    if (this.state.selected && !e.target.attributes.color) {
      return this.setState({ selected: false });
    } else if (this.state.selected && e.target.attributes.color.nodeValue !== this.props.car.color) {
      return this.setState({ selected: false });
    }
    // if (this.state.selected) {
    //   if (e.target.attributes.color && e.target.attributes.color.nodeValue !== this.props.car.color)
    //   this.setState({ selected: false });
    // }
  },

  toggleSelected(e) {
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
    // this.token.remove();
    if (this.props.dir === "up") {
      car.pos = [this.props.pos[0] + 1, this.props.pos[1]];
      this.props.carMoved(car.color, car);
    } else if (this.props.dir === "right") {
      car.pos = [this.props.pos[0], this.props.pos[1] + 1];
      this.props.carMoved(car.color, car);
    }
  },

  backward(){
    const car = this.props.car;
    // this.token.remove();
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
    let color = this.props.car.color;
    let size = this.props.car.size * 100;
    let top = this.props.car.pos[0] * 100;
    let right = this.props.car.pos[1] * 100;
    let style;
    if (this.props.car.direction === "up") {
      style = { backgroundColor: color, height: size, width: 100, left: right, top: top};
    } else {
      style = { backgroundColor: color, height: 100, width: size, left: right, top: top };
    }
    return (
      <div color={this.props.car.color} className={`square-car pointer `} style={style} onClick={this.toggleSelected}>
        {this.showSelected()}
      </div>
    );
  }

});

module.exports = ReactCar;
