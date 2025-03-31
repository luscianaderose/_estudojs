// 1. Imagine que a variável response é a resposta de uma requisição feita para o backend contendo 
// os dados de todos os personagens cadastrados no banco de dados de uma aplicação web. 
// Como você faria para recuperar o personagem de id=3? 

const response = [
    {
    id: '1',
    name: 'Yennefer',
    blood: 'Half-elven',
    classification: 'Witch',
    },
    {
    id: '2',
    name: 'Geralt',
    blood: 'Human/Mutant',
    classification: 'Wizard',
    },
    {
    id: '3',
    name: 'Ciri',
    blood: 'Half-elven',
    classification: 'Witch',
    },
    {
    id: '4',
    name: 'Jaskier',
    blood: 'Human',
    classification: 'Poetry',
    },
    ]

// console.log(response[2].id === '3')

const personagem = response.filter(item => item.id === '3')
console.log(personagem)

// 1. criar variavel: const personagem recebe = 
// . + nome do array: response + .filter
// . parênteses
// . criar nome para (iterador??? qual é esse negócio?)
// . seta =>
// . condição pra filtrar


