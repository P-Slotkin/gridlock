const Car = require('../car');

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
    direction: "up"}), new Car({
    color: "blue",
    size: 2,
    pos: [4, 1],
    direction: "right"}), new Car({
    color: "orange",
    size: 2,
    pos: [5, 1],
    direction: "right"})
  ],
  3: [new Car({
    color: "red",
    size: 2,
    pos: [2, 0],
    direction: "right"}), new Car({
    color: "green",
    size: 3,
    pos: [0, 2],
    direction: "up"}), new Car({
    color: "blue",
    size: 3,
    pos: [4, 0],
    direction: "right"}), new Car({
    color: "orange",
    size: 3,
    pos: [5, 0],
    direction: "right"}), new Car({
    color: "pink",
    size: 2,
    pos: [3, 4],
    direction: "up"}), new Car({
    color: "teal",
    size: 2,
    pos: [1, 4],
    direction: "right"})
    ]
};

// module.exports {
//
//   const Levels = function(n){
//     if (level === 1) {
//       return = [new Car({
//         color: "red",
//         size: 2,
//         pos: [2, 0],
//         direction: "right"}), new Car({
//         color: "green",
//         size: 3,
//         pos: [0, 3],
//         direction: "up"})];
//     } else if (level === 2) {
//       return = [new Car({
//         color: "red",
//         size: 2,
//         pos: [2, 0],
//         direction: "right"}), new Car({
//         color: "green",
//         size: 3,
//         pos: [0, 2],
//         direction: "right"}), new Car({
//         color: "blue",
//         size: 2,
//         pos: [4, 1],
//         direction: "right"}), new Car({
//         color: "orange",
//         size: 2,
//         pos: [5, 1],
//         direction: "right"})
//       ];
//     }
//   }
// }

// function generateLevel(level) {
//   if (level === 1) {
//     return = [new Car({
//       color: "red",
//       size: 2,
//       pos: [2, 0],
//       direction: "right"}), new Car({
//       color: "green",
//       size: 3,
//       pos: [0, 3],
//       direction: "up"})];
//   } else if (level === 2) {
//     return = [new Car({
//       color: "red",
//       size: 2,
//       pos: [2, 0],
//       direction: "right"}), new Car({
//       color: "green",
//       size: 3,
//       pos: [0, 2],
//       direction: "right"}), new Car({
//       color: "blue",
//       size: 2,
//       pos: [4, 1],
//       direction: "right"}), new Car({
//       color: "orange",
//       size: 2,
//       pos: [5, 1],
//       direction: "right"})
//     ];
//   }
// };

// module.exports = Levels;
