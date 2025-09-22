// 8. Crie um produto com nome e preço.
// Adicione uma forma de aplicar descontos.
// Agora, crie uma versão digital do produto que sempre tenha um desconto fixo.
// Simule a compra de produtos diferentes e exiba o preço final com desconto.

class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    imprimir(){
        return `Vendido ${this.nome} por R$ ${this.preco}.`
    }

    prodDigitalDescFixo(){
        const valor = this.preco - (this.preco * 0.1)
        return `Vendido ${this.nome} por R$ ${valor}.`
    }

    aplicarDesconto(desconto){
        const precoComDesconto = this.preco - (this.preco * (desconto / 100))
        return `Vendido ${this.nome} por R$ ${precoComDesconto}.`
    }
}

const livro = new Produto('livro', 50)
console.log(livro.imprimir())

const livroDigital = new Produto('livro digital', 50)
console.log(livroDigital.prodDigitalDescFixo())

const livroQueima = new Produto('livro na queima de estoque', 50)
console.log(livroQueima.aplicarDesconto(50))