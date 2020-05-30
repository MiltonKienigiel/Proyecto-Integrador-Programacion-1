//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var generoId = objetoQuery.get('id');





fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/artists")
.then(function(response){
    return response.json()
})
.then(function(data){

    let artistaGenero = data.data
    let contenedorArtistas = document.querySelector(".seccion-artista")
    
    for (const artista of artistaGenero) {
        contenedorArtistas.innerHTML += 
        `
        <div>
            <div class="container2">
                <a href="details.html?id=${artista.id}">
                    <img class="imagen-drake" src="${artista.picture_big}" alt="Imagen de ${artista.name}">
                </a>
                <a class="textos" href="details.html?id=${artista.id}">${artista.name}</a>
                <div class="textos2">${artista.type}</div>
            </div>
        </div>
        
        
        `
    }
    
    
}).catch(function(error){
    console.error(error)
})


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/radios")
.then(function(response){
    return response.json()
})
.then(function(data){

    let radios = data.data
    let contenedorRadios = document.querySelector(".seccion-album")
    
    for (const radio of radios) {
        contenedorRadios.innerHTML += 
        `
    <div>   
        <div class="container3">
            <a href="detalles-album.html?id=${radio.id}">
                <img class="imagen-colores" src="${radio.picture_big}" alt="Imagen de ${radio.title}">
                
            </a>
            <a class="textos" href="detalles-album.html?id=${radio.id}">${radio.title}</a>
            <div class="textos2">50 canciones - 100.000 fans</div>
        </div>
    </div>
        
        
        `
    }
    
}).catch(function(error){
    console.error(error)
})
