let url = 'https://jsonplaceholder.typicode.com/users' 

fetch(url) 
        .then(response => response.json()) // se resuelve la promesa y se pasa a formato json
        .then(data => mostrarData(data)) // se muestra el objeto en consola
        .catch(error => console.log(error)) // si hay un error lo mostrará

const mostrarData = (data) => { 

    let container = '';
    for (let i = 0; i < data.length; i++) {
        container += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
        
    }

    document.getElementById('data').innerHTML = container
}