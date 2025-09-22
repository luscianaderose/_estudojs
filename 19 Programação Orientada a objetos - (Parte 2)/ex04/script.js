// 4. Crie um tipo genérico de animal, com um método que mostra um som.
// Depois, crie dois tipos específicos de animal e altere esse comportamento.
// Por fim, teste os dois animais e compare o resultado.

class Animal{
    constructor(animal, som){
        this.animal = animal
        this.som = som
    }

    fazerSom(){ return `Som de animal: ${this.animal} faz ${this.som}.` }
}

class AnimalDaFazenda extends Animal{
    constructor(animal, som){
        super(animal)
        this.som = som
    }

    fazerSom(){ return `Som de animal da fazenda: ${this.animal} faz ${this.som}.` }
}

const animal = new Animal('cachorro', 'au au')
console.log(animal)
console.log(animal.fazerSom())

const animalDaFazenda = new AnimalDaFazenda('vaca', 'muuu')
console.log(animalDaFazenda)
console.log(animalDaFazenda.fazerSom())
