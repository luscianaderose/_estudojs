// 8. Crie uma função que receba dois números, intervalo inferior e intervalo superior,
// e retorne o somatório dos números contidos entre eles. Sua função deve retornar -1,
// caso os números sejam iguais ou o intervalo superior for menor que inferior ou o
// intervalo inferior for maior que o intervalo superior.

const soma = (inf, sup) => {
    if ((inf === sup) || (sup < inf)){
        return -1
    } else {
        let soma = 0
        for(let i = inf; i < (sup + 1); i++){
            console.log(i)
            soma += i
            console.log(`soma parcial: ${soma}`)
        }
        return soma
    }
}

console.log(`soma total: ${soma(2, 8)}`)

