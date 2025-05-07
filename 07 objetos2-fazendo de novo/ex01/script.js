// 1. Crie uma função que receba dois objetos e retorne um novo objeto 
// com todas as propriedades dos dois objetos usando o operador spread.

//errado
// function criarObjeto(nome, idade){
//     objetoOriginal = {nome, idade}
//     objetoNovo = {...objetoOriginal}
//     return objetoNovo
// }

// console.log(criarObjeto('aline', 29))

function combinarObjetos(objeto1, objeto2){
    const objetosCombinados = {...objeto1, ...objeto2}
    return objetosCombinados
}

const fruta = { nome1: 'banana', qtd1: 3}
const legume = { nome2: 'abobrinha', qtd2: 1}

console.log(combinarObjetos(fruta, legume))