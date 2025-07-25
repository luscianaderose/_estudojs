// 5. Escreva uma função average que calcula a média dos valores passados como
// argumentos usando arguments.

function average (){
    const soma = Array.from(arguments).reduce((accumulator, current) => accumulator + current)
    console.log('lenght', arguments.length)
    return (soma / arguments.length)
}

console.log(average(5,2,8))