const divTexto = document.getElementById('exemplo')
console.log(divTexto)
divTexto.textContent = 'Texto alterado!'

const itens = document.getElementsByClassName('item')
console.log(itens)
// itens[0].textContent = 'Alterado'
// itens[1].textContent = 'Alterado'
// itens[2].textContent = 'Alterado'

for (let i = 0; i < itens.length; i++){
    itens[i].textContent = 'Alterado'
}

const paragrafo1 = document.getElementsByClassName('paragrafo')
console.log(paragrafo1)
paragrafo1[0].textContent = 'Primeiro parágrafo alterado'

const caixaAzul = document.getElementById('caixa')
caixaAzul.style.backgroundColor = 'blue'
caixaAzul.style.width = '400px'

// 5. Altere o valor do campo de entrada com o ID "campo" para "Novo valor".
const campo = document.getElementById('campo')
campo.value = 'Novo valor'

// 6. Crie um novo item <li> com a classe "item" e adicione-o à lista com o ID "lista".
const novoElemento = document.createElement('li')
novoElemento.textContent = 'Novo elemento'
document.getElementById('lista').appendChild(novoElemento)

// 7. Crie um novo item <li> e insira-o antes do primeiro item da lista "lista".
//adicionando no inicio da lista // fiz pelo gpt
const novoPrimeiroItem = document.createElement('li')
novoPrimeiroItem.textContent = 'Novo primeiro item'

const lista = document.getElementById('lista')
console.log(lista)
const primeiroItem = lista.firstElementChild
lista.insertBefore(novoPrimeiroItem, primeiroItem)


// 8. Altere o texto do parágrafo com o ID "textoSubstituir" para "Texto substituído com sucesso!".
const paragrafo2 = document.getElementById('textoSubstituir')
paragrafo2.textContent = 'Texto substituído com sucesso!'

// 9. Altere o estilo do elemento com o ID "caixa" para que sua cor de fundo seja verde e sua altura seja 200px.
caixaAzul.style.backgroundColor = 'green'
caixaAzul.style.width = '200px'

// 10. Adicione uma nova classe "destacado" ao elemento com o ID "caixa".
caixaAzul.classList.add('destacado')

// 11. Remova o elemento com o ID "caixa2" do DOM.
const caixa2 = document.getElementById('caixa2')
caixa2.remove()

// 12. Substitua o conteúdo do parágrafo com o ID "textoSubstituir" por "Texto completamente novo".
paragrafo2.textContent = 'Texto completamente novo'

// 13. Crie e adicione 5 itens <li> à lista "lista".  // fiz sozinha
for(let i = 0; i < 5; i++){
    let item = document.createElement('li')
    item.textContent = 'item'
    const lista = document.getElementById('lista')
    lista.appendChild(item)
}

// 14. Altere o valor do campo de entrada com o ID "campo" para "Campo alterado".
campo.value = 'Campo alterado'

// 15. Adicione um estilo inline ao elemento com o ID "caixa" que defina sua altura como 100px e largura como 250px.
caixaAzul.style.width = '250px'
caixaAzul.style.height = '100px'

// 16. Crie um novo elemento <ul>, adicione alguns itens <li> a ele, e insira o <ul> dentro do parágrafo com a classe "paragrafo".
const novaLista = document.createElement('ul')
novaLista.id = 'novaLista'

for(let i = 0; i < 4; i++){
    let item = document.createElement('li')
    item.textContent = 'item'
    const lista = document.getElementById('novaLista')
    novaLista.appendChild(item)
}

const paragrafo3 = document.getElementByClassName('paragrafo')

// 17. Altere a cor do texto de todos os parágrafos (com a classe "paragrafo") para vermelho.
const paragrafo1 = document.getElementsByClassName('paragrafo')

// 18. Altere o tamanho da fonte do parágrafo com o ID "textoSubstituir" para 20px.


// 19. Substitua o elemento com o ID "caixa" pelo elemento com o ID "caixa2" usando o método replaceChild.


// 20. Crie um novo parágrafo e insira-o dentro do elemento com o ID "caixa2".
