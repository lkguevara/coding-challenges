/**
Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado. Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

    array: Un array de strigs con palabras
    term: Un string con el término a buscar
    Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

    Ejemplo
    Input:
    array: ["ana", "santi", "nico", "anastasia"]
    term: "ana"

    Ouput:
    ["ana", "anastasia"]
*/

const filterByTerm = (array, term) => {
    return array.filter(name => name.includes(term))
}

console.log(filterByTerm(["ana", "santi", "nico", "anastasia"], "ana"))