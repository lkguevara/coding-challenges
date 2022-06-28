const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db6c94c80amsha636a394a233a63p14c18ejsnfa6e2f78ceda',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=minions', options)
	.then(response => response.json())

	.then(data => {
        const arrayMovies = data.d // me toma el nombre del arreglo que se arroja

        arrayMovies.map((movie) => {
            const title = movie.l // captura el titulo 
            const image = movie.i.imageUrl // captura la imagen
            const cast = movie.s // captura la imagen
            const year = movie.y // captura la imagen

            const poster = ` 
                <div>
                    <img src="${image}"/>
                    <h2>${title}</h2>
                    <p>${cast}</p>
                    <p>Año estreno ${year}</p>
                </div>
            `

            document.getElementById('container').innerHTML += poster

            // console.log(cast)
            
        })
    })

	.catch(err => console.error(err));