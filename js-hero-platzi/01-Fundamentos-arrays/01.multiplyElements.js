/*Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos. Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]*/

const multiplyElements = (array) => {
    const newArray = array.map(e => e * 2)
    return newArray
}

console.log(multiplyElements([2, 4, 5, 6, 8]))