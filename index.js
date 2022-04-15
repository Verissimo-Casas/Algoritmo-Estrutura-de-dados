const teclado = require('prompt-sync')();

let input = teclado();

(input) => {
  console.log(`Valor teclador ${input}`);
}