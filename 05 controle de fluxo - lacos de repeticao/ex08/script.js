// 8. Crie um programa que calcule e imprima o fatorial dos números entre 1 e 10.

// USANDO FOR
console.log("*** FATORIAIS *** Ex 8 usando FOR")
for(let num = 5; num >= 1; num--){
    let fat = 1
    for(let x = num; x >= 1; x--){
        console.log("fat = ", fat)
        console.log("x = ", x)
        console.log("fat = fat * x")
        fat = fat * x
        console.log("fat = ", fat)
        console.log("___fim do loop___")
    }
    console.log(`RESULTADO: ${num} -> ${fat}\n\n`)
}

// USANDO WHILE
// console.log("*** FATORIAIS *** Ex 8 usando WHILE")
// let num = 5
// while(num >= 1){
//     let x = num
//     fat = 1
//     while(x >= 1){
//         console.log("___início do loop___")
//         console.log("fat = ", fat)
//         console.log("x = ", x)
//         console.log("fat = fat * x")
//         fat = fat * x
//         console.log("fat = ", fat)
//         console.log("x--")
//         x--
//         console.log("x = ", x)
//         console.log("___fim do loop___")
//     }
//     console.log(`##################### RESULTADO: ${num} -> ${fat}`)
//     console.log("num--")
//     num--
//     console.log("num = ",num)
// }
