// O que será impresso no console na execução do código abaixo?

var a = 5
let b = 10
const c = 15

if (true) {
    var a = 20
    let b = 25
    const c = 30
    console.log(a, b, c)
}

console.log(a, b, c)

// 1) 20, 25, 30 // CERTO
// 2) 5,10,15 // ERRADO: o var fura o if, nao existe a limitação de escopo de bloco pro var