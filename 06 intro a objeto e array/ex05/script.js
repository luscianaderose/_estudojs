// 5. Crie um array que armazena três notas de provas digitadas pelo usuário, 
// calcule a média e exiba a média em seguida.

notas = []
let soma = 0

for(let i = 0; i < 3; i++){
    let input = parseFloat(prompt("Digite a nota."))
    notas.push(input)
    soma += input
}

let media = soma / notas.length
alert(`A média é ${media}.`)