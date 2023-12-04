/** Ejercicio número 2264 . Encontrar palabras que puedan formarse con caracteres
https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/?envType=daily-question&envId=2023-12-04


Se le da una cadena num que representa un número entero grande. Un número entero es bueno si cumple las siguientes condiciones:

-Es una subcadena de num con longitud 3
-Consta de un único dígito.
-Devuelve el entero bueno máximo como cadena o una cadena vacía "" si no existe tal entero.

Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
*/


const largestGoodInteger = (num) => {
    let maxGoodInt = "";
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            const currentGoodInt = num.substring(i, i + 3);
            if (currentGoodInt > maxGoodInt) {
                maxGoodInt = currentGoodInt;
            }
        }
    }
    return maxGoodInt;
}

console.log(largestGoodInteger("6777133339"));
