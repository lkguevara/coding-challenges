/**
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

*/


function cyberReindeer(road, time) {
    let arrRoad = [road];
    let index = 0;
  
    for (let i = 0; i < time - 1; i++) {
      if (i == 4) road = road.replaceAll("|", "*");
      if (road[index + 1] != "|") {
        index++;
      }
      let newRoad = road.split("");
      newRoad[index] = "S";
      newRoad[0] = ".";
      newRoad = newRoad.join("");
      arrRoad.push(newRoad);
    }
    return arrRoad;
}

console.log(cyberReindeer('S..|...|..', 10 ))