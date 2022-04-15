const Keyboard = require("prompt-sync")();

let XYnumber = Keyboard("Digite dois numero: ").split(' ');

let num1 = parseInt(XYnumber[0]);
let num2 = parseInt(XYnumber[1]);
console.log(`Soma: ${num1 + num2}`);