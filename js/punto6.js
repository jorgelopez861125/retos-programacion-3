//Dos listas: while
//Realizar un programa que permita cargar dos listas de 15 valores cada una. Informar con un mensaje cuál de las dos listas 
//tiene un valor acumulado mayor (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
//Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

const lista1 = [];
const lista2 = [];
let i = 0;
let j = 0;

while (i < 15) {
    const num = parseInt(prompt('ingrese un valor a la lista1'));
    lista1.push(num);
    i++;
}
while (j < 15) {
    const num2 = parseInt(prompt('ingrese un valor a la lista2'));
    lista2.push(num2);
    j++;
}
const suma1 = lista1.reduce((a,b) => a + b);
const suma2 = lista2.reduce((a,b) => a + b);
if (suma1 > suma2) {
    alert(`lista1 mayor`);
} else if (suma2 > suma1) {
    alert(`lista2 mayor`);
}else alert(`listas iguales`);