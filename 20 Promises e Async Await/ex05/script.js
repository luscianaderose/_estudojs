// 5. Faça uma requisição do tipo GET para a API pública 
// https://jsonplaceholder.typicode.com/posts e
// exiba os dados recebidos no console.

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))