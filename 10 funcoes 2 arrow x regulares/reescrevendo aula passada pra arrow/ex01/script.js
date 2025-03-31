// 1. Crie um programa que calcule a média aritmética de três notas digitadas por meio
// de uma função chamada média.

const n1 = parseFloat(prompt("Digite a nota 1."))
const n2 = parseFloat(prompt("Digite a nota 2."))
const n3 = parseFloat(prompt("Digite a nota 3."))

// function media(n1, n2, n3){
//     return alert(`A média das notas ${n1}, ${n2} e ${n3} é ${(n1 + n2 + n3)/3}.`)
// }

const media = (n1, n2, n3) => alert(`A média das notas ${n1}, ${n2} e ${n3} é ${(n1 + n2 + n3)/3}.`)

alert (media(n1, n2, n3))

