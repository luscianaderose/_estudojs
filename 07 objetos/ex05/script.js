// 5. Crie uma função que receba um objeto representando uma pessoa 
// com propriedades "nome" e "idade". Se a propriedade
// "idade" não estiver presente, defina um valor padrão de 25.

function criarPessoa({nome, idade=25}){
    return console.log(`nome: ${nome}, idade: ${idade}`)
}

const pessoa = {nome: 'Joana'}
criarPessoa(pessoa)