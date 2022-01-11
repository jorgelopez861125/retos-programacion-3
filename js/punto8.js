//Triángulos: for
//Confeccionar un programa que lea n pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. 
//El programa deberá informar:
//  a) De cada triángulo la medida de su base, su altura y su superficie.
//  b) La cantidad de triángulos cuya superficie es mayor a 12.

const paresDatos = parseInt(prompt('ingrese la cantidad de pares de numeros a calcular'));
let superficie = 0;
let cantSupMayor = 0;

for (let i = 0; i < paresDatos; i++) {
    const base = parseInt(prompt('ingrese un numero para la base'));
    const altura = parseInt(prompt('ingrese un numero para la altura'));
    superficie = base * altura / 2 ;
    alert(`la base del tringulo es ${base} , su altura es de ${altura} y su superficie es de ${superficie}`);
    if (superficie > 12) {
        cantSupMayor++
    }  
}
alert(`la cantidad de triangulos cuya superficie es mayor a 12 es de ${cantSupMayor}`);