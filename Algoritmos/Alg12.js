//algoritmo 38

const Keyboard = require("prompt-sync")();

let Value = parseInt(Keyboard("Digite um: "));

X = (Value / 3).toFixed(3);

console.clear();

console.log(`Terca parte: ${X}`);