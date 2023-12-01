/** Ejercicio número 1662 . Comprobar si dos matrices de cadenas son equivalentes https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/?envType=daily-question&envId=2023-12-01


Dadas dos matrices de cadenas word1 y word2, devuelve verdadero si las dos matrices representan la misma cadena, y falso en caso contrario. Una cadena está representada por una matriz si los elementos de la matriz concatenados en orden forman la cadena.

Ejemplos:
    Ejemplo 1:
        Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
        Output: true
        Explicación:
        word1 representa el string "ab" + "c" -> "abc"
        word2 representa el string "a" + "bc" -> "abc"

    Ejemplo 2:
    Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
    Output: false

    Ejemplo 3:
    Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
    Output: true
*/


const arrayStringsAreEqual = (word1, word2) => {
    let word1Combined = word1.toString().replaceAll(",","");
    let word2Combined = word2.toString().replaceAll(",","")

    if(word1Combined === word2Combined){
        return true;
    }else{
        return false
    }
}

console.log(arrayStringsAreEqual(["ab", "c"] , ["a", "bc"]));
