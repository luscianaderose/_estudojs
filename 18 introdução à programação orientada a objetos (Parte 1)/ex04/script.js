// 4. Crie uma classe chamada "Retângulo" com os atributos: comprimento e largura. Implemente métodos para
// calcular a área e o perímetro do retângulo.

class Retangulo {
    constructor(comprimento, largura){
        this.comprimento = comprimento
        this.largura = largura
    }

    calcularArea(){return this.comprimento * this.largura}
    calcularPerimetro(){return this.comprimento + this.largura}
}

const retangulo = new Retangulo(10, 5)
console.log(retangulo.calcularArea())
console.log(retangulo.calcularPerimetro())