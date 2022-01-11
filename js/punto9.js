//Los últimos 5: for
//Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.

let ultimosCinco = 0;
for (let i = 0; i < 10; i++) {
    const numeros = parseInt(prompt('ingrese un numero'));
    if (i > 4) {
        ultimosCinco = ultimosCinco + numeros; 
    }

}
alert(`la suma de los ultimos 5 numeros es ${ultimosCinco}`);