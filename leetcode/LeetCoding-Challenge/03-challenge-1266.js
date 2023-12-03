/** Ejercicio número 1266 . Encontrar palabras que puedan formarse con caracteres
https://leetcode.com/problems/minimum-time-visiting-all-points/description/?envType=daily-question&envId=2023-12-03


En un plano 2D, hay n puntos con coordenadas enteras points[i] = [xi, yi]. Devuelve el tiempo mínimo en segundos para visitar todos los puntos en el orden dado por puntos.

Puedes moverte según estas reglas:

* En 1 segundo, puedes
    * moverte verticalmente una unidad,
    * moverte horizontalmente una unidad, o
    * moverte diagonalmente sqrt(2) unidades (en otras palabras, moverte una unidad verticalmente y luego una unidad horizontalmente en 1 segundo).
* Tienes que visitar los puntos en el mismo orden en que aparecen en la matriz.
* Puedes pasar por puntos que aparecen más tarde en el orden, pero no cuentan como visitas.

Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5

Pasos

1. Inicializar un contador de tiempo: Este contador llevará la cuenta del tiempo total necesario para visitar todos los puntos.

2. Iterar a través de los puntos dados: Necesitarás recorrer el array de puntos y calcular el tiempo necesario para ir de un punto a otro.

3. Calcular la distancia entre puntos consecutivos: Para cada par de puntos consecutivos, calcula la diferencia absoluta en las coordenadas x e y. La distancia que necesitas recorrer es el máximo entre estas dos diferencias.

4. Sumar el tiempo necesario para moverse entre puntos: El tiempo necesario para moverse de un punto a otro es simplemente el valor calculado en el paso anterior, ya que puedes moverte en diagonal y cubrir una unidad en ambas direcciones en 1 segundo.

5.Devolver el contador de tiempo: Una vez que hayas iterado a través de todos los puntos y sumado el tiempo necesario para moverte entre ellos, devuelves el contador de tiempo.
*/


const minTimeToVisitAllPoints = (points) => {
    // inicializa tiempo en cero
    let time = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        const deltaX = Math.abs(x2 - x1);
        const deltaY = Math.abs(y2 - y1);
        time += Math.max(deltaX, deltaY);
    }

    return time;
}

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));
