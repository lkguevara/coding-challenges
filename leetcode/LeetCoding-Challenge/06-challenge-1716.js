/** Ejercicio número 1716 . Calcular dinero en Leetcode Bank
https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/?envType=daily-question&envId=2023-12-06

Hercy quiere ahorrar dinero para su primer coche. Todos los días mete dinero en el banco Leetcode. Empieza poniendo 1 $ el lunes, el primer día. De martes a domingo, cada día ingresará 1 dólar más que el día anterior. Cada lunes siguiente, pondrá 1 dólar más que el lunes anterior. 

Dado n, devuelve la cantidad total de dinero que tendrá en el banco Leetcode al final del enésimo día.

Example 1:

    Input: n = 4
    Output: 10
    Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
    Example 2:

Example 2:
    Input: n = 10
    Output: 37
    Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Observa que el segundo lunes, Hercy sólo pone $2.
    Example 3:

Example 3
    Input: n = 20
    Output: 96
    Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
*/


const totalMoney = (n) => {
    let dinero = 0;
    let semana = 0;
    
    for (let index = 1; index <= n; index++) {
        if (index % 7 == 1) {
            semana++;
        }
        dinero += semana + ((index - 1) % 7);
    }
    return dinero;
}

console.log(totalMoney(20));
