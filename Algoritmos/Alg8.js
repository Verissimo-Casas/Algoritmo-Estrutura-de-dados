const Keyboard = require("prompt-sync")();

// Ler nome, endereço e telefone e imprimi-los. 
let name = Keyboard("Digite seu nome: ");
let address = Keyboard("Digite sei indereço: ");
let phoneNumber = Keyboard("Digite seu numero de telefone: ");

console.clear();

console.log(`Nome: ${name}\nEndereço: ${address}\nNumero: ${phoneNumber}`);