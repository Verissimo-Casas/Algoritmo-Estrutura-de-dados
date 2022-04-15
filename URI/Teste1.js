let listaFuncionarios = ['José', 'Ana', 'Luiza', 'Verissimo']
let listaIdades = [22, 19, 33, 23]

const exibeLista = (lista, descricao) => {
  e = ''
  for (let i = 0; i < lista.length; i++) {
    e += '\n' + descricao + lista[i]
  }

  return e
}


console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))

function cumprimentar() {
  return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

console.log(cumprimentaPessoa('Paula')); // “Oi gente! Meu nome é Paula”