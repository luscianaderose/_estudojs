// 8. Crie uma função mergeObjects que aceita um número variável de objetos como
// argumentos e retorna um único objeto mesclando todas as propriedades.

function mergeObjects (...args){
    return { ...args}
}

const obj1 = { carro: 'vermelho'}
const obj2 = { bicicleta: 'amarela'}

console.log(mergeObjects(obj1, obj2))