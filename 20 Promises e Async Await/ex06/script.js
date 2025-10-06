// 6. Faça uma requisição para a API pública https://jsonplaceholder.typicode.com/users 
// e exiba apenas o nome (name) e o email (email) de cada usuário.

// const dados = (dados => dados.filter(dados => dados.name))

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dados => {
        const usuarios = dados.map(user => ({
            name: user.name,
            email: user.email
        }))
        console.log(usuarios)
    })
    .catch(error => console.error('Erro', error))