/** Ejercicio número 1464  Producto máximo de dos elementos de una matriz
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/?envType=daily-question&envId=2023-12-12

Dada la matriz de enteros nums, se eligen dos índices diferentes i y j de dicha matriz. Devuelve el valor máximo de (nums[i]-1)*(nums[j]-1).

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12

*/


const maxProduct = (nums) => {
    let max = 0;
    let secondMax = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
        secondMax = max;
        max = nums[i];
        } else if (nums[i] > secondMax) {
        secondMax = nums[i];
        }
    }
    return (max - 1) * (secondMax - 1);
}



console.log(maxProduct([3,4,5,2]));
