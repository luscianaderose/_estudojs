// 8. Crie uma classe chamada "Animal" com os atributos: nome e som. 
// Implemente um método para reproduzir o som do animal.

class Animal {
    constructor(nome, som){
        this.nome = nome
        this.som = som
    }

    reproduzirOSomDoAnimal(){ return `${this.nome} faz ${this.som}`}
}

const vaca = new Animal("A vaca", "muuuuu!")
console.log(vaca.reproduzirOSomDoAnimal())

const cachorro = new Animal("O cachorro", "au! Au! Au!")
console.log(cachorro.reproduzirOSomDoAnimal())