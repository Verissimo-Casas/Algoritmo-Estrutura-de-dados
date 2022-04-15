//algoritmo 37

const Keyboard = require("prompt-sync")();

let twoValue = Keyboard("Digite dois: ").split(' ');

let X = parseInt(twoValue[0]);
let Y = parseInt(twoValue[1]);

console.clear();

console.log(`Produto: ${X * Y}`);