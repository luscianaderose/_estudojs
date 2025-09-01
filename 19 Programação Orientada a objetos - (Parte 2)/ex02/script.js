// 2. Melhore a classe da pessoa que você criou.
// Agora, os dados devem ficar inacessíveis diretamente de fora da classe.
// Implemente uma forma segura de acessar e alterar essas informações.
// Garanta que a idade nunca seja negativa.

class Pessoa {
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome
        if (typeof idade === 'number' && idade >= 0) {
            this.#idade = idade
        } else {
            console.log("Idade inválida. Must be a non-negative number.")
            return 
        }

        this.#idade = idade
    }

    // Getter para acessar a velocidade
    get idade() {
        return this.#idade
    }

    // Setter para alterar a velocidade (com validação)
    set idade(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#idade = value
        } else {
            console.log("Invalid idade. Must be a non-negative number.")
        }
    }

    falar(){ return `Hi, my name is ${this.#nome} and I'm ${this.#idade} years old.` }
}

const p1 = new Pessoa('João', -20)
console.log(p1.falar())
p1.idade = 30
console.log(p1.falar())