
function pow(base, exponent) {
  var result = base;
  
  for (var i = 1; i < exponent; i++) { 
    result *= base; //    result = result * base; 
  }
  
  return result;
}

var base = prompt('Какое число возвести в степень?');

console.log('base = ', base);

while (isNaN(base)){
  alert('Неверное число!');
  
  var base = prompt('Какое число возвести в степень?');
  console.log('base = ', base);
}

var exponent = prompt('В какую степень возвести число?');

console.log('exponent = ', exponent);

while (isNaN(exponent)){
  alert('Неверное число!');
  
  var exponent = prompt('В какую степень возвести число?');
  console.log('exponent = ', exponent);
}

alert(pow(base, exponent));

console.log('result = ', pow(base, exponent));


