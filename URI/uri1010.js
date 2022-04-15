//import
const Prompt = require("prompt-sync")();

//Entrada && Processamento

let linha1 = Prompt().split(' ');
let codPessa1 = parseInt(linha1[0]);
let numeroPessa1 = parseInt(linha1[1]);
let valorFloat1 = parseFloat(linha1[2]);


let linha2 = Prompt().split(' ');
let codPessa2 = parseInt(linha2[0]);
let numeroPessa2 = parseInt(linha2[1]);
let valorFloat2 = parseFloat(linha2[2]);

let valorTotal = ((numeroPessa2 * valorFloat2) + (numeroPessa1 * valorFloat1))

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);