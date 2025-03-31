// 6. Crie um programa que lê três números inteiros e classifique qual é o maior.

const a = parseInt(prompt("Digite o 1º número."))
const b = parseInt(prompt("Digite o 2º número."))
const c = parseInt(prompt("Digite o 3º número."))

if (a > b && a > c) {
    alert(a + " é maior do que " + b + " e " + c)
} else if (b > a && b > c){
    alert(b + " é maior do que " + a + " e " + c)
} else {
    alert(c + " é maior do que " + a + " e " + b)
}




