const idArray = [btn1, btn2, btn3, btn4, btn6, btn7, btn8, btn9]
const innerHtmlArray = [1,2,3,6,9,8,7,4]

const rodando = idArray.map(
    function myFunc(id){
        innerHtmlArray.forEach(inner => {
            id.innerHTML = inner
        })
    }
)

console.log(rodando)




// for(let i = 0; i < 8; i++){
//     id.innerHTML = inner
// }

// function myFunc(id, inner){
//     return id.innerHTML = inner
// }

// console.log()