// 🏆 Consulta de CEP
// Crie uma aplicação que:
// Possua um campo de texto para digitar um CEP.
// Ao informar o CEP e acionar a busca (use um botão), faça uma requisição 
// para a API do ViaCEP (https://viacep.com.br/ws/{CEP}/json/).
// Exiba os dados retornados (logradouro, bairro, localidade, UF) na tela, 
// logo abaixo do campo de input.


const botao = document.getElementById("bt")
console.log(botao)

botao.addEventListener('click', function(){
    const cep = document.getElementById("cep").value
    console.log(cep)
    

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            const div = document.getElementById("resultado")
            div.textContent = `Logradouro: ${data.logradouro} 
            / Bairro: ${data.bairro} 
            / Localidade: ${data.localidade} 
            / UF: ${data.uf}`
        })
        .catch(error => console.error('Erro', error))  
})


