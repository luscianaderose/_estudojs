// 2. Crie uma classe chamada "Pessoa" com os seguintes atributos: nome, idade e gênero. Em seguida, crie um
// método chamado "apresentar" que exiba uma mensagem com os dados da pessoa.

class Pessoa {
    constructor (nome, genero, idade){
        this.nome = nome
        this.genero = genero
        this.idade = idade
    }

        apresentar(){ 
        return `${this.nome} tem gênero ${this.genero} e tem ${this.idade} anos.` 
    }

}

const pessoa = new Pessoa('Alice', 'feminino', 32)
console.log(pessoa.apresentar())
