// Objetivo: Criar uma função que 
// recebe um número e exibe a tabuada dele de 1 a 10.

function tabuada(numero) {
    // sua lógica aqui
    for(let i = 1; i < 11; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
  
tabuada(7)

// Saída esperada:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70