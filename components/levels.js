const Car = require('../car');

module.exports = {
  1: [["red",2,[2, 0],"right"], ["green",3,[0, 3],"up"]],
  2: [[ "red", 2, [2, 0], "right"],
    [ "green", 3, [0, 2], "up"],
    [ "blue", 2, [4, 1], "right"],
    [ "orange", 2, [5, 1], "right"]],
  3: [[ "red", 2, [2, 0], "right"],
    [ "green", 3, [0, 2], "up"],
    [ "blue", 3, [4, 0], "right"],
    [ "orange", 3, [5, 0], "right"],
    [ "pink", 2, [3, 4], "up"],
    [ "teal", 2, [1, 4], "right"]]
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
