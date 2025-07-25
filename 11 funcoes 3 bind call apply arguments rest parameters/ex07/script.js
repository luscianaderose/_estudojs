// 7. Escreva uma função sumAll que aceita um número variável de argumentos e
// retorna a soma de todos eles. OBS: Use rest parameters

function sumAll (...args){
    return args.reduce((accumulator, current) => accumulator + current)
}

console.log(sumAll(4,1,5))