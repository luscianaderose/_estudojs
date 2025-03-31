// 6. Crie um programa que calcule o fatorial de um número lido.

const num = parseInt(prompt("Digite um número para ver o fatorial."))

// USANDO FOR
let fat = 1
for(let x = num; x >= 1; x--){
    console.log("fat = ", fat)
    console.log("x = ", x)
    console.log("fat = fat * x")
    fat = fat * x
    console.log("___fim do loop___")
}

alert(`O fatorial de ${num} é ${fat}. Ex 6 usando FOR.`)

// let x = 5; x <= 5; x = x * 5


// USANDO WHILE
// let x = num
// let fat = 1
// while(x >= 1){
//     console.log("fat = ", fat)
//     console.log("x = ", x)
//     console.log("fat = fat * x")
//     console.log("x--")
//     fat = fat * x
//     x--
//     console.log("___fim do loop___")
// }

alert(`O fatorial de ${num} é ${fat}. Ex 6 usando WHILE.`)