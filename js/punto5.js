//Múltiplos de 8: while
//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.

const multiplosDeOcho = [];
let i = 1;
let valor = 0;

while (valor < 500) {
  const multiplo = i * 8;
  valor = multiplo + 8;
  multiplosDeOcho.push(multiplo);
  i++;
}
alert(`${multiplosDeOcho}`);