const btn5 = document.getElementById('btn5')

// btn5.addEventListener('click', function(){
//     console.log('btn5 clicado')
//     //btn5.textContent = 'Elemento clicado!'
//     btn5.style.backgroundColor = 'red'
// })

btn5.addEventListener('mouseover', function(){
    console.log('btn5 mouseover')
    this.style.backgroundColor = 'red'
})
