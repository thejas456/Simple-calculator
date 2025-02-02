// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Use eval to calculate the expression
    } catch (error) {
      display.value = 'Error';
    }
  }