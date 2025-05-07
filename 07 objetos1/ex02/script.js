// 2. Crie um objeto representando uma pessoa. Em seguida, crie uma função que modifique 
// a idade dessa pessoa usando o operador spread.

const pessoa = {nome: 'José', idade: 33}

function modificarIdade(objeto, novaIdade){
    return {...objeto, idade: novaIdade}
}

console.log(pessoa)
console.log(modificarIdade(pessoa, 34))