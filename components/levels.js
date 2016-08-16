const Car = require('./car');

module.exports = {
  1: [new Car({
    color: "red",
    size: 2,
    pos: [2, 0],
    direction: "right"}), new Car({
    color: "green",
    size: 3,
    pos: [0, 3],
    direction: "up"})
    ],
  2: [new Car({
    color: "red",
    size: 2,
    pos: [2, 0],
    direction: "right"}), new Car({
    color: "green",
    size: 3,
    pos: [0, 2],
    direction: "right"}), new Car({
    color: "blue",
    size: 2,
    pos: [4, 1],
    direction: "right"}), new Car({
    color: "orange",
    size: 2,
    pos: [5, 1],
    direction: "right"})
    ]
};
