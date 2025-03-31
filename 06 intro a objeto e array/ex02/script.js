// 2. Crie um objeto que represente um estudante de uma escola e imprima cada
// propriedade desse objeto.

const aluno = {
    nome: "Fulano",
    sobrenome: "Santos",
    media: "7.5"
}

for(const info in aluno){
    console.log(aluno[info])
}