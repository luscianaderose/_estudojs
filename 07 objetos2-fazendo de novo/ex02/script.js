// 2. Crie um objeto representando uma pessoa. Em seguida, crie uma função que modifique 
// a idade dessa pessoa usando o operador spread.

// const pessoa = {nome: 'Mary Jane', idade: 999}

// function modificarIdade(objeto, idadeModificada){
//     objetoNovo = { ...objeto, idade:idadeModificada}
//     return objetoNovo
// }

// console.log(modificarIdade(pessoa, 99))

// GPT ////////////////////////////////////////////////
const pessoa = { nome: "Mary Jane", idade: 999 };

function modificarIdade(objeto, novaIdade) {
    return { ...objeto, idade: novaIdade };
}

const novaPessoa = modificarIdade(pessoa, 99);
console.log(novaPessoa);

// Saída esperada:
// { nome: 'Mary Jane', idade: 99 }


// Seu código está correto e segue boas práticas!
// Aqui estão alguns pequenos aprimoramentos para deixar ainda mais claro:
// O que foi melhorado?
// Removemos a variável intermediária objetoNovo, tornando o código mais conciso.
// Renomeamos idadeModificada para novaIdade para deixar o nome mais intuitivo.
// A função agora retorna diretamente o novo objeto, sem precisar de uma variável temporária.
// Ótimo uso do operador spread (...) para criar um novo objeto sem modificar o original!