// 1. Crie um modelo de pessoa que possua um nome e uma idade.
// Depois, implemente um método que mostre a seguinte frase no console:
// "Hi, my name is <name> and I’m <age> years old."

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){ return `Hi, my name is ${this.nome} and I'm ${this.idade} years old.` }
}

const p1 = new Pessoa('João', 20)
console.log(p1.falar())
