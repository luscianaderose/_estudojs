// 5. Você deve criar um tipo geral de veículo, com marca e um método para ligar.
// Depois, crie dois tipos diferentes de veículos e altere a forma como eles ligam.
// Por fim, escreva uma função que aceite qualquer um desses veículos e o ligue, mostrando
// o comportamento específico de cada um.

class Veiculo{
    constructor(brand){
        this.brand = brand
    }

    ligar(){ return "Ligando com chave."}
}

class CarroEletrico extends Veiculo{
    constructor(brand){
        super(brand)
    }

    ligar(){ return "Ligando com a digital."}
}

class CarroDePedra extends Veiculo{
    constructor(brand){
        super(brand)
    }

    ligar(){ return "Ligando correndo com as pernas."}

}

const tesla = new CarroEletrico("Tesla")
console.log(tesla.ligar())

const flintstones = new CarroDePedra("Flintstones")
console.log(flintstones.ligar())