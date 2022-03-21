`use strict`
const buttonClick = document.querySelector('.container')
const inputNum = document.querySelector('.input-num')
const inputExpression = document.querySelector('.input-expression')
let count = ''
let sum = 0
let sign = []

buttonClick.addEventListener('click',function(elem){
    let currentCell = elem.target

    if(currentCell.classList.contains('input'))return

    if(!(currentCell.classList.contains('item')))return

    if(currentCell.classList.contains('back')){
        deleteMainValue()
        return
    }

    if(currentCell.classList.contains('clean')){
        deleteAllValues()
        return
    }

    if(currentCell.classList.contains('sum')){
        equal()
        sign.push('+')
        sum += +count
        inputExpression.textContent = sum + ' +'
        inputNum.textContent = 0
        count = ''
        return
    }

    if(currentCell.classList.contains('sub')){


        if(sum == 0){
            equal()
            sign.push('-')
            sum = +count
            inputExpression.textContent = sum + ' -'
            inputNum.textContent = 0
            count = ''
            return
        }
        equal()
        sign.push('-')
        sum -= +count
        inputExpression.textContent = sum + ' -'
        inputNum.textContent = 0
        count = ''
        return
    }

    if(currentCell.classList.contains('equal')){
        equal()
        inputExpression.textContent = ''
        inputNum.textContent = sum
        sign = []
        sign.push('=')
        return
    }

    if(currentCell.classList.contains('multiply')){
        if(sum == 0){
            equal()
            sign.push('*')
            sum = +count
            inputExpression.textContent = sum + ' x'
            inputNum.textContent = 0
            count = ''
            return
        }
        if(sign.slice(-1) == '='){
            inputExpression.textContent = sum + ' x'
            inputNum.textContent = 0
            return
        }
        sign.push('*')
        console.log(sum);
        sum *= +inputNum.textContent
        console.log(sum);
        inputExpression.textContent = sum + ' x'
        inputNum.textContent = 0
        count = ''
        return
    }

    if(currentCell.classList.contains('divide')) {
        if (sum == 0) {
            equal()
            sign.push('/')
            sum = +count
            inputExpression.textContent = sum + ' /'
            inputNum.textContent = 0
            count = ''
            return
        }
        sign.push('/')
        console.log(sum);
        sum /= +inputNum.textContent
        console.log(sum);
        inputExpression.textContent = sum + ' /'
        inputNum.textContent = 0
        count = ''
        return
    }
    


    addNum(currentCell)

})





function deleteMainValue() {
    count = ''
    inputNum.textContent = 0
}

function deleteAllValues() {
    sign = []
    sum = 0
    count = ''
    inputExpression.textContent = ''
    inputNum.textContent = 0
}

function addNum(elem) {
    if(sign.slice(-1) == '='){
        sum = 0
    }
    count += elem.textContent
    inputNum.textContent = count

}

function equal(){
    if(sign.slice(-1) == '+') {
        sum += +count
        count = ''
    }
    if(sign.slice(-1) == '-') {
        sum -= +count
        count = ''
    }
    if(sign.slice(-1) == '*'){
        sum *= +count
        count = ''
    }
    if(sign.slice(-1) == '/'){
        sum /= +count
        count = ''
    }
}
