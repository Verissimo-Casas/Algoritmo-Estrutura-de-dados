//algoritmo 39

const Keyboard = require("prompt-sync")();

let Value = Keyboard("Media aritmetica, Digite dois: ").toString(2).split(' ');
let X = parseInt(Value[0])
let Y = parseInt(Value[1])
console.log(`Media aritmetica: ${(X + Y) / 2}`);