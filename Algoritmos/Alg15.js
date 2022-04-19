//algoritmo 41

const Keyboard = require('prompt-sync')();

//Entrada

let arrayNotas = Keyboard('Digite quatro numeros: ').split(' ')

let P = Array.from(arrayNotas, (n) => Number(n));

let media = ((P[0] * 2 + P[1] * 3 + P[2] * 4 + P[3] * 1) / 10).toFixed(2);

console.log(media);