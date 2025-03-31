// 4. Crie uma função que receba um objeto com propriedades "largura" e "altura", 
// e renomeie essas propriedades para "w" e "h" usando a desestruturação.

// function dimensoes({largura: w, altura: h}){
//     return console.log(`width:${w}, height:${h}`)
// }

// const produtoX = { largura: 2, altura:  3 }
// dimensoes(produtoX)


//GPT ////////////////////////////////////////////
// function mostrarDados({ nome: primeiroNome, idade }) {
//     console.log(`Nome: ${primeiroNome}, Idade: ${idade}`);
//   }
  
//   const pessoa = { nome: "Carlos", idade: 30 };
//   mostrarDados(pessoa); // "Nome: Carlos, Idade: 30"

//GPT ////////////////////////////////////////////////

// const usuario = {
//     nome: "Alice",
//     idade: 25,
//     cidade: "São Paulo"
//   };
  
//   // Renomeando 'nome' para 'primeiroNome'
//   const { nome: primeiroNome, idade, cidade: local } = usuario;
  
//   console.log(primeiroNome); // "Alice"
//   console.log(idade);        // 25
//   console.log(local);        // "São Paulo"
