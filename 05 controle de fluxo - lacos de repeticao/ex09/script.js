// 9. Crie um programa que determine e imprima os números primos entre 1 e 20.

// USANDO FOR
// console.log("------ NÚMEROS PRIMOS -- Exercício 9 usando FOR ------")

// const num = 20
// console.log(`___  Valor: ${num}  ___`)


// for(let n = num; n > 2; n--){

//     console.log(`\n# analisando ${n}`)

//     for(let i = n - 1; i > 1; i--){
//         console.log(`n(${n}) % i(${i}) resto: ${n % i}`)

//         if(n % i == 0){
//             console.log(`O número ${n} NÃO é primo.`)
//             break
//         }

//         if(i === 2){
//             console.log(`O número ${n} É PRIMO.`)
//         }
//     }
// }
// console.log(`\nO número 2 É PRIMO, é o único número primo que é par.`)
// console.log(`\nO número 1 NÃO é considerado primo pois só tem 1 divisor: ele mesmo.`)



// USANDO WHILE
console.log(":::::::::::::::::::::::::::::::::::::::::::::::::\n::: NÚMEROS PRIMOS - Exercício 9 usando WHILE :::")

const num = 6
let n = num
let i = n

console.log(`_________________________________________________\nVALOR: ${num}`)

while(n > 2){
    console.log(`\n# Analisando: ${n}`)
    i = n

    while(i > 2){
        i--
        console.log(`n(${n}) % i(${i}) resto: ${n % i}`)

        if(n % i == 0){
            console.log(`O número ${n} NÃO é primo.`)
            break
        }

        if(i == 2){
            console.log(`O número ${n} É PRIMO.`)
        }
    }
    n-- 
}

console.log(`\nO número 2 É PRIMO; é o único número primo que é par.`)
console.log(`\nO número 1 NÃO é considerado primo pois só tem 1 divisor: ele mesmo.`)
