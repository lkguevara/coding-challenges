/*
    contar los días del calendario hasta el 25 de diciembre, Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

    Veamos unos ejemplos:

    const date1 = new Date('Dec 1, 2021')
        daysToXmas(date1) // 24

    const date2 = new Date('Dec 24, 2021 00:00:01')
        daysToXmas(date2) // 1

    const date3 = new Date('Dec 24, 2021 23:59:59')
        daysToXmas(date3) // 1

    const date4 = new Date("December 20, 2021 03:24:00")
        daysToXmas(date4) // 5

    El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

    ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -):
*/

function daysToXmas(date) {
    let fechaActual = new Date(date);
    let fechaFutura = new Date('Dec 25, 2021');

    let diasDiferencia = fechaFutura.getTime() - fechaActual.getTime();
    let diasMS = 1000 * 60 * 60 * 24

    return Math.ceil(diasDiferencia / diasMS);
    

}

console.log(daysToXmas('Dec 1, 2021'));
console.log(daysToXmas('Dec 24, 2021 00:00:01'));
console.log(daysToXmas('Dec 24, 2021 23:59:59'));
console.log(daysToXmas("December 20, 2021 03:24:00"));
console.log(daysToXmas('Dec 25, 2021'));
console.log(daysToXmas('Dec 26, 2021'));
console.log(daysToXmas('Dec 31, 2021'));
console.log(daysToXmas('Jan 1, 2022 00:00:01'));
console.log(daysToXmas('Jan 1, 2022 23:59:59'));

