/*
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...

 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de estructuras de control que existan en tu lenguaje: Condicionales, iterativas excepciones...

 * - Debes hacer print por consola del resultado de todos los ejemplos.

 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

// * OPERADORES ARITMÉTICOS
const primerNumero: number = 10;
const segundoNumero: number = 5;

// Suma
const suma: number = primerNumero + segundoNumero;

// Resta
const resta: number = primerNumero - segundoNumero;

// Multiplicación
const multiplicacion: number = primerNumero * segundoNumero;

// División
const division: number = primerNumero / segundoNumero;

// Módulo
const modulo: number = primerNumero % segundoNumero;

//* OPERADORES DE COMPARACIÓN
const numeroUno: number = 10;
const numeroDos: number = 5;

// Igualdad
const igualdad: boolean = numeroUno === numeroDos;

// Desigualdad
const desigualdad: boolean = numeroUno !== numeroDos;

// Mayor que
const mayorQue: boolean = numeroUno > numeroDos;

// Menor que
const menorQue: boolean = numeroUno < numeroDos;

// Mayor o igual que
const mayorOIgualQue: boolean = numeroUno >= numeroDos;

// Menor o igual que

const menorOIgualQue: boolean = numeroUno <= numeroDos;

//* OPERADORES LÓGICOS
const booleanoUno: boolean = true;
const booleanoDos: boolean = false;

// AND
const and: boolean = booleanoUno && booleanoDos;

// OR
const or: boolean = booleanoUno || booleanoDos;

// NOT
const not: boolean = !booleanoUno;

//* OPERADORES DE ASIGNACIÓN
let variable: number = 10;

// =
variable = 20;

// +=
variable += 10;

// -=
variable -= 10;

// *=
variable *= 10;

// /=
variable /= 10;

//* OPERADORES DE IDENTIDAD
const numero: number = 10;
const cadena: string = "10";

// ===
const identidad: boolean = numero === Number(cadena);

// !==
const noIdentidad: boolean = numero !== Number(cadena);

//* ESTUCTURAS DE CONTROL
const numero1: number = 10;
const numero2: number = 5;

// IF
if (numero1 > numero2) {
  console.log("numero1 es mayor que numero2");
}

// ELSE
if (numero1 < numero2) {
  console.log("numero1 es menor que numero2");
} else {
    console.log("numero1 es mayor que numero2");
}

// ELSE IF
if (numero1 > numero2) {
  console.log("numero1 es mayor que numero2");
} else if (numero1 < numero2) {
    console.log("numero1 es menor que numero2");
    }

// SWITCH
switch (numero1) {
  case 10:
    console.log("numero1 es igual a 10");
    break;
  case 5:
    console.log("numero1 es igual a 5");
    break;
  default:
    console.log("numero1 no es igual a 10 ni a 5");
    break;
}

// FOR
for (let counter: number = 0; counter < 10; counter++) {
  console.log(counter);
}

// DIFICULTAD EXTRA
console.log("\nEJERCICIO EXTRA");
/*  Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y
 *  que no son ni el 16 ni múltiplos de 3.*/
for (let counter: number = 10; counter <= 55; counter++) {
  if (counter % 2 === 0 && counter !== 16 && counter % 3 !== 0) {
    console.log(counter);
  }
}