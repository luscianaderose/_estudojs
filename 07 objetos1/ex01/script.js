// 1. Crie uma função que receba dois objetos e retorne um novo objeto 
// com todas as propriedades dos dois objetos usando o operador spread.

function juntar(a, b){
    return {...a, ...b}
}

const camiseta = {cor: 'vermelho', tamanho: 'grande'}
const bermuda = {cor2: 'azul', tamanho2: 'pequeno'}

console.log(juntar(camiseta, bermuda))