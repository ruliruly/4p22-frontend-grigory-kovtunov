'use strict'

  const click = document.getElementById('click')
  click.addEventListener('click', (event) => {
  event.preventDefault()
  let one = document.getElementById('one').value
  let snig = document.getElementById('sing').value
  let two = document.getElementById('two').value
  let result = document.getElementById('result')
  let answer 

if (one === '') {
  return result.innerText = 'Первое число не указано'
}  if (two === '') {
  return result.innerText = 'Второе число не указанно'
}  if (isNaN(one) || isNaN(two)) {
  return result.innerText = 'Некорректный ввод чисел'
}

switch (snig) {
 case '+': answer = +one + +two; break
 case '-': answer = +one - +two; break 
 case '/': answer = +one / +two; break
 case '*': answer = +one * +two; break                                   
 case '': return result.innerText = 'Не введён знак'
 default: return result.innerText = 'Программа не поддерживает такую операцию'
     }
             
     if (answer === Infinity) {
      result.innerText = 'Операция некорректна'
  } else {
      result.innerText = `Рузультат: ${answer}`
  };
  })






    