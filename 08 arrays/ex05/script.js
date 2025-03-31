// 5. Crie um programa que receba um array de nomes 
// e um nome de pesquisa e retorne true ou false para dizer 
// se o nome específico está presente no array.

const nomes = ['Paula', 'Ana', 'Maria']
const pesquisa = 'Ana'

const temPesquisa = nomes.includes(pesquisa)
console.log(temPesquisa)