const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')


const idArray = ['btn1', 'btn2', 'btn3', 'btn4', 'btn6', 'btn7', 'btn8', 'btn9']
const innerHtmlArray = [1,2,3,6,9,8,7,4]

// console.log(idArray.length) // CORRETO
// console.log('idArray[0] ', idArray[0])  // CORRETO
// console.log('innerHtmlArray[0] ', innerHtmlArray[0]) // CORRETO

// ESCREVER btn1.innerHTML = '4'

// btn5.addEventListener('click', function(){
//     console.log('btn5 clickado')
//     this.style.backgroundColor = 'red'
//     btn1.innerHTML = '4'
// })

btn5.addEventListener('click', function(){
    console.log('btn5 clickado')
    this.style.backgroundColor = 'red'
    for(let i = 0; i < 9; i++){
        idArray[i].innerHTML = `${innerHtmlArray[i]}`
        console.log(`${idArray[i]}.innerHTML = '${innerHtmlArray[i]}'`)
    }
})



// btn5.addEventListener('click', function(){
//     console.log('btn5 clicado')
//     this.style.backgroundColor = 'red'
//     console.log(innerHtmlArray)
//     let ultimo = innerHtmlArray[innerHtmlArray.length - 1]
//     console.log(ultimo)
//     innerHtmlArray.pop()
//     console.log(innerHtmlArray)
//     innerHtmlArray.unshift(ultimo)
//     console.log(innerHtmlArray)
//     for(let i = 0; i < 9; i++){
//         idArray[i].innerHTML = `'${innerHtmlArray[i]}'`
//         console.log(`${idArray[i]}.innerHTML = '${innerHtmlArray[i]}'`)
//     }
// })


