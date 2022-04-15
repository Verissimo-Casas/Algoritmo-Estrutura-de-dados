//import
const Prompt = require("prompt-sync")();

//Tipos de dado
const π = 3.14159;

//Entrada
let line = Prompt().split(' ');
let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);

//Processamentos

// a) a área do triângulo retângulo que tem A por base e C por altura.
let areaTri = ((A * C) / 2).toFixed(3);

// b) a área do círculo de raio C.
let areaCircu = (π * (C * C)).toFixed(3);

// c) a área do trapézio que tem A e B por bases e C por altura. 
let areaTrape = (((A + B) * C) / 2).toFixed(3);

// d) a área do quadrado que tem lado B. 
let areaQuadra = (B * B).toFixed(3);

// e) a área do retângulo que tem lados A e B. 
let areaRetang = (A * B).toFixed(3);

//Saida
console.log(`TRIANGULO: ${areaTri}\nCIRCULO: ${areaCircu}\nTRAPEZIO: ${areaTrape}\nQUADRADO: ${areaQuadra}\nRETANGULO: ${areaRetang}`);