// 10. Elabore uma função que recebe um nome, uma idade e uma função de callback. Ao executar a função,
// deve ser impressa a mensagem “Olá, meu nome é ‘nome’ e tenho “idade” anos!”. Utilize a função de callback
// para montar a mensagem.

const frase = (nome, idade, callback) => {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos!`)
    callback()
}

const tchau = () => {
    console.log('Tchau.')
}

frase("Maria", 30, tchau)
