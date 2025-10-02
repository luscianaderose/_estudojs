const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = false  // força o erro
    if (sucesso) {
        resolve("Deu certo!")
    } else {
        reject("Algo deu errado...")
    }
})

minhaPromise
    .then((resultado) => {
        console.log("Sucesso:", resultado)
    })
    .catch((erro) => {
        console.error("Erro:", erro)
    })



// resolve → função chamada se deu tudo certo.
// reject → função chamada se deu erro.
// A lógica dentro da Promise pode ser um setTimeout, fetch, ou qualquer coisa assíncrona.
// .then() é executado se a Promise for resolvida com sucesso.
// .catch() é executado se a Promise for rejeitada com erro.