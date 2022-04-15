const Keyboard = require("prompt-sync")();

let line = Keyboard("Digite dois numeros: ").split(' ');

console.log(line);