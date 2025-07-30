// O que será impresso no console na execução do código abaixo?

const z = 50

function func3() {
    if (true) {
        const z = 60
        console.log(z)
    }
    console.log(z)
}

func3()
console.log(z)

// CERTO
// 1) 60 pq ta no mesmo bloco
// 2) 50 pq pegou de fora, é a hierarquia
// 3) 50 está definido e solicitando no escopo global.