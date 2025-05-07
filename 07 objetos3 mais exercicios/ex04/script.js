// Cria uma função que receba um objeto como parâmetro e retorne quantas chaves ele possui.

function contadorDeChaves(objeto) {
    return Object.keys(objeto).length;
  }
  
  const frutas = { maca: 1, banana: 1 };
  console.log(contadorDeChaves(frutas));

