// 5. O que será impresso no console na execução do código abaixo?

var x = 10

function func() {
    if (true) {
        var x = 20
        console.log(x)
    }
    console.log(x)
}

func()
console.log(x)

// 1) 20 já q está logo acima dentro da função em que se encontra. 
// o bloco do if nao faz diferença pro var.
// 2) 20, mesma coisa.
// 3) 10 pq está chamando do escopo global então pegou a atribuição feita no escopo global.

// CERTO