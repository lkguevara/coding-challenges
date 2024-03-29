/* Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

     Ejemplo
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

    01/06 es el 6 de enero, jueves. Cuenta.
    04/01 es el 1 de abril, un viernes. Cuenta.
    12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año 


Cosas a tener en cuenta y consejos:

El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.*/

// DIFICULTAD: FÁCIL

/* 
    1. ¿Cantidad de horas que se harían por los festivos?
    
    2. Condiciones:
        - 2 horas extras por festivo en cierto año
        - Se trabaja de L - V

    3. obtener el mes y día de una fecha dada


*/

// 0 domingo, 1 lunes, 2 martes...
// 0 enero, 1 febrero, 2 marzo...

const countHours = (year, holidays) =>{
    const holiday = holidays.map(holiday => {
        const fecha = holiday + "/" + year
        const numeroDia = new Date(fecha).getDay();
        const dia =  numeroDia != 0 && numeroDia != 6 ? 1 : 0
        return dia
    });
    const totalDias= holiday.reduce((prev, act) => {
        return prev + act
    })
    console.log(totalDias)
    return totalDias * 2
    
    
}

console.log(countHours(2022, ['01/06', '04/01', '12/25'] ))


