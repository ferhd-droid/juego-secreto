let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let maxIntentos = 10;

function asignarTextoElemento(elemento, texto) {
  elemento = document.querySelector(elemento);
  // console.log(elemento);
  elemento.textContent = texto;
}

function verificarIntento() {
  // alert('Desde el botón');
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  // console.log(numeroDeUsuario === numeroSecreto);
  if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
  }
  return;
}

function limpiarCajaTexto() {
  document.querySelector('#valorUsuario').value = '';
}

function deshabilitarBotonNuevoJuego() {
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * maxIntentos) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // Si ya sorteamos todos los números
  if(listaNumerosSorteados.length == maxIntentos) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    return;
  } else {
    // Si el número generado está en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();  // recursividad
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${maxIntentos}`);
  // Generar el número aleatorio
  numeroSecreto = generarNumeroSecreto();
  // Inicializar el número intentos
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCajaTexto();
  condicionesIniciales();
  deshabilitarBotonNuevoJuego();
}

condicionesIniciales();
