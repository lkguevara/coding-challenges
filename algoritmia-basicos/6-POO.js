// 1. Programa una clase llamada Pelicula.

/* 
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
    - id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
        -1. Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
        -2. Valida que el título no rebase los 100 caracteres.
        -3. Valida que el director no rebase los 50 caracteres.
        -4. Valida que el año de estreno sea un número entero de 4 dígitos.
        -5. Valida que el país o paises sea introducidos en forma de arreglo.
        -6. Valida que los géneros sean introducidos en forma de arreglo.
        -7. Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        -8. Crea un método estático que devuelva los géneros aceptados*.
        -9. Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        -10. Crea un método que devuelva toda la ficha técnica de la película.
        -11. Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
*/

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

// método constuctor
class Pelicula  {
     constructor({id, titulo, director, estreno, pais, genero, calificacion}) {
         this.id = id;
         this.titulo = titulo;
         this.director = director;
         this.estreno = estreno;
         this.pais = pais;
         this.genero = genero;
         this.calificacion = calificacion;

         this.validarIMDB (id);
         this.validarTitulo (titulo);
         this.validarDirector (director);
         this.validarEstreno (estreno);
         this.validarPais (pais);
         this.validarGeneros(genero);
         this.validarCalificacion(calificacion);
         
         
     }

    //*8.  método estático
    static get listaGeneros () {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance"," Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados () {
        return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`)
    }

    // Validaciones generales
    validarCadena (propiedad, valor){
       if (!valor) return console.log (`${propiedad} "${valor}" está vacío`);
       if (typeof valor  !== "string") return console.log (`${propiedad} "${valor}" ingresado NO es una cadena de texto`);

       return true;
    }
    validarNumero (propiedad, valor){
       if (!valor) return console.log (`${propiedad} "${valor}" está vacío`);
       if (typeof valor  !== "number") return console.log (`${propiedad} "${valor}" ingresado NO es un número`);

       return true;
    }
    validarLongitudCadena (propiedad, valor, longitud){
       if (valor.length > longitud) return console.log (`${propiedad} "${valor}" excede el número de caracteres permitidos ${longitud}`);
       
       return true;
    }
    validarArreglo (propiedad, valor){
        if(!valor) return console.log(`${propiedad} "${valor}" está vacío`);;

        if(!(valor instanceof Array)) return console.log(`${propiedad} "${valor}" ingresado NO es un arreglo`);

        if(valor.length === 0) return console.log(`${propiedad} "${valor}" no tiene datos`);
        
        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.log (`El valor "${cadena}" ingresado NO es una cadena de texto`)
        }
       
       return true;
    }

//*1.  Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    validarIMDB (id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.log(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los primeros 2 sean letras y los 7 restantes números `)
            }
        }
    }
//* 2. Valida que el título no rebase los 100 caracteres.
    validarTitulo (titulo) {
        if (this.validarCadena("Titulo", titulo)) {
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
    }

//* 3. Valida que el director no rebase los 50 caracteres.
    validarDirector (director) {
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
    }

//* 4. Valida que el año de estreno sea un número entero de 4 dígitos.
    validarEstreno (estreno) {
        if (this.validarNumero("Estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.log(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 digitos `)
            }
        }
    }

//* 5. Valida que el país o paises sea introducidos en forma de arreglo.
    validarPais (pais) {
        this.validarArreglo("pais", pais)
    }

//* 6. Valida que los géneros sean introducidos en forma de arreglo y Valida que los géneros introducidos esten dentro de los géneros aceptados.
    validarGeneros (genero) {
        if (this.validarArreglo("Generos", genero)){
            for (let iterator of genero) {
                console.log(iterator, Pelicula.listaGeneros.includes(iterator));
                if(!Pelicula.listaGeneros.includes(iterator)){
                   console.log (`Genero(s) incorrectos "${genero.join(",")}"`);
                   Pelicula.generosAceptados();
                }
            }
            
        }

    }
    
//* 9. Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    validarCalificacion (calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            return (calificacion <0 || calificacion > 10) ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`) : this.calificacion = calificacion.toFixed(1)
        }
    }

//* 10. Crea un método que devuelva toda la ficha técnica de la película.
    fichaTecnica(){
        console.info(`Ficha técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join(",")}"\nGenero: "${this.genero}"\nCalificación: "${this.calificacion}"\nIMDB: "${this.id}"`)
    }
}
// Pelicula.generosAceptados();
/*const peli = new Pelicula ({
    id: "tt1392170",
    titulo: "The Hunger Games",
    director: "Gary Ross",
    estreno: 2012,
    pais: ["Estados unidos"],
    genero: ["Comedy"],
    calificacion: 7.89,
});

peli.fichaTecnica();*/

//* 11. Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

const misPelis = [
    {
        id: "tt1392170",
        titulo: "The Hunger Games",
        director: "Gary Ross",
        estreno: 2012,
        pais: ["Estados unidos"],
        genero: ["Comedy"],
        calificacion: 7.89,
    },

    {
        id: "tt1392170",
        titulo: "The Hunger Games",
        director: "Gary Ross",
        estreno: 2012,
        pais: ["Estados unidos"],
        genero: ["Comedy"],
        calificacion: 7.89,
    },

    {
        id: "tt1392170",
        titulo: "The Hunger Games",
        director: "Gary Ross",
        estreno: 2012,
        pais: ["Estados unidos"],
        genero: ["Comedy"],
        calificacion: 7.89,
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());