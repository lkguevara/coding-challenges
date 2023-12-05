/**
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

EJEMPLO
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
manufacture(gifts, materials) // []

*/


// Solución 1
const findNaughtyStep = (original, modified) => {
    let char = ''

    
    for(let i=0; i < Math.max(original.length, modified.length); i++){
        if (original[i] != modified[i]) {
            char = original[i] ? original[i] : modified[i]
            break;
        }
    }


    return char
}

console.log(findNaughtyStep('abcd', 'abcde'))


// solución 2
const findNaughtyStep2 = (original, modified) => {
    let char = ''
    let i = 0

    while (original[i] === modified[i]) {
        i++
    }

    char = original[i] ? original[i] : modified[i]

    return char
}
console.log(findNaughtyStep2('stepfor', 'stepor'))