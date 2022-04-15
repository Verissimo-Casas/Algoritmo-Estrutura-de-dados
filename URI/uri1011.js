//import
const Prompt = require("prompt-sync")();

//Tipos de Dados
const π = 3.14159;
const y = 4 / 3;

//Entrada
let raio = parseFloat(Prompt()).toFixed(4);

let VOLUME = y * π * (raio * raio * raio);

//Saida
console.log(`VOLUME = ${VOLUME.toFixed(3)}`);