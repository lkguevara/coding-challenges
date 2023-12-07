/** Ejercicio número 1903 . Número impar más grande de la cadena
https://leetcode.com/problems/largest-odd-number-in-string/description/?envType=daily-question&envId=2023-12-07

Se le da una cadena num, que representa un número entero grande. Devuelve el entero impar de mayor valor (como cadena) que sea una subcadena no vacía de num, o una cadena vacía "" si no existe ningún entero impar.

Una subcadena es una secuencia contigua de caracteres dentro de una cadena.

Example 1:
    Input: num = "52"
    Output: "5"
    Explanation: Las únicas subcadenas no vacías son "5", "2" y "52". "5" es el único número impar.

Example 2:
    Input: num = "4206"
    Output: ""
    Explanation: No hay números impares en "4206".

Example 3:
    Input: num = "35427"
    Output: "35427"
    Explanation: "35427" ya es un número impar.

*/


const largestOddNumber = (num) => {
    let i = num.length - 1;
    while (i >= 0 && num[i] % 2 === 0) {
        i--;
    }
    return num.slice(0, i + 1);

}

console.log(largestOddNumber("10133890"));
