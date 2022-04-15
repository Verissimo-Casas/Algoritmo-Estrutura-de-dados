//import
const Promp = require("prompt-sync")();

//Tipos de dados 

const PesoA = 3.5; 
const PesoB = 7.5;

//Entrada de dados

let Valor1 = parseFloat(Promp());
let Valor2 = parseFloat(Promp());

//Processamentos 

let NotaA = Valor1.toFixed(1);
let NotaB = Valor2.toFixed(1);

let Mx = (((NotaA * PesoA) + (NotaB * PesoB)) / 11);
let Mr = Mx.toFixed(5);

//Saida

console.log(`MEDIA = ${Mr}`);