// 4. O que será impresso no console na execução do código abaixo?

var x = 'Recuso-me a dizer o meu valor'

if (10 > 5){
    console.log(x)
    var x = 'Acredito que meu valor é demonstrado através das minhas atitudes'
    console.log(x)
}

console.log(x)

// 1) Undefined pq o que subiu foi somente declaração de x pelo efeito hoisting. 
// // ERRADO: nao é função, é bloco. var só é local em função. var ignorou esse bloco.
// 2) acredito pq esta embaixo da atribuição de x.
// 3) recuso pq a definição que vale é a da primeira linha, fora da função.