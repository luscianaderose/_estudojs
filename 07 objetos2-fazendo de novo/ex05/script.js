// 5. Crie uma função que receba um objeto representando uma pessoa 
// com propriedades "nome" e "idade". Se a propriedade
// "idade" não estiver presente, defina um valor padrão de 25.

function criarPessoa({nome, idade=25}){
    return {nome, idade}
}

console.log(criarPessoa({nome: 'Roberta'}))
console.log(criarPessoa({nome: 'Carlos', idade: 30}))

// LEMBRAR: QUANDO COLOCAR OBJETO COM PROPRIEDADES COMO PARÂMETRO DA FUNÇÃO,
// COLOCAR ENTRE CHAVES E TAMBEM FAZER ISSO QUANDO FOR IMPRIMIR.