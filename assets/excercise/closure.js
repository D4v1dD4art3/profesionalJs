// Closures
// printColor
// immediately-invoked function expressions IIFE
// con los closure nos permiten limitar el alcance de una funcion
// (function() {
//   let color = 'green'
//   function printColor() {
//     console.log(color);
//   }
//   printColor();
// })()

// funciones que regresan funciones
// function makeColorPrinter(color) {
//   let colorMessage = `the color is ${color}`;
//   return function () {
//     console.log(colorMessage);
//   };
// }
// let greenColorPrinter = makeColorPrinter("green");
// console.log(greenColorPrinter());

// // variables privadas
// const counter = {
//   count: 3,
// };
// console.log(counter.count);
function makeCounter(n) {
  let count = n;
  return {
    increase: function () {
      return count++;
    },
    decrease: function () {
      return count--;
    },
    getCounter: function () {
      return count;
    },
  };
}
let counter = makeCounter(7);
// console.log("the counter is", counter.getCounter());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log("the counter is", counter.getCounter());
// console.log(counter.increase());
// console.log("the counter is", counter.getCounter());
// console.log(counter.increase());
// console.log(counter.increase());
// console.log("the counter is", counter.getCounter());
// console.log((counter.count = 10));
// console.log("the counter is", counter.getCounter());

// for (var line = "#"; line.length < 8; line += "#")
// console.log(line);
function multiplyTheFactor(factor) {
  return (number) => number * factor;
}
let twice = multiplyTheFactor(2);
// console.log(twice(5));
