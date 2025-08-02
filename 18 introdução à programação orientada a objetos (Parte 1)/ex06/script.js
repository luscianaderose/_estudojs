// 6. Crie uma classe chamada "Aluno" com os atributos: nome, matrícula e notas. Implemente um método para
// calcular a média das notas.

class Aluno{
    constructor(nome, matricula, nota1, nota2){
        this.nome = nome
        this.matricula = matricula
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(){return `Aluno: ${this.nome}, Matrícula: ${this.matricula}, Média: ${(this.nota1 + this.nota2) / 2} `}
}

const aluno = new Aluno('João', '123', 10, 5)
console.log(aluno.calcularMedia())