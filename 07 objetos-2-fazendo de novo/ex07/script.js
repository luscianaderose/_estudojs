// 7. Crie uma função que receba um objeto representando um carro com propriedades 
// como "modelo" e "ano". Modifique o objeto usando a desestruturação e o 
// operador spread para alterar o modelo e adicionar uma nova propriedade "cor".

// function criarCarro(carro){
//     const carroNovo = { ...carro, modelo: 'Toyota', cor: 'Vermelho' }
//     return carroNovo
// }

function criarCarro(carro){
    return { ...carro, modelo: 'Toyota', cor: 'Vermelho' }
}

const carroOriginal = {modelo: 'Honda', ano: 2013}
console.log(criarCarro(carroOriginal))