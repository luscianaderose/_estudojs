// 7. Crie uma função que receba um objeto representando um carro com propriedades 
// como "modelo" e "ano". Modifique o objeto usando a desestruturação e o 
// operador spread para alterar o modelo e adicionar uma nova propriedade "cor".

// function criarCarro(objeto){
//     objeto = {...objeto, cor}
//     console.log(objeto)
// }

// carro = {modelo: 'Honda', ano: 2013, cor: 'prata'}
// criarCarro()

//GPT ////////////////////////////////////////////////////
function modificarCarro(carro) {
    // Desestruturação para obter os valores atuais
    const { modelo, ano } = carro;
    
    // Criando um novo objeto com spread e modificações
    const novoCarro = { ...carro, modelo: "Toyota", cor: "Vermelho" };
    
    console.log(novoCarro);
}

// Objeto original do carro
const carroOriginal = { modelo: "Honda", ano: 2013 };

// Chamando a função para modificar o carro
modificarCarro(carroOriginal);

// Saída esperada:
// { modelo: 'Toyota', ano: 2013, cor: 'Vermelho' }
