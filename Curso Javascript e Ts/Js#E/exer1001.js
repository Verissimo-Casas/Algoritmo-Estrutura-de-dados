const Kyaboard = require("prompt-sync")();

let name = Kyaboard("Your name: ");

console.clear();

console.log(`My name ${name}. I'm studying javascript at 10 am`);