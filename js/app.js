window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const resultField = document.querySelector('.result');

  document.querySelector('.calculate').onclick = function(e) {
    e.preventDefault();
    const integer = input.value;
    const result = getClassification(integer);
    resultField.textContent = result;
  };

  document.querySelector('.reset').onclick = function(e) {
    e.preventDefault();
    resultField.textContent = '';
    input.value = '';
  };

});

function getClassification(integer) {
  const formattedInteger = formatInteger(integer);
  //error handling
  const error = errorChecker(formattedInteger);
  if (error) return error;
  if (formattedInteger === 1) return '1 is a deficient number';

  const sumOfDivisors = sumDivisors(formattedInteger);
  if (sumOfDivisors === formattedInteger) return `${integer} is a perfect number`;
  if (sumOfDivisors > formattedInteger) return `${integer} is an abundant number`;
  return `${integer} is a deficient number`;
}

//creates a filtered array using the index of the integer as an object and checking if the index is divisor of integer, then sums those filtered numbers
function sumDivisors(integer) {
  return [...Array(integer).keys()]
    .filter(i => integer % i === 0)
    .reduce((a, b) => a + b);
}
//
function errorChecker(integer) {
  if (!integer
  || integer < 0
  || integer % 1 !== 0
  ) return 'Please enter a positive whole number';
}

function formatInteger(integer) {
  //removes commas from valid numbers and turns String into Number
  return Number(integer.replace(/,/g, ''));
}
