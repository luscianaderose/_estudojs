// // Exercícios - Objetos e Funções em JavaScript
// Objetos
// Criando um objeto

// Crie um objeto chamado pessoa com as propriedades: nome, idade e profissao.
// Exiba cada propriedade no console.
// Acessando e modificando propriedades

// Adicione uma nova propriedade chamada cidade ao objeto pessoa.
// Modifique a idade da pessoa.
// Exclua a propriedade profissao.

const pessoa = {nome: 'alice', idade: 50, profissao: 'medica'}

// console.log(pessoa.nome, pessoa.idade, pessoa.profissao)

pessoa.cidade = 'Rio de Janeiro'
// console.log(pessoa)

pessoa.nome = 'Renata'
// console.log(pessoa)

// const pessoaNova = {...pessoa, cidade: 'Rio de Janeiro'}
// console.log({...pessoaNova})

// pessoaNova = {...pessoaNova, idade: 55}
// console.log(pessoaNova)

function criarNovaPropriedade(objeto, novaPropriedade){
    const objetoNovo = {...objeto, novaPropriedade}
    return objetoNovo
}

const email = 'email@email.com'
console.log(criarNovaPropriedade(pessoa, email))