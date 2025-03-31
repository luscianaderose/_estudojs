// 6. Baseado no programa anterior, ache o índice do array que contém o nome de pesquisa.
const nomes = ['Paula', 'Ana', 'Maria']
const pesquisa = 'Ana'
// const temPesquisa = nomes.includes(pesquisa)
// console.log(temPesquisa)

let contador = 0
function pegarIndice(array){
    for (let nome of array){
        // console.log(nome)
        if (nome === pesquisa){
            break}
        contador++
        // console.log(contador)
    }
    return contador
}

// console.log(pegarIndice(nomes))

console.log(`O índice de ${pesquisa} é ${pegarIndice(nomes)}`)