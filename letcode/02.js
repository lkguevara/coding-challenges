/* Ejercicio # 13. Roman to Integer leetcode // #82 make it real

    Los números romanos están representados por siete símbolos diferentes: I, V, X, L, C, D y M.

    Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000


    Dado un número romano, conviértelo en un número entero.
/*

/* Pasos:

1. Leer y entender bien el problema, probar casos generados por nosotros.

2. Proponer una solución en pseudocodigo, validar a través de una prueba de escritorio.

    a. definir las variables para los simbolos romanos.

        simbolos = {
            I:            1
            V:            5
            X:            10
            L:            50
            C:            100
            D:            500
            M:            1000
            IV:           4
            IX:           9
            XL:           40
            XC:           90
            CD:           400
            CM:           900
        }

    b. definir reglas

        1. if input [i] == I  || input [i+1] == V
            simbolos = ["IV"]

        2. if input [i] == I  || input [i+1] == X
            simbolos = ["IX"]
            .
            .
            .
        6. if input [i] == C  || input [i+1] == M
            simbolos = ["CM"]

    c. Aplicar las reglas 
    
        resultado = 0
        for (let i = 0; i < input.length - 1; i++)
            enteroActual = reglas(input[i] + input[i+1])
            resultado += enteroActual

        return result


    console.log(I+V)
*/

    

    const numerosRomanos = (s) => {
        const simbolos = {
            I:            1,
            V:            5, 
            X:            10,
            L:            50,
            C:            100,
            D:            500,
            M:            1000,
            
        }

        let resultado = 0, enteroActual =0;

        for (let i = 0; i < s.length; i++) {
            siguienteDigito = i < s.length - 1 ? s[i+1] : "B"
            
            enteroActual = reglasParticulares(s[i], siguienteDigito)

            if ( enteroActual == 0) {
                enteroActual = simbolos[s[i]]
            }else{
                i+=1
            }
            resultado += enteroActual
        }
        return resultado
    };

    function reglasParticulares (digitoActual, siguienteDigito) {

        const simbolosComplejos = {
            IV:           4,
            IX:           9,
            XL:           40,
            XC:           90,
            CD:           400,
            CM:           900
        }


        if (digitoActual == "I"  && siguienteDigito == "V") {
            return simbolosComplejos["IV"]

        }else if (digitoActual == "I"  && siguienteDigito == "X") {
            return simbolosComplejos["IX"]

        }else if (digitoActual == "X"  && siguienteDigito == "L") {
            return simbolosComplejos["XL"] 
        
        }else if (digitoActual == "X"&& siguienteDigito == "C") {
            return simbolosComplejos["XC"]
        
        }else if (digitoActual == "C"  && siguienteDigito == "D") {
            return simbolosComplejos["CD"]
        
        }else if (digitoActual == "C" && siguienteDigito == "M") {
            return simbolosComplejos["CM"]
        }else{
            return 0
        }  

    }  

    

    console.log(numerosRomanos("IV"))


// otra forma

function romanoAEntero(s) {
    let simbolos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let resultado = 0
    for (let i = 0; i < s.length; i++) {
        if (simbolos[s[i] + s[i + 1]]) {
            resultado += simbolos[s[i] + s[i + 1]]
            i++
        } else {
            resultado += simbolos[s[i]]
        }
    }
    return resultado
}

console.log(romanoAEntero("VII"))
