/*
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 */

// Página oficial www.typescriptlang.org

// Comentario de una línea
/* Comentario de varias líneas */

// Variable
let lenguajeSeleccionado: string = "TypeScript";
const lenguajeSeleccionado2: string = "TypeScript";

// Tipos de datos primitivos
let cadena: string = "Hola";
let numero: number = 1;
let booleano: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipo de datos especiales
// any: cualquier tipo de dato
const pais: any = "España";

// Void: no devuelve nada
function mostrarMensaje(mensaje:string):void{
    console.log(mensaje);
 }

// imprimir por consola
console.log("¡Hola, " + lenguajeSeleccionado + "!");

