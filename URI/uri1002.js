let input = require('fs').readFileSync('Arquivo.txt');
let lines = input.split('\n');

//Tipos de Dados
const π = 3.14159;
let raio = parseFloat(lines.shift());

//Processamento
const area1 = (π * (raio * raio));
const area = area1.toFixed(4);
//Saida

console.log(`A=${area}`);