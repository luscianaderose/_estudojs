// 3. Imagine que os dados de response, tanto chave quanto valor, serão utilizados em outro ponto da aplicação. 
// Contudo, foi determinado que as propriedades name, blood e classification devem ser alteradas para nome, 
// sangue e classificacao, e além disso, valor para as chaves blood e classification devem ser traduzidos 
// para o português. Como você faria para criar a variável newFormat a partir dos dados que estão 
// em response?

function renomearPropsEValores(objeto){
    const { id, name: nome, blood: sangue, classification: classificacao } = objeto
    const novoObjeto = { id, nome, sangue, classificacao }

    if (novoObjeto.sangue === 'Half-elven'){
        novoObjeto.sangue = 'Meio-elfo'
    } else if (novoObjeto.sangue === 'Human/Mutant'){
        novoObjeto.sangue = 'Humano/Mutante'
    } else if (novoObjeto.sangue === 'Human'){
        novoObjeto.sangue = 'Humano'
    }

    if (novoObjeto.classificacao === 'Witch'){
        novoObjeto.classificacao = 'Bruxa'
    } else if (novoObjeto.classificacao === 'Wizard'){
        novoObjeto.classificacao = 'Bruxo'
    } else if (novoObjeto.classificacao === 'Poetry'){
        novoObjeto.classificacao = 'Poeta'
    }   

    return novoObjeto
}

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

const newFormat = []

for (let i=0; i < response.length; i++){
    newFormat.push(renomearPropsEValores(response[i]))
}

console.log(newFormat)
