// 3. Cria uma função que calcule o fatorial de um número.

const num = parseInt(prompt("Digite um número para ver o fatorial."))
let fat = 1

function fatorial (num){
    for(let x = num; x >= 1; x--){
        console.log("fat = ", fat)
        console.log("x = ", x)
        console.log("fat = fat * x")
        fat = fat * x
        console.log("___fim do loop___")
    }
    return fat
}

fatorial(num)

alert(`O fatorial de ${num} é ${fat}.`)
