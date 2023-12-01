/** 
 
Ejercicio número 88 . Fusionar matriz ordenada https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * Se le proporcionan dos matrices de números enteros nums1 y nums2, ordenadas en orden no decreciente , y dos números enteros my n, que representan el número de elementos en nums1 y nums2 respectivamente.
 * Fusionar nums1 y nums2 en una sola matriz ordenada en orden no decreciente .
 * La función no debe devolver la matriz ordenada final, sino que debe almacenarse dentro de la matriz nums1 . Para dar cabida a esto, nums1 tiene una longitud de m + n, donde los primeros melementos indican los elementos que deben fusionarse y los últimos nelementos están configurados 0 y deben ignorarse. nums2 tiene una longitud de n.

Ejemplo 1:

Entrada: números1 = [1,2,3,0,0,0], m = 3, números2 = [2,5,6], n = 3
 Salida: [1,2,2,3,5,6]
 Explicación: Las matrices que estamos fusionando son [1,2,3] y [2,5,6]. 
El resultado de la fusión es [ 1 , 2,2 , 3,5,6 ] con los elementos subrayados provenientes de nums1.
Ejemplo 2:

// Pasos:
    - Crear dos punteros para cada matriz
    - Crear un puntero para la matriz final
    - Recorrer ambas matrices de forma descendente y comparar los valores de los punteros de cada matriz y asignar el valor mayor al puntero de la matriz final y decrementar el puntero de la matriz que se le asigno el valor mayor
    - Retornar la matriz final

*/

const merge = (nums1, m, nums2, n) => {
    // Crear un puntero para cada matriz
    let p1 = m-1;
    let p2 = n-1;

    // Crear un puntero para la matriz final
    let currentIndex = m + n -1;

    // Recorrer ambas matrices de forma descendente y comparar los valores de los punteros de cada matriz y asignar el valor mayor al puntero de la matriz final y decrementar el puntero de la matriz que se le asigno el valor mayor
    while (p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[currentIndex] = nums1[p1] 
            p1--
        } else {
            nums1[currentIndex] = nums2[p2]
            p2--
        }

        currentIndex --
    }
    // Retornar la matriz final
    return nums1
}

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
