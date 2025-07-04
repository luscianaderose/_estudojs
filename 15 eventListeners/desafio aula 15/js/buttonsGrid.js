const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')

btn1.innerHTML = '1'
btn2.innerHTML = '2'
btn3.innerHTML = '3'
btn4.innerHTML = '4'
btn5.innerHTML = '5'
btn6.innerHTML = '6'
btn7.innerHTML = '7'
btn8.innerHTML = '8'
btn9.innerHTML = '9'


// btn5.addEventListener('click', function(){
//     console.log('btn5 clicado')
//     //btn5.textContent = 'Elemento clicado!'
//     btn5.style.backgroundColor = 'red'
// })

// btn5.addEventListener('mouseover', function(){
//     console.log('btn5 mouseover')
//     this.style.backgroundColor = 'red'
// })

const teste = document.getElementById('teste')

teste.addEventListener('click', function(){
    console.log('teste clicado!')
    // this.textContent = 'teste clicado!'
    this.style.backgroundColor = 'red'
})