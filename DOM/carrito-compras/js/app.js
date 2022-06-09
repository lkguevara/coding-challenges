const carrito = document.querySelector('#carrito'); 
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Registro de todos los eventslistener
cargarEventListeners();

function cargarEventListeners () {
    // Dispara cuando se presiona "Agregar Carrito"
    
    listaCursos.addEventListener('click', agregarCursos);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar los cursos del carrito
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo
        limpiarHTML(); // Eliminamos todo el html
    })
}




// Funciones
// Función que añade el curso al carrito
function agregarCursos(e) {
    // console.log(e.target) - Me indica donde me estoy posicionando
    // console.log(e.target.parentElement.parentElement) - Selecciona el padre del padre
    e.preventDefault(); // Evita que se recarge la página

    // Delegación para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(cursoSeleccionado);
       
    }

}

// elimina curso del carrito 
function eliminarCurso (e) {

    if (e.target.classList.contains("borrar-curso")) {
        // obtener id del curso a eliminar
        const cursoId = e.target.getAttribute('data-id')

        // elimina del arreglo de articulos carrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        console.log(articulosCarrito)

        carritoHTML(); //Iterar sobre el carrito y mostrar en el html
    }

}

// Lee los datos del curso
function leerDatosCurso(curso) {
    // crear objeto con el contenido del curso actual 
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    // Validar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some (curso => curso.id === infoCurso.id);

    if (existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map (curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad ++;
                return curso; //Retorna el objeto actualizado
            }else{
                return curso; //Retorna los objetos que no son dusplicados
            }
        });
        articulosCarrito = [...cursos]
    }else {
        // agregamos el producto
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    // agregar elementos al carrito [...articulosCarrito, infoCurso]
    
    carritoHTML();

}


// Muestra el curso seleccionado en el Carrito
function carritoHTML () {

    // limpiar HTML
    limpiarHTML();


    // Recorrer el carrito y generar el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, nombre, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `

            <td>
                <img src="${imagen}" width="80px">
            </td> 
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>

            <td>
                <a href="#" class= "borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // insertar el html del carrito
        contenedorCarrito.appendChild(row)
    });

    

    
}

// eliminar los cursos del tbody

function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}


