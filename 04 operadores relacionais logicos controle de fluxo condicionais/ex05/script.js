// 5. Crie um programa que lê dois números inteiros e classifique qual é o maior.

const a = parseInt(prompt("Digite um número."))
const b = parseInt(prompt("Digite outro número."))

if (a > b){
    alert(a + " é maior.")
} else if (b > a){
    alert(b + " é maior.")
} else {
    alert("São iguais.")
}
