// 1) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

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

// 2. Comprobar si un año es bisiesto

    const leapYear = (year) => {
        const leap = new Date(year, 1, 29).getDate() === 29;

        if (leap) {
            return console.log(`El año ingresado ${year} es bisiesto`);
        }else{
            console.log(`El año ingresado ${year} no es bisiesto`)
        }
    }

    leapYear(2024)