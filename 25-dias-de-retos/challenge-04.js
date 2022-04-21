/*
    ¡Es hora de poner el árbol de navidad en casa! 🎄
    Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
    
    Si le pasamos el argumento 5, se pintaría esto:
        ____*____
        ___***___
        __*****__
        _*******_
        *********
        ____#____
        ____#____

    Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

    Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

    Otro ejemplo con un árbol de altura 3:

        __*__
        _***_
        *****
        __#__
        __#__
*/

function createXmasTree (n) {
    // const width = (n * 2 ) - 1
    let height = n
    let stringBase = ''

    for (let i = 1; i <= height; i++) {
       
        const line = '_'.repeat(n - i);
        const asterisk ='*'.repeat(( i * 2 ) - 1);
        const rowTree = line + asterisk + line

        stringBase += rowTree + '\n'
        
    }

    const calcLine = ( (n * 2 - 1)-1) / 2;
    const line = '_'.repeat(calcLine);
    const rowTrunk = line + '#' + line
    const trunk = rowTrunk + '\n' + rowTrunk

    console.log(stringBase + trunk)

}

createXmasTree(3)