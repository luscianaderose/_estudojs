// 2. O código abaixo é executado com sucesso? Sim ou não? Justifique!

let x = 'Recuso-me a dizer o meu valor'

function imprimir(){
    console.log(x)
    let x = 'Acredito que meu valor é demonstrado através das minhas atitudes'
    console.log(x)
}

imprimir()
console.log(x)

// Sim, funciona.
// 1) recuso - pegou de fora, é a definição que existe ate o momento.
// 2) acredito - a atribuição mudou.
// 3) recuso - a atribuição do lado de fora ainda é recuso, let tem escopo de bloco e função.

// RESPOSTA CERTA = DÁ ERRO porque quando o x é solicitado, não existe.