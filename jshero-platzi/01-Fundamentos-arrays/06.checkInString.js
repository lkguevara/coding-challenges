/*Tu reto en este desafío es buscar si ese string tiene un término de búsqueda dado, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así el término de búsqueda sea mayúscula o minúscula.

Para solucionarlo vas a encontrar una función llamada checkInString que recibe dos parámetros de entrada:

text: Un string
term: Un string con el término a buscar
Dentro del cuerpo de la función checkInString debes escribir tu solución. 

Ejemplos

Input: "Ana lava la tina", "ana"
Output: true

Input: "Santiago", "tiago"
Output: true

Input: "Nicolas", "ana"
Output: false
*/

const checkInString = (text, term) => {
    return text.toLowerCase().includes(term.toLowerCase())
}

console.log(checkInString("Ana lava la tina", "ana"))
