//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var artistId = objetoQuery.get('id');


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +artistId)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        console.log(data);
        let contenedorData = document.querySelector(".fila1");
        let artista = data
        
        contenedorData.innerHTML =
    `
    <div class="fila1">
            <div class="columna1">
                <img class="imagen-cancion" src="${artista.picture_big}" alt="Imagen de Album ${artista.name}">
            </div>
            <div class="columna2">
                <h3 class="texto-gris">Artista</h3>
                <h2>${artista.name}</h2>
                <h3 class="texto-gris">${artista.nb_fan} fans</h3>
                <ul class="acciones">
                    <li class="añadir">Añadir</li>
                    <li class="mix">Mix</li>
                    
                </ul>
            </div>
    </div>
    `
    
    }).catch(function(error){
        console.error(error)
    })

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/top")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let playlist = data.data
        let contenedorPlaylist = document.querySelector(".playlist");

        for (const cancion of playlist) {
            contenedorPlaylist.innerHTML +=`
            
            
            <div class="song">
                <p><audio class="audios" src="${cancion.preview}" controls></audio></p>
                <p><a href="detalles-tracks.html?id=${cancion.id}" class="songArtista" >${cancion.title_short}</a> </p>
                <p class="d-none"><a href="detalles-album.html?id=${cancion.album.id}" class="songArtista" >${cancion.album.title}</a></p> 
                <p>${cancion.rank}</p>
            </div>
            
            
            
            `
        }
        
    }).catch(function(error){
        console.error(error)
    })

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/albums")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
    let Albumes = data.data
    let contenedorAlbumes= document.querySelector(".fila3");
    console.log(Albumes);
    
    for (const album of Albumes) {
         contenedorAlbumes.innerHTML += `
    
        
            <div class="contenedor-imagen">
                <a href="detalles-album.html?id=${album.id}"><img src="${album.cover_big}" alt="Imagen de album"></a>
                <h3 class="texto-album">${album.title}</h3>
            </div>
            
    `
    }
   
    }).catch(function(error){
        console.error(error)
    })