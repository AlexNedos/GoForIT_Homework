var go = document.querySelector('.go');
var pause = document.querySelector('.pause');
var clear = document.querySelector('.clear');
var timer = document.querySelector('.timer__text');
var milisecond = document.querySelector('.milisecond__text');




go.addEventListener('click', callbackGo);
pause.addEventListener('click', callbackPause);




function callbackGo() {
 timerId = setInterval(test, 1000);
 timerId2 = setInterval(mili, 1);
  pause.style.display = 'block'; 
  m = QWE;
}
function callbackPause() {
  clearInterval(timerId);
  clearInterval(timerId2);
  pause.style.display = 'none'; 
  QWE = m;
}
var q = 0;
var a = 0;
var m = 0;
var s = 0;

function test() {
//  q++;
  timer.innerHTML = s + ':' + a + ':' + q;
  if (q == 59){
    q = -1;
    a++;
  }
  if (a == 59){
    a = 0;
    s++;
  }
}
function mili() {
  m += 4;
  milisecond.innerHTML = m;
  if (m == 996){
    m = 0;
    q++;
  }
}