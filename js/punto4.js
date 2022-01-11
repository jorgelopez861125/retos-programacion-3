//Serie de 25: while
//Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado)

const terminos = [];
let i = 1;

while (i <= 25) {
  const sumaDeNumeros = i * 11;
  terminos.push(sumaDeNumeros);
  i++;
}
alert(`${terminos}`)