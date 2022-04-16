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

// 7. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

    // como cadena de texto
    const capicua = (number) => { 
        const numberCapicua = number.toString().split("").reverse().join("");
        console.log(numberCapicua)
        return numberCapicua == number ? true : false;
    }

    console.log(capicua(2002)) // true


// 8. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    const devolverCuadrados = (arreglo=undefined) => { 
       
        // validaciones
        if(arreglo === undefined) return console.log("no ingresaste un arreglo de números");
        if(!(arreglo instanceof Array)) return console.log(`El valor ingresado no es un arreglo`);
        if(arreglo.length === 0) return console.log(`El arreglo se encuentra vacío`);
        
        for (let num of arreglo) {
            if(typeof num !== "number") return console.log (`El valor ${num} no es un número`)
        }

        // map: permite generar un nuevo arreglo a partir de uno original, pudiendose hacer diversas modificaciones
        const nuevoArreglo = arreglo.map(el => el*el);
        return console.log(`Arreglo original: ${arreglo}, \nArreglo elevado al cuadrado: ${nuevoArreglo}`)
    }

    devolverCuadrados() //no ingresaste un arreglo de números
    devolverCuadrados(true) //El valor ingresado no es un arreglo
    devolverCuadrados({}) //El valor ingresado no es un arreglo
    devolverCuadrados([]) // El arreglo se encuentra vacío
    devolverCuadrados([1,4,5]) //Arreglo original: 1,4,5, Arreglo elevado al cuadrado: 1,16,25



// 9. Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

    const filtrarArreglo = [5,6,8,14,2];
    let minimo = Math.min(...filtrarArreglo)
    let maximo = Math.max(...filtrarArreglo)
    console.log(`El valor minimo del arreglo dado [${filtrarArreglo}], es: ${minimo} y el valor maximo es: ${maximo}`)

// 10. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

    const arrParImpares = (arreglo) => {
        let par = arreglo.filter(e => e%2 === 0);
        let impar = arreglo.filter(e => e % 2 !== 0);
        return console.log(`Los número pares son: ${par} y los impares son ${impar}`)
    }

    arrParImpares([1,2,3,4,5,6,7,8,9,0])
    

// 11. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    
    const arrAscenDescent = (arreglo) => {
        return console.log(`Arreglo ordenado ascendente: ${arreglo.sort(function(a, b){return a - b})} y  descendiente: ${arreglo.sort(function(a, b){return b - a})}`)
    }
    arrAscenDescent([7,5,7,8,6]) 


// 12. Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
    
    const eliminarDuplicados = (arreglo=undefined) =>{ 
         // validaciones
         if(arreglo === undefined) return console.log("no ingresaste un arreglo de números");
         if(!(arreglo instanceof Array)) return console.log(`El valor ingresado no es un arreglo`);
         if(arreglo.length === 0) return console.log(`El arreglo se encuentra vacío`);
         if(arreglo.length === 1) return console.log(`El arreglo debe tener al menos dos elementos`);

        //  return console.log({
        //      original: arreglo,
        //      sinDuplicados: arreglo.filter((valor,posicion,self)=> self.indexOf(valor) === posicion)
        //  })

        //  Aplicando con set (permite crear objetos sin elementos duplicados)
        return console.log({
            original: arreglo,
            sinDuplicados: [...new Set(arreglo)]
        })
         
    }

    eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]) 

// 13. Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

    const promedioArreglo = (arreglo=undefined) =>{ 
        // validaciones
        if(arreglo === undefined) return console.log("no ingresaste un arreglo de números");
        if(!(arreglo instanceof Array)) return console.log(`El valor ingresado no es un arreglo`);
        if(arreglo.length === 0) return console.log(`El arreglo se encuentra vacío`);

        // 
        let contador = 0;
        let promedio = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual / arreglo.length, contador ) 

    return console.log(promedio)
        
    }

    promedioArreglo([9,8,7,6,5,4,3,2,1,0]);

// 14. Calcular propina de una factura dada, si la venta está entre 50 y 300 se tiene una propina del 15% pero si el valor es diferente la propina será del 20%. Luego, se creará un arreglo con las propinas brindadas. Por último, se creará un arreglo en el cual sume la factura dada más la propina.

    // Calculando la propina
    const calcTip = (bill) => {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    }

    // Creando el arreglo de las facturas y propinas
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
    
    console.log(bills, tips); //imprime: [ 125, 555, 44 ] [ 18.75, 111, 8.8 ]

    // Arreglo total (factura + propina);

    const totals = [bills[0]+ tips[0], bills[1]+ tips[1], tips[2] + bills[2] ]
    console.log(bills, tips, totals); // imprime: [ 125, 555, 44 ] [ 18.75, 111, 8.8 ] [ 143.75, 666, 52.8 ]

   