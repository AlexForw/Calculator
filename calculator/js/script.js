const buttonClick = document.querySelector('.container')
const inputNum = document.querySelector('.input-num')
const inputExpression = document.querySelector('.input-expression')
let count = ''
let sum = 0


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
        sum += +count
        inputExpression.textContent = sum + ' +'
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
    sum = 0
    count = ''
    inputExpression.textContent = ''
    inputNum.textContent = 0
}

function addNum(elem) {
    count += elem.textContent
    inputNum.textContent = count
}
