// 2. Crie uma função que retorne uma Promise que será rejeitada com a mensagem "Erro ao
// processar" após 3 segundos.
// aula 20 slide 13

const promessaComErro = new Promise((_, reject) => {
    reject("Erro ao processar.")
})

promessaComErro
    .then((res) => {
        console.log("Sucesso:", res)
    })
    .catch((erro) => {
        console.error("Erro:", erro)
    })

const esperar3Segundos = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Passaram-se 3 segundos!")
    }, 3000)
})

esperar3Segundos.then((mensagem) => {
    console.log(mensagem)
})