// 1. Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena ="") => {
    // validar que el texto ingresado sea válido
     if(!cadena) return console.log("no ingresaste una cadena de texto");
     if(typeof cadena !== "string") return console.log(`El valor ${cadena} ingresado no es una cadena de texto`);

    //  contadores
    let vocales=0, consonantes=0;
    cadena = cadena.toLocaleLowerCase()
    // loop
    for (let letra of cadena){
        if (/[aeiou]/.test(letra)) vocales++;
        
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
        
    }

    return console.log({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras("Hola")

// 2. Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Lian Guevara") devolverá verdadero.

    const validarNombre = (nombre="") => {
        // validar que el texto ingresado sea válido
        if(!nombre) return console.log("no ingresaste una nombre");
        if(typeof nombre !== "string") return console.log(`El valor ${nombre} ingresado no es una cadena de texto`);

        let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre); //^ --> No puede haber nada antes de la expresión... $ --> no puede haber nada despues de la expresión .. \s espacios en blanco
        return (expReg)
            ?console.log(`"${nombre}", es un nombre válido`)
            :console.log(`"${nombre}", es un nombre invalido`)
    }

    validarNombre("Lian");

// 3. Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero

    /* email correcto: 
        - Antes del @ deberá ir: *letras *números *guiones *puntos.
        - Después del @ y antes del .: *letras *números *guiones medios
        - Después del .: deberá validar que al menos existan 2 caracteres
    */

    const validarEmail = (email="") => {
        // validar que el texto ingresado sea válido
        if(!email) return console.log("no ingresaste una email");
        if(typeof email !== "string") return console.log(`El valor ${email} ingresado no es una cadena de texto`);

        let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email); 
        return (expReg)
            ?console.log(`"${email}", es un email válido`)
            :console.log(`"${email}", es un email invalido`)
    }

    validarEmail(); //no ingresaste una email
    validarEmail(34); //El valor 34 ingresado no es una cadena de texto
    validarEmail("lian,kat@gmail"); //"lian,kat@gmail", es un email invalido
    validarEmail("liann.guevara@gmail.com"); //"liann.guevara@gmail.com", es un email válido