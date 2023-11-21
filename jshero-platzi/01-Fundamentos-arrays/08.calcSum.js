/**
 * Tienes un array de números y tu reto es retornar la suma de todos los valores en él.
 * Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada: numbers: Un array de números.
 * 
 * Ejemplo: 
    Input: [1, 1, 1]
    Ouput: 3
 */

const calcSum = (numbers) =>{
    const initialValue = 0;
    const sumaTotal = numbers.reduce((a,b) => a + b, initialValue)

    return sumaTotal
}

console.log(calcSum([1,2,3]))