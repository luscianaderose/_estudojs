// Criar um objeto de pessoa com essas propriedades e valores usando shorthand.

// let nome = "João";
// let idade = 25;
// let cidade = "São Paulo";

// const pessoa = { nome, idade, cidade }

// console.log(pessoa)

// Criar uma função que recebe 3 parametros quaisquer 
// e retorna um objeto com essas propriedades usando shorthand.

function criarPessoa(sobrenome, telefone, email){
    const pessoa = {sobrenome, telefone, email}
    return pessoa
}

console.log(criarPessoa('Silva', '2222-2222', 'email@email.com'))