//Tabla a elección: for
//Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 13 términos)

const numTabla = Number(prompt('ingrese la tabla que desea calcular (1 al 10)'));
const tabla = [];

if (numTabla > 0 && numTabla <= 10) {
    for (let i = 0; i <= 13; i++) {
       tabla.push(numTabla * i); 
    }
} else {
    throw new Error('lea la consigna');
}

alert(`el resultado de la tabla del ${numTabla} es : ${tabla}`)