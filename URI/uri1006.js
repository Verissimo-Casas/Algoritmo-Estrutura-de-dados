//import
const Promp = require("prompt-sync")();

//Tipos de dados 

const PesoA = 2; 
const PesoB = 3;
const PesoC = 5;

//Entrada de dados

let Valor1 = parseFloat(lines.shift());
let Valor2 = parseFloat(lines.shift());
let Valor3 = parseFloat(lines.shift());

// let Valores = p


//Processamentos 

let NotaB = Valor2.toFixed(1);
let NotaC = Valor3.toFixed(1);
let NotaA = Valor1.toFixed(1);

let Mx = (((NotaA * PesoA) + (NotaB * PesoB) + (NotaC * PesoC)) / 10);
let Mr = Mx.toFixed(1);

//Saida

console.log(`MEDIA = ${Mr}`);