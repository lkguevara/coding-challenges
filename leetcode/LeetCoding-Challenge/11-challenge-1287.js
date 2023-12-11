/** Ejercicio número 1287  Elemento que aparece más del 25% en la matriz ordenada
https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/?envType=daily-question&envId=2023-12-11

Dado un array de enteros ordenados en orden no decreciente, hay exactamente un entero en el array que aparece más del 25% de las veces, devuelve ese entero.

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
Example 2:

Input: arr = [1,1]
Output: 1

*/


const findSpecialInteger = (arr) => {
    // elemento que aparece más del 25% en la matriz ordenada
    let element = 0;
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            count++;
        } else {
            element = arr[i];
            count = 1;
        }
        if (count > max) {
            max = count;
        }
        if (max > arr.length / 4) {
            return element;
        }
    }
    return element;
}



console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));
