// Criar uma função que recebe uma string 
// e conta quantas vogais existem nela.

function contarVogais(texto) {

    const vogais = ['a', 'e', 'i', 'o', 'u']
    let vogaisNum = 0
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            vogaisNum += 1
        }
    }
    return `A frase possui ${vogaisNum} vogais.`
}

function contarVogais2(texto) {

    const vogais = ['a', 'e', 'i', 'o', 'u']
    let vogaisNum = 0
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            vogaisNum += 1
        }
    }
    console.log(`A frase possui ${vogaisNum} vogais.`)
}



const mensagem = contarVogais("Javascript é divertido")
console.log(mensagem)

contarVogais2("Python e JavaScript")

console.log(contarVogais("Cada um é cada qual"))