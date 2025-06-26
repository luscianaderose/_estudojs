// Exercício 10: Média de Notas
// Objetivo: Criar uma função que recebe várias notas (números de 0 a 10), 
// calcula a média e imprime a situação do aluno. >= 7 aprovado, < 7 reprovado.

function calcularMedia(notas) {
    let soma = 0
    for (let i = 0; i < notas.length; i++){
        soma += notas[i] 
    }
    const media = soma / notas.length
    const situacao = (media >= 7) ? 'Aprovado' : 'Reprovado'
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Situação: ${situacao}`)
}

calcularMedia([8, 6, 9]);
// Saída esperada:
// "Média: 7.6"
// "Situação: Aprovado"

calcularMedia([4, 5, 3]);
// Saída esperada:
// "Média: 4"
// "Situação: Reprovado"