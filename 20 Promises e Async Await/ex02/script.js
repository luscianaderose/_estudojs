// 2. Crie uma função que retorne uma Promise que será rejeitada com a mensagem "Erro ao
// processar" após 3 segundos.
// aula 20 slide 13

function promessa(){
    return new Promise((_, reject) => {
        setTimeout(() => {reject("Erro ao processar.")}, 3000)
    })
}

const p = promessa()

p
.then((resultado) => {console.log(resultado)})
.catch((erro) => {console.log(erro, "entrei no erro")})