const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')


// btn5.addEventListener('click', function(){
//     console.log('btn5 clicado')
//     this.style.backgroundColor = 'red'
//     btn1.innerHTML = '4'
//     btn2.innerHTML = '1'
//     btn3.innerHTML = '2'
//     btn4.innerHTML = '7'
//     btn6.innerHTML = '3'
//     btn7.innerHTML = '8'
//     btn8.innerHTML = '9'
//     btn9.innerHTML = '6'
// })

const innerHtmlArray = [1,2,3,6,9,8,7,4]
const idArray = [btn1, btn2, btn3, btn4, btn6, btn7, btn8, btn9]

btn5.addEventListener('click', function(){
    console.log('btn5 clicado')
    this.style.backgroundColor = 'red'
    console.log(innerHtmlArray)
    let ultimo = innerHtmlArray[innerHtmlArray.length - 1]
    console.log(ultimo)
    innerHtmlArray.pop()
    console.log(innerHtmlArray)
    innerHtmlArray.unshift(ultimo)
    console.log(innerHtmlArray)
    function myFunc(id, inner){
        id.innerHTML = inner
    }
    innerHtmlArray.forEach(myFunc)
})


// const teste = document.getElementById('teste')

// teste.addEventListener('click', function(){
//     console.log('teste clicado!')
//     console.log(this)
//     this.textContent = 'teste clicado!'
//     teste.style.backgroundColor = 'red'
// })

