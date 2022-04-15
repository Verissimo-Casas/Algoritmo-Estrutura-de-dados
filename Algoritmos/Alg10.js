//algoritmo 36
const Keyboard = require("prompt-sync")();


let Soma = Keyboard("Digite dois valores: ").split(' ');

let value1 = parseInt(Soma[0]);
let value2 = parseInt(Soma[1]);
console.log(`Soma: ${ value1 + value2}`);