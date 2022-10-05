const teclas = document.querySelectorAll ('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (i = 0; i < teclas.length; i++) {
  const tecla = teclas[i] 
  
  tecla.onclick = function() {
    inputTel.value = inputTel.value + tecla.value
  }

  tecla.onkeyDown = function () {
    tecla.classList.add('ativa');
  }
  
  tecla.onkeyUp = function () {
    tecla.classList.remove('ativa');
    
  }
}