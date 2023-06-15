/* Escribe un programa que sea capaz de generar contraseñas de forma aleatoria. Podrás configurar generar contraseñas con los siguientes parámetros:
    - Longitud: Entre 8 y 16.
    - Con o sin letras mayúsculas.
    - Con o sin números.
    - Con o sin símbolos.
    (Pudiendo combinar todos estos parámetros entre ellos)
 */

const generatePassword = (longitud, letrasMayus, numeros, simbolos) => { 
    let caracteres = "abcdefghijklmnopqrstuvwxyz"

    if(letrasMayus){
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if(numeros){
        caracteres += '0123456789'
    }

    if(simbolos){
        caracteres += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }

    let contraseña = ""
    
    for (let i = 0; i < longitud; i++) {
        contraseña += caracteres[(Math.floor(Math.random() * caracteres.length))]
    }
    return contraseña
}

let contraseña = generatePassword(12, true, true, true);
console.log(contraseña);