//1. Adicione um event listener no elemento com o ID "exemplo" para que, 
// quando ele for clicado, o conteúdo seja alterado para "Elemento clicado!".

const divExemplo = document.getElementById('exemplo')

// uma maneira
// divExemplo.addEventListener('click', function(){
//     console.log('Elemento clicado!')
//     divExemplo.textContent = 'Elemento clicado!'
// })

//outra maneira
divExemplo.addEventListener('click', function(){
    console.log('Elemento clicado!')
    this.textContent = 'Elemento clicado!'
})

// 2. Adicione um event listener no elemento com o ID "caixa" para que, quando o mouse passar 
// sobre o elemento, a cor de fundo seja alterada para vermelho.

const caixa = document.getElementById('caixa')
caixa.addEventListener('mousemove', function(){
    this.style.backgroundColor = 'red'
})

// 3. Adicione um event listener a todos os itens da lista (com a classe "item") para que, 
// quando qualquer item for clicado, um alerta apareça com o texto
// "Você clicou no item X" (onde X é o número do item).

const listaItens = document.getElementsByClassName('item')
console.log(listaItens)
// listaItens[0].addEventListener('click', function(){
//     this.textContent = `Você clicou no item 1`
// })

for(let i = 0; i < 3; i++){
    listaItens[i].addEventListener('click', function(){
        this.textContent = `Você clicou no item ${i + 1}`
    })
}

//4. Adicione um event listener no campo de entrada com o ID "campo" para que, 
// quando o campo perder o foco (evento blur), o valor do campo seja
// alterado para "Campo alterado por foco".

