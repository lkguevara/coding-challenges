/*
 * - Crea ejemplos de funciones básicas que representen las diferentes posibilidades del lenguaje: Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos. (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades).
 * 
 *  * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */

// Función sin parámetros ni retorno
function funcionBasica(): void {
    console.log("Soy una función básica");
}

// Funciön con parametros
function funcionConParametros(numeroUno: number, numeroDos: number): void {
    console.log(numeroUno + numeroDos);
}

// Función con parámetros y retorno
function funcionConParametrosyRetorno(numeroUno: number, numeroDos: number): number {
    return numeroUno + numeroDos;
}

// Función dentro de función
function funcionDentroDeFuncion(): void {
    function funcionDentro(): void {
        console.log("Soy una función dentro de otra función");
    }
    funcionDentro();
}

// Dificultad extra
function funcionDificultadExtra(cadenaUno: string, cadenaDos: string): number {
    let contador: number = 0;
    for (let i: number = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(cadenaUno + cadenaDos);
            contador++;
        } else if (i % 3 === 0) {
            console.log(cadenaUno);
            contador++;
        } else if (i % 5 === 0) {
            console.log(cadenaDos);
            contador++;
        }
    }
    return contador;
}

