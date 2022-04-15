//import
const Prompt = require('prompt-sync')();

//Entrada
let ValorInt = parseInt(Prompt());
let ValorFloat = parseFloat(Prompt()).toFixed(1);

//Processamento

combusTotal = (ValorInt / ValorFloat).toFixed(3);

//Saida
console.log(`${combusTotal} km/l`);