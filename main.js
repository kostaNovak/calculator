function add(num1,num2){
  let res = num1 + num2
  return Math.round(res * 100) / 100
}

function subtract(num1,num2){
  let res = num1 - num2
  return Math.round(res * 100) / 100
}

function multiply(num1,num2){
  let res = num1 * num2
  return Math.round(res * 100) / 100
}

function divide(num1,num2){
  let res = num1 / num2
  return Math.round(res * 100) / 100

}

function operate (oper,num1,num2){
  
  if (oper =='+'){
    return add(num1,num2)
  }else if(oper == '-'){
    return subtract(num1,num2)
  }else if(oper == 'x'){
    return multiply(num1,num2)
  }else if(oper == '/'){
    return divide(num1,num2)
  }
}
let showUpper = document.getElementById('upper')
let showVal = document.getElementById('screen')
let expression = ''
let operator 
let firstNumber
let result

function resetAll(){
  showUpper.innerText = ''
  showVal.innerText = ''
  expression = ''
  operator = undefined
  firstNumber = undefined
  result = undefined
}

document.addEventListener('click', function(e){

  if (e.target.matches('.btnclr')){
    resetAll()
  }
  if (e.target.matches('.equal')){
    if(operator != undefined && firstNumber != undefined && expression != '' ){
      result = operate(operator,+firstNumber,+expression)
      // showUpper.innerText = result
      showVal.innerText = result
      showUpper.innerText = `${firstNumber} ${operator} ${expression} =`
      firstNumber = result
      expression = ''
      }

  }
  else if(e.target.matches('.btn')){
      
       if (result != undefined){
        showUpper.innerText = result
       }
       showVal.innerText += expression
       showVal.innerText = e.target.value
      // operator = e.target.value 
      

      if (result === undefined && firstNumber === undefined){ /// u slucaju prvog puta
        showUpper.innerText = expression
        firstNumber = expression
        expression = ''
        operator = e.target.value
      }
      else if(firstNumber!= '' && expression!= '' ){
        result = operate(operator,+firstNumber,+expression)
        firstNumber = result
        expression =''
        operator = e.target.value
        showUpper.innerText = result
        showVal.innerText = result
        showVal.innerText += e.target.value
      }
      else {

        expression = ''
        operator = e.target.value
      }
  }
  else if (e.target.matches('.numBtn')){
    if (showVal.innerText == result){
      showVal.innerText = ''
      showUpper.innerText =''
      operator = undefined
      firstNumber = undefined
      result = undefined
    }
    if (showVal.innerText ==='0' || showVal.innerText ==='.'){
      resetAll()
    }
    if (showVal.innerText ==='/' && firstNumber == undefined){
      resetAll()
    }
    
    expression += e.target.value
    showVal.innerText += e.target.value
}

})


