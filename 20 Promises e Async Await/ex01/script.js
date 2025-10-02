// 1. Crie uma função que retorne uma Promise que é resolvida com a mensagem "Processo
// concluído" após 2 segundos.

function x(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Processo concluído.")}, 2000)
    })
}

const y = x()

y
.then((resultado) => {console.log(resultado)})
.catch((erro) => {console.log(erro)})


