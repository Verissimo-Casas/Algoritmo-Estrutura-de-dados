//algoritmo 40
const Keyboard = require("prompt-sync")();

//Entrada
let dividendo = parseFloat(Keyboard("Entre com o dividendo: "));
let divisor = parseFloat(Keyboard("Entre com o divisor: "));

//Processamento
let Quociente = dividendo / divisor;
let Resto = dividendo % divisor;

//Saida
console.log(`
dividendo: ${dividendo} 
divisor: ${divisor}
quociente: ${Quociente}
resto: ${Resto}
`);