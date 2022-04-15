//import
const Prompt = require('prompt-sync')();

//Dados
let horaViagem = parseInt(Prompt());
let velocidadeMedia = parseInt(Prompt());

litros = ((velocidadeMedia * horaViagem) / 12).toFixed(3);

console.log(litros);