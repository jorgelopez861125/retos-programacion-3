//Altura n: while
//Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.

const personas = parseInt(prompt('Ingrese cantidad de personas'));
let i = 0;
let suma = 0;

while (i < personas) {
    const altura = parseFloat(prompt('Ingrese una altura'));
    suma = suma + altura;
    i++;
}
alert(`la altura promedio de las personas es: ${suma/personas}`)
