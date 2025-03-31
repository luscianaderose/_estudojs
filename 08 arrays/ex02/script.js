// 2. Como você faria para recuperar os personagens de sangue meio-elfo (Half-elven)? 

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
    classification: 'Poet',
    },
]

const meioElfo = response.filter(item => item.blood === 'Half-elven')
console.log(meioElfo)

// como faço pra pegar só os nomes?