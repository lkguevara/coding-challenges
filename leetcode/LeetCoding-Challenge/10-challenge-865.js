/** Ejercicio número 865  Matriz de transposiciónc
https://leetcode.com/problems/transpose-matrix/description/?envType=daily-question&envId=2023-12-10

Dada una matriz entera 2D, devuelve la transposición de la matriz.

La transposición de una matriz es la matriz volteada sobre su diagonal principal, cambiando los índices de fila y columna de la matriz.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

*/


const transpose = (matrix) => {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0 ; j < matrix[i].length; j++) {
        result[j].push(matrix[i][j]);
        }
    }
    return result;
}



console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
