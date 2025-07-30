// 1. O que será impresso no console na execução do código abaixo?

var x = 'Recuso-me a dizer o meu valor'

function imprimir(){
    console.log(x)
    var x = 'Acredito que meu valor é demonstrado através das minhas atitudes'
    console.log(x)
}

imprimir()
console.log(x)

// 1) A declaração do var subiu pra linha 6 então o 1o conole.log dará undefined.
// 2) Imprimirá "acredito..." porque pegará a atribuição de x acima.
// 3) o ultimo tambem pegará "acredito" porque foi a ultima atribuição de x. // ERRADO = pegou fora da função.