const Keyboard = require('prompt-sync')();

let input = parseInt(Keyboard("Digite um numero: "));

console.log(`\nNumero: ${input}\nSuc: ${input - 1}\nAnt: ${input + 1}`);