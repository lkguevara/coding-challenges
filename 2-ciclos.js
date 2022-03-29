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



// 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

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





// 7 Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

    const factorial = (number) => {
        let total = 1;
        for (i = 1; i <= number; i++) {
            total *= i;
        }
        return total; 
    }

    console.log(factorial(5));

// 8. Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

    const primo = (number) => {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
            return true
            
        }

    }  
    console.log(primo(7)); 

//  9. Muestre todos los números divisores de un número introducido en prompt
let num5 = parseInt(prompt(`Introduce el primer número`,1))

for (let i=1; i<=num1; i++) {
    if (num1 % i == 0) {
        console.log(i)
    }
    
}

// 10. Tabla de multiplicar de un número introducido por pantalla
    let num1 = parseInt(prompt(`Introduce el primer número`,1)), contador=0

    for (let i=1; i<=10; i++) {
        console.log(`${num1} x ${i} = ${num1*i}`)

    }

