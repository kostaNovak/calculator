function add(num1,num2){
  return num1 + num2
}

function subtract(num1,num2){
  return num1 - num2
}

function multiply(num1,num2){
  return num1 * num2
}

function divide(num1,num2){
  return num1 / num2
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


let showVal = document.getElementById('screen')
let expression = ''
let operator 
let firstNumber
let result

document.addEventListener('click', function(e){
  if (e.target.matches('.equal')){
      result = operate(operator,+firstNumber,+expression)
      showVal.innerText = result
      firstNumber = result
      expression = ''

  }
  else if(e.target.matches('.btn')){
      // operator = e.target.value 
      showVal.innerText += e.target.value

      if (result === undefined && firstNumber === undefined){ /// u slucaju prvog puta
        firstNumber = expression
        expression = ''
        operator = e.target.value
      }
      else if(firstNumber!= '' && expression!= ''){
        result = operate(operator,+firstNumber,+expression)
        firstNumber = result
        expression =''
        operator = e.target.value
        showVal.innerText = result
        showVal.innerText += e.target.value
      }
      else {

        expression = ''
        operator = e.target.value
      }
  }
  else if (e.target.matches('.numBtn')){
    expression += e.target.value
    showVal.innerText += e.target.value
}

})


