/** Ejercicio número 1160 . Encontrar palabras que puedan formarse con caracteres
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/?envType=daily-question&envId=2023-12-02


Se le da un array de cadenas 'words' y una cadena 'chars'. Una cadena es buena si puede formarse por caracteres a partir de chars (cada carácter sólo puede utilizarse una vez). Devuelve la suma de longitudes de todas las cadenas buenas en palabras.

Example 1:
    Input: words = ["cat","bt","hat","tree"], chars = "atach"
    Output: 6
    Explicación: Las cadenas que se pueden formar son "cat" y "hat" por lo que la respuesta es 3 + 3 = 6.

Example 2:
    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
    Output: 10
    Explicación: Las cadenas que se pueden formar son "hello" and "world" por lo que la respuesta es 5 + 5 = 10.

*/


const countCharacters = (words, chars) => {
    // inicializa suma en cero
    let suma = 0;

    // hacer un recorrido de las palabras que ingresan
    for (let word of words) {
        // copia de chars
        let tempChars = chars;
        //inicializar isGood en true
        let isGood = true;

        // Recorrer cada caracter de la palabra
        for (let char of word) {
            if (tempChars.includes(char)) {
                tempChars = tempChars.replace(char, '');
            } else {
                isGood = false;
                break;
            }
        }
        if (isGood) {
            suma += word.length;
        }
    }
    return suma;
}

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
