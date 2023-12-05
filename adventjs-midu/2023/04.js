/**
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés. Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

EJEMPLO:
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

*/


function decode(message) {
    let stack = [];
    for (let i = 0; i < message.length; i++) {
        if (message[i] === ')') {
            let reversed = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                reversed += stack.pop();
            }
            // Eliminamos el paréntesis de apertura '('
            stack.pop();
            // Añadimos el string invertido a la pila
            for (let j = 0; j < reversed.length; j++) {
                stack.push(reversed[j]);
            }
        } else {
            stack.push(message[i]);
        }
    }
    return stack.join('');
}

console.log(decode('hola (odnum)'))