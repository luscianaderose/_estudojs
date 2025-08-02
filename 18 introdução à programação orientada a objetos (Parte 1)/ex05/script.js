// 5. Crie uma classe chamada "Livro" com os atributos: título, autor e ano de publicação. Crie um método 
// para exibir as informações do livro.

class Livro{
    constructor(titulo, autor, anoDePublicacao){
        this.titulo = titulo
        this.autor = autor
        this.anoDePublicacao = anoDePublicacao
    }

    apresentar(){return `Título: ${this.titulo}; autor: ${this.autor}; ano de publicação: ${this.anoDePublicacao}`}
}

const livro = new Livro('A casa amarela', 'Fulano', '2025')
console.log(livro.apresentar())