// Exercício 8: Fatorial
// Objetivo: Criar uma função que calcula o fatorial de um número.

function fatorial(n) {
    let fat = 1
    let conc = ''
    for (let i = n; i > 1; i--){
        fat *= i
        conc += `${i} * `
    }
    return `${fat} (${conc}1)`
}

console.log(fatorial(5));
// Saída esperada: 120 (5 * 4 * 3 * 2 * 1)