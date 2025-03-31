// 1. Crie um programa que lê duas notas de prova, calcule a média 
// e imprima a palavra 'APROVADO(A)' se a média for maior ou igual a 7 e 
// 'REPROVADO(A)' se a média for menor de 7.

const n1 = parseFloat(prompt("Digite a primeira nota."))
const n2 = parseFloat(prompt("Digite a segunda nota."))
const media = (n1 + n2) / 2

if (media >= 7){
    alert("APROVADO(A)")
}else{
    alert("REPROVADO")
}