/* 
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

let input  = "bici coche (balón) bici coche peluche";

function isValid(letter) {

    let caracteres = letter.split(''); // convirtiendo a arreglo y seleccionado cada caracter
    // console.log(list);

    let parentesisAbiertos = 0;
    let parentesisCerrados = 0;

    caracteres.map(caracter =>{ 
        if (caracter  === '(') {
            parentesisAbiertos += 1
        }else if (caracter === ')'){
            parentesisCerrados += 1
        }
    })

    if (parentesisAbiertos === parentesisCerrados && 
        parentesisCerrados > 0 && 
        parentesisAbiertos > 0 && 
        !letter.match(/[\[\[{}]/g) &&
        !letter.match(/[(]\W+[)]|[(][)]/))
    {
        return true
    }   else {
        return false
    }
}

const isValidLetter = isValid(input);
console.log(isValidLetter);