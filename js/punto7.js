//Pares e Impares: while
//Desarrollar un programa que permita cargar n números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
//Emplear el operador “%” en la condición de la estructura condicional:
//	if (valor % 2 === 0)         //Si el if da verdadero es par.

const cantNum = parseInt(prompt('ingrese cantidad de numeros'));
let cantPares = 0;
let cantImpares = 0;
let i = 0;

while (i < cantNum) {
    const num = parseInt(prompt('ingrese un numero'));
    if (num % 2 === 0) {
        cantPares++;
    } else {
        cantImpares++;
    }
    i++;
}
alert(`la cantidad de valores pares es de ${cantPares} y la cantidad de impares es de ${cantImpares}`);