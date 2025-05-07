//Elabore uma função que recebe um nome, uma idade e uma função de callback. 
// Ao executar a função, deve ser impressa a mensagem “Olá, meu nome é ‘nome’ e tenho “idade” anos!”.
// Utilize a função de callback para montar a mensagem.

function mensagem(nome, idade, callback){
    console.log(callback(nome, idade))
  }
  
  function frase(nome, idade){
    return "Olá, meu nome é ${nome} e tenho ${idade} anos!"
  }
  
  mensagem("Maria", 20, frase)