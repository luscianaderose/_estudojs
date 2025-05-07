  // Cria uma função que receba um objeto como parâmetro 
  //  imprime todos os seus valores associados as chaves desse objeto.
  function values(objeto){
    return Object.values(objeto)
  }
  
  const frutas = {banana: "amarelo", maca: "vermelho"}
  console.log(values(frutas))