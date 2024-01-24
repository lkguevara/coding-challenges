/*
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación
 * 
* DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

// Array
const array: number[] = [1, 2, 3, 4, 5];
const nombres: string[] = ["MoureDev", "MoureDev", "MoureDev"];

// Tuplas
const tupla: [number, string] = [1, "MoureDev"];

// Objetos
const objeto: { nombre: string; edad: number } = {
    nombre: "MoureDev",
    edad: 22,
};

// Dificultad extra
type Contacto = {
    nombre: string;
    telefono: number;
};

const agenda: Contacto[] = [];

const crearContacto = (nombre: string, telefono: number): void => {
    const contacto: Contacto = {
        nombre,
        telefono,
    };
    agenda.push(contacto);
};

const eliminarContacto = (nombre: string): void => {
    const index = agenda.findIndex((contacto) => contacto.nombre === nombre);
    agenda.splice(index, 1);
};

const actualizarContacto = (
    nombre: string,
    nuevoNombre: string,
    nuevoTelefono: number
): void => {
    const index = agenda.findIndex((contacto) => contacto.nombre === nombre);
    agenda[index].nombre = nuevoNombre;
    agenda[index].telefono = nuevoTelefono;
};

const buscarContacto = (nombre: string): Contacto | undefined => {
    return agenda.find((contacto) => contacto.nombre === nombre);
};

const mostrarContactos = (): void => {
    console.log(agenda);
};

const menu = (): void => {
    console.log("1. Crear contacto");
    console.log("2. Eliminar contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Buscar contacto");
    console.log("5. Mostrar contactos");
    console.log("6. Salir");
};



