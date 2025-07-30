// O que será impresso no console na execução do código abaixo?

let num = 30

function func2() {
    if (true) {
        let num = 40
        console.log(num)
    }
    console.log(num)
}

func2()
console.log(num)

// 1) 40 porque a atribuição está logo acima no mesmo bloco. // CERTO
// 2) 40 porque pegou da mesma função. // ERRADO - pega da hierarquia maior primeiro, de fora.
// 3) 30 porque vale a definição do escopo global. // CERTO