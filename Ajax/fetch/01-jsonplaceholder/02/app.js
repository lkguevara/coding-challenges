let url = 'https://jsonplaceholder.typicode.com/' 

function posts () {
    let posts = []
    fetch(url + "posts")
      .then(response => response.json())
      .then(json => console.log(json))
}
posts()

// funcion asincrona

async function posts () {
    const response = await fetch(url + "posts")
    const data = await response.json()  
    console.log(data);
    // mostrar cuantos datos tienen userId = 1
    let count = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].userId == 1) {
            count++
        }
    }
    console.log(count);

    // aplicando con reduce
    let count2 = data.reduce((acc, item) => {
        if (item.userId == 1) {
            acc++
        }
        return acc
    }
    , 0)
    console.log(count2);

    // contar cuantos datos tiene cada userid
    let count3 = data.reduce((acc, item) => {
        if (acc[item.userId]) {
            acc[item.userId]++
        } else {
            acc[item.userId] = 1
        }
        return acc
    }
    , {})
    console.log(count3);
    


}
