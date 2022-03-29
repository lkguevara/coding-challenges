// 1. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (cadena) => { return cadena.slice(0,4)}
console.log(recortarTexto("Hola mundo soy lian")) // imprime hola


// 2. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const arreglo = (cadena) => { return cadena.split(" ")};
console.log(arreglo('Hola mundo soy lian')) //imprime: [ 'Hola', 'mundo', 'soy', 'lian' ]


// 3. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const arreglo2 = (cadena) => { return cadena.repeat(3)};
console.log(arreglo2('Hola')) //imprime: [ 'Hola', 'mundo', 'soy', 'lian' ]


// 4. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const arreglo3 = (cadena) => { return cadena.split("").reverse().join(""); };
console.log(arreglo3("hola")); // aloh

// 5. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromo(cadena) {
    const palindrome = cadena.split("").reverse().join("");
    return  palindrome === cadena ? true : false;
}
console.log(palindromo("oso"));
console.log(palindromo("hola"));
console.log(palindromo("omo"));


// 6.Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deletePattern = (text="", pattern="") => { 
    (!text) 
        ? console.log ("No ingresaste un texto")
        : (!pattern) 
            ? console.log ("No ingresaste un patron") 
            :  console.log(text.replace(new RegExp(pattern, "ig"),"")) // método para reemplazar, primer parametro es el valor a buscar y el segundo parametro con que lo voy a reemplazar
}

console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")); // imprime 1, 2, 3, 4 y 5

// 7) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

    // como cadena de texto
    const capicua = (number) => { 
        const numberCapicua = number.toString().split("").reverse().join("");
        console.log(numberCapicua)
        return numberCapicua == number ? true : false;
    }

    console.log(capicua(2002)) // true