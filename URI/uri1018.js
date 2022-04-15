//import
// const Prompt = require('prom-sync')();

//Dados

console.log(576 % 100);

let listaFuncionarios = ['José', 'Ana', 'Luiza'] /* cria uma lista com nomes */
let listaIdades = [22, 19, 33] /* cria uma lista com idades */

const exibeLista = (lista, descricao) => { /* inicia a criação de uma função chamada exibeLista que aceita dois 
parâmetros: lista e descrição */

  e = '' /* cria uma variável chamada e com conteúdo igual a uma cadeia de caracteres vazia */

  for (let i = 0; i < lista.length; i++) {
    /* início de um bloco ( laço ) de repetição. 
    Define a varável de controle i com valor inicial 0
    , define a condição que deve ser verdadeira para que as instruções dentro do laço sejam executadas ( 
    elas são executadas se o valor de i for menor que o comprimento da lista, como cada lista tem 3 
    elementos então se i for menor que 3 o bloco será executado )
    , define o incremento da variável de controle ( ao final do laço o valor da variável aumenta em 1 
    ( i++ )  ). Então o bloco será executado 3 vezes: na primeira com i=0, ao final i recebe mais um e fica 
    com valor = 1, na segunda com valor 1, incrementa e na terceria com valor = 2 */

    e += '\n' + descricao + lista[i]
    /* Adiciona uma nova linha na cadeia de caracteres
    , o valor passado no parâmetro descrição e o elemento da lista. 
    Na primeira execução, elemento 0 ( José ), na segunda execução, elemento 1 ( Ana ), etc */

    return e
    /* Isto é o que falta no código original. A instrução return indica o valor retornado pela função. Esta 
    função retorna as linhas com os elementos e descrições */

  } /* termina o laço de repetição */

} /* termina a criação da função exibeLista */

console.log(exibeLista(listaFuncionarios, 'Funcionário: ')) /* Exibe mensagem com os elementos e descrições 
retornados pela função exibeLista */
console.log(exibeLista(listaIdades, "Idades: ")) /* Exibe mensagem com os elementos e descrições retornados 
pela função exibeLista */