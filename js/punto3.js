//Sueldos de personal: while
//En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado
// e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. 
//Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.

const numEmpleados = parseInt(prompt('ingrese la cantidad de empleados de la empresa'));
let i = 0;
let sueldoMayor = 0;
let sueldoMenor = 0;
let sueldoTotal = 0;

while (i < numEmpleados) {
  const salario = parseInt(prompt('ingrese el sueldo del empleado'));
  if (salario <= 300) {
    sueldoMenor ++;
  } else {
    sueldoMayor ++;
  }
  sueldoTotal +=salario;
  i++;
}
alert(`la cantidad de empleados que cobran entre $100 y$300 es de ${sueldoMenor}`);
alert(`la cantidad de empleados que cobran mas de $300 es de ${sueldoMayor}`);
alert(`la empresa gasta un total de $ ${sueldoTotal} en sueldos al personal`);


