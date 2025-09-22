// 1. Crie uma classe chamada "Calculadora" com métodos para realizar operações de soma, 
// subtração, multiplicação e divisão.

class Calculadora {
    constructor (valor1, valor2){
        this.valor1 = valor1
        this.valor2 = valor2
    }

    
    // somar() { return `${this.valor1} + ${this.valor2} = `, this.valor1 + this.valor2 }
    // subtrair() { return `${this.valor1} - ${this.valor2} = `, this.valor1 - this.valor2 }
    // multiplicar() { return `${this.valor1} * ${this.valor2} = `, this.valor1 * this.valor2 }
    // dividir() { return `${this.valor1} / ${this.valor2} = `, this.valor1 / this.valor2 }
    
    imprimir() { return this.valor1, this.valor2}
    somar() { return this.valor1 + this.valor2 }
    subtrair() { return this.valor1 - this.valor2 }
    multiplicar() { return this.valor1 * this.valor2 }
    dividir() { return this.valor1 / this.valor2 }
    
}

const calculadora = new Calculadora(4, 2)
console.log(imprimir())
console.log('valor1 = ', valor1)
console.log('somar ', calculadora.somar())
console.log('subtrair ', calculadora.subtrair())
console.log('multiplicar ', calculadora.multiplicar())
console.log('dividir ', calculadora.dividir())

