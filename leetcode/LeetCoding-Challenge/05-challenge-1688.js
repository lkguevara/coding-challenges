/** Ejercicio número 1688 . Encontrar palabras que puedan formarse con caracteres
https://leetcode.com/problems/count-of-matches-in-tournament/description/?envType=daily-question&envId=2023-12-05


Se le da un número entero n, el número de equipos en un torneo que tiene reglas extrañas:

    - Si el número actual de equipos es par, cada equipo se empareja con otro. Se juegan un total de n / 2 partidos, y n / 2 equipos pasan a la siguiente ronda.
    - Si el número actual de equipos es impar, un equipo avanza aleatoriamente en el torneo, y el resto queda emparejado. Se juega un total de (n - 1) / 2 partidos, y (n - 1) / 2 + 1 equipos avanzan a la siguiente ronda.

Devuelve el número de partidos jugados en el torneo hasta que se decida un ganador.

Example 1:

    Input: n = 7
    Output: 6
    Explanation: Details of the tournament: 
    - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
    - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
    - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
    Total number of matches = 3 + 2 + 1 = 6.

Example 2:

Input: n = 14
Output: 13
Explanation: Details of the tournament:
- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 7 + 3 + 2 + 1 = 13.
*/


const numberOfMatches = (n) => {
    let torneos = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            torneos = torneos + (n / 2);
            n = n/2;
        }else {
            torneos = torneos + ((n - 1) / 2);
            n = (n - 1) / 2 + 1;
        }
    }


    return torneos

}

console.log(numberOfMatches(7));
