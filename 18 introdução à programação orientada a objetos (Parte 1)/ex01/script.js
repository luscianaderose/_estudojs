// 1. Crie uma classe chamada "Calculadora" com métodos para realizar operações de soma, 
// subtração, multiplicação e divisão.

class Calculadora {
    constructor (valor1, valor2){
        this.valor1 = valor1
        this.valor2 = valor2
    }

    somar() { return this.valor1 + this.valor2 }
    subtrair() { return this.valor1 - this.valor2 }
    multiplicar() { return this.valor1 * this.valor2 }
    dividir() { return this.valor1 / this.valor2 }
}

const calculadora = new Calculadora(4, 2)
console.log('somar ', calculadora.somar())
console.log('subtrair ', calculadora.subtrair())
console.log('multiplicar ', calculadora.multiplicar())
console.log('dividir ', calculadora.dividir())













// 2. Crie uma classe chamada "Pessoa" com os seguintes atributos: nome, idade e gênero. Em seguida, crie um
// método chamado "apresentar" que exiba uma mensagem com os dados da pessoa.
// 3. Crie uma classe chamada "ContaBancaria" com os atributos: número da conta, saldo e titular. Crie métodos para
// depositar, sacar e exibir o saldo.
// 4. Crie uma classe chamada "Retângulo" com os atributos: comprimento e largura. Implemente métodos para
// calcular a área e o perímetro do retângulo.
// 5. Crie uma classe chamada "Livro" com os atributos: título, autor e ano de publicação. Crie um método para exibir
// as informações do livro.