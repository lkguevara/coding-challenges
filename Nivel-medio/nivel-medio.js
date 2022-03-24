// 1. Algoritmo que permita leer solo numeros positivos hasta reunir 100 numeros pares o ochenta numeros 5. Indicar luego la totalidad de numeros leidos.

    let numerosPares = 0 //Inicia en cero hasta contar 100
    let numeros5 = 0 //Inicia en cero hasta contar 80 ** Sucede en caso que no se completen los 100 pares**
    let numerosLeidos = 0 //Inicia en cero **Conocer la cantidad de números leidos


    // Loop que me permita recorrer cierta cantidad de números aleatorios. 
    while (numerosPares < 100 && numeros5 < 80 ) {              // Mientras que numerosPares sea menor que 100 y numeros5 sea menor que 80
        let aleatorio = Math.ceil(Math.random()*(50-1)+1);    // Método para generar números aleatorios entre 1 y 50
        console.log(aleatorio)                                // Imprime dichos números aleatorios
        if (aleatorio == 5) {                                // Condicional para imprimir los números pares
            numeros5++                                      //Guarda los numeros 5 impresos
        }  
        if (aleatorio % 2 == 0) {
            numerosPares++                                 //Guarda los numeros pares impresos
        }    
        numerosLeidos++                                 // Si no cumple la condiciones establecidas anteriormente se genera un nuevo número
        
    }

    console.log(`La cantidad de números leídos fue: ${numerosLeidos}`);
    console.log(`La cantidad de números pares fue: ${numerosPares}`);
    console.log(`La cantidad de números cinco fue: ${numeros5}`);

// 2. Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahí mostrar el resultado.

    let suma= 0, contador1= 0

    do {
        var numero = parseInt(prompt(`Introduce números hasta que meta uno negativo`,0)); //Por defecto se tendrá un cero

        if (isNaN(numero)) {  //Si no es un numero
            numero = 0;

        }else if(numero >= 0){
            suma+=numero

            contador++
        }

        console.log(suma,contador)
    } while (numero >=0);

    alert(`La suma de todos los números es: ${suma} y la media de todos los numeros es ${suma/contador}`)

// 3. Hacer un programa que muestre todos los numeros que hay entre dos números introducidos por el usuario

    let num = parseInt(prompt(`Introduce el primer número`,0))
    let num2 = parseInt(prompt(`Introduce el segundo número`,0))

    for (let i = num1; i <= num2; i++) {
        console.log(i)
    }

// 4.. Mostrar todos los números impares entre dos números introducidos por el usuario.
    let num3 = parseInt(prompt(`Introduce el primer número`,0))
    let num4 = parseInt(prompt(`Introduce el segundo número`,0))

    for (let i = num1; i <= num2; i++) {
        if (i %2 != 0) {
            console.log(i)
        }
        
    }

// 5. Programa una función que cuente el número de caracteres de una cadena de texto.
    
    // function count(cadena="") {
    //     if (!cadena) {
    //         console.log("No ingresaste ninguna cadena")
    //     }
    //     else {
    //         console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`) ;
    //     }
    // }

    const contar = (cadena="") => 
        (!cadena ) ? console.log("No ingresaste ninguna cadena")
        : console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

    
    console.log(contar("Hola mundo"));
    // console.log(count(85214));


// 6. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

    const recortarTexto = (cadena) => { return cadena.slice(0,4)}
    console.log(recortarTexto("Hola mundo soy lian")) // imprime hola


// 7. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

    const arreglo = (cadena) => { return cadena.split(" ")};
    console.log(arreglo('Hola mundo soy lian')) //imprime: [ 'Hola', 'mundo', 'soy', 'lian' ]


// 8. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

    const arreglo2 = (cadena) => { return cadena.repeat(3)};
    console.log(arreglo2('Hola')) //imprime: [ 'Hola', 'mundo', 'soy', 'lian' ]


// 9. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

    const arreglo3 = (cadena) => { return cadena.split("").reverse().join(""); };
    console.log(arreglo3("hola")); // aloh


// 10. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

    const textoEnCadena = (cadena="", texto="") => {
        if (!cadena) return console.log ("no ingresaste el texto largo");

        if (!texto) return console.log("no ingresaste la palabra a evaluar");

        let i = 0, contador = 0;

        while (i !== -1) { //-1 porqué sino lo encuentra, indexof pondrá -1
            i = cadena.indexOf(texto, i); //buscar dentro de la cadena el texto y la posición
            if(i !== -1){ // si lo encuentra suma posición y contador
                i++;                                
                contador++;
            }
        }
        return console.log(`La palabra ${texto} se repite ${contador} veces`)
    }

    textoEnCadena("hola mundo adios mundo", "mundo")

// 11. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

    function palindromo(cadena) {
        const palindrome = cadena.split("").reverse().join("");
        return  palindrome === cadena ? true : false;
    }
    console.log(palindromo("oso"));
    console.log(palindromo("hola"));
    console.log(palindromo("omo"));


// 12.Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

    const deletePattern = (text="", pattern="") => { 
        (!text) 
            ? console.log ("No ingresaste un texto")
            : (!pattern) 
                ? console.log ("No ingresaste un patron") 
                :  console.log(text.replace(new RegExp(pattern, "ig"),"")) // método para reemplazar, primer parametro es el valor a buscar y el segundo parametro con que lo voy a reemplazar
    }

    console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")); // imprime 1, 2, 3, 4 y 5

// 13) Programa una función que obtenga un numero aleatorio entre 501 y 600.

    const random = (max,min) => { return Math.ceil(Math.random()*(max-min)+min); }
    console.log(random(600,501));

// 14) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

    // como cadena de texto
    const capicua = (number) => { 
        const numberCapicua = number.toString().split("").reverse().join("");
        console.log(numberCapicua)
        return numberCapicua == number ? true : false;
    }

    console.log(capicua(2002)) // true


// 15) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

    const factorial = (number) => {
        let total = 1;
        for (i = 1; i <= number; i++) {
            total *= i;
        }
        return total; 
    }

    console.log(factorial(5));

// 16) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

    const primo = (number) => {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
            return true
            
        }

    }  
    console.log(primo(7)); 

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

    const anios = (dateString= undefined) => {

        if (dateString === undefined) return console.log("no ingresaste la fecha");
        if (!dateString instanceof Date) return console.log("no ingresaste una fecha valida");

        // calcular el día de hoy
        let date = new Date().getTime() - dateString.getTime(),
            aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365
        aniosHumanos = Math.floor(date / aniosEnMilisegundos)
        
        return (Math.sign(aniosHumanos)=== -1) 
            ? console.log(`faltan ${Math.abs(aniosHumanos)} años para el ${dateString.getFullYear()}`) 
            : (Math.sign(aniosHumanos)=== 1)   
                ? console.log((`Han pasado ${aniosHumanos} años desde ${dateString.getFullYear()}`) )
                :  console.log(`Estamos en el año actual ${dateString.getFullYear()}`)


    }  
    console.log(anios(new Date(1984,4,23)));  