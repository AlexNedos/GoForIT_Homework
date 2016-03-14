var fruits = [];
console.log(fruits);

for (var i = 0; i < 5; i++) { 
  fruits[i] = prompt('Введите имя');
}
console.log(fruits);

var name = prompt('Войти в аккаунт: Введите имя');
console.log(name);

for (var i = 0; i < fruits.length; i++) {
  
  if (name == fruits[i]) {
    message = (fruits[i] + ', вы успешно вошли!');
    
    if (i = fruits.length) continue;
    
  } else {
    message = ('Пользователь не найден.')
  }
}
  alert(message);

