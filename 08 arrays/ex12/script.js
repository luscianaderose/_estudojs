// Dado um array de pessoas com suas idades, agrupe-as por faixa etária 
// (exemplo: "menores de idade", "adultos", "idosos").

const pessoas = [
  { nome: "Ana", idade: 15 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 70 },
  { nome: "Daniela", idade: 22 },
  { nome: "Eduardo", idade: 12 }
]

// saida

/*
{
  "menores de idade": ["Ana", "Eduardo"],
  "adultos": ["Bruno", "Daniela"],
  "idosos": ["Carlos"]
}
*/

// const numbers = [1, 2, 3, 4, 5]
// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers) // [2, 4]


const menores = pessoas.filter(pessoa => pessoa.idade < 18)
console.log('menores: ', menores)

const menoresNomes = menores.map(menor => menor.nome)
console.log('menores nomes: ', menoresNomes)

const adultos = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.idade < 70)
console.log('adultos: ', adultos)

const adultosNomes = adultos.map(adulto => adulto.nome)
console.log('adultos nomes: ', adultosNomes)

const idosos = pessoas.filter(pessoa => pessoa.idade >= 70)
console.log('idosos: ', idosos)

const idososNomes = idosos.map(idoso => idoso.nome)
console.log('idosos nomes: ', idososNomes)

const pessoasNovo = {
  'menores de idade': menoresNomes,
  'adultos': adultosNomes,
  'idosos': idososNomes 
}

console.log('pessoasNovo: ', pessoasNovo)