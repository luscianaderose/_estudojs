// 3. Crie um programa que, dado um número inteiro lido via prompt, 
// classifique se é um dia de final de semana ou não. Baseie-se na associação abaixo:
// DOMINGO = 1, SEGUNDA = 2, TERÇA = 3, QUARTA = 4, QUINTA = 5, SEXTA = 6 e SÁBADO = 7
// OBS: Caso o usuário digite um valor fora do intervalo de 1 a 7, 
// o programa deve exibir uma mensagem de erro.

const num = parseInt(prompt("Digite um número correspondente ao dia da semana."))

if (num > 1 < 7){
    switch (num){
    case 2:
        alert("Hoje é SEGUNDA")
        break
    case 3:
        alert("Hoje é TERÇA")
        break
    case 4:
        alert("Hoje é QUARTA")
        break
    case 5:
        alert("Hoje é QUINTA")
        break
    case 6:
        alert("Hoje é SEXTA")
        break
    }
} else if (num == 1 || 7) {
    switch (num){
    case 1:
        alert("Hoje é DOMINGO")
        break
    case 7:
        alert("Hoje é SÁBADO")
        break
    }
} else {
    alert("Insira um número de 1 a 7.")
}
