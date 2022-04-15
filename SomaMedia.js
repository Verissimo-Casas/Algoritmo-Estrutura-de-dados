let arrayNotas =
  [8.2
    , 6.3
    , 7.4
    , 7.5
    , 6.7
    , 6.4
    , 7.7
    , 6.9
    , 9.3
    , 7.5
    , 6.7
    , 8.6
    , 6.1
    , 7.9
    , 8.4
    , 6.4
    , 8.2
    , 7.1
    , 6.0
    , 9.4
    , 6.2
    , 7.5
    , 6.6
    , 6.8
    , 6.4
    , 8.7
    , 6.9
    , 8.2
    , 8.0
    , 6.1
    , 9.8
    , 7.6
    , 6.9
    , 9.3
    , 6.5
    , 7.1
    , 6.1
    , 6.2
    , 7.1
    , 8.4
    , 6.2
    , 7.9];

let PrimeiroAno = arrayNotas.slice(0, 12)
let SegundoAno = arrayNotas.slice(13, 25)
let TerceiroAno = arrayNotas.slice(26, arrayNotas.length)

const P1 = parseFloat((PrimeiroAno.reduce((total, currentElement) => total + currentElement) / 14)).toFixed(2)
const P2 = parseFloat((SegundoAno.reduce((total, currentElement) => total + currentElement) / 14)).toFixed(2)
const P3 = parseFloat((TerceiroAno.reduce((total, currentElement) => total + currentElement) / 14)).toFixed(2)

let MediaG = 7.01;
console.log(`Media Final P1: ${P1}, P2: ${P2}, P3: ${P3}, \nMedia Geral ${MediaG}`);

let Cfinal = ((((MediaG - 6) / (10 - 6)) * 10) + 10).toFixed(2)