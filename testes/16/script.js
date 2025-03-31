const nomes = ['Paula', 'Ana', 'Maria']
const pesquisa = 'Ana'

let contador = 0
for (let nome of nomes){
    console.log(nome)
    if (nome === pesquisa){
        break}
    contador++
    console.log(contador)
}

// console.log(`O índice de ${pesquisa} é ${pegarIndice(nomes)}`)