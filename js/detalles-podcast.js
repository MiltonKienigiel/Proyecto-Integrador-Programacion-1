
//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var albumId = objetoQuery.get('id');




fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+albumId)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".fila1");
        let album = data
        console.log(album);
        
        contenedorData.innerHTML =
    `
    <div class="fila1">
            <div class="columna1">
                <img class="imagen-cancion" src="${album.cover_big}" alt="Imagen de Album ${album.title}">
            </div>
            <div class="columna2">
                <h3 class="texto-gris">${album.type}</h3>
                <h2>${album.title}</h2>
                <a href="details.html?id=${album.artist.id}" class="texto-a">${album.artist.name} </a>
                <h3 class="texto-gris">${album.tracks.data.length} Canciones - ${album.duration} segundos - Publicado el ${album.release_date} - ${album.fans} fans</h3>
                <ul class="acciones">
                    <li class="añadir">Añadir</li>
                    <li class="mix">Mix</li>
                    
                </ul>
            </div>
    </div>
    `
    let cancionesAlbum = album.tracks.data
    let contenedorPlaylist = document.querySelector(".playlist");
    
    for (const cancion of cancionesAlbum) {
        contenedorPlaylist.innerHTML +=`
        
        
        <div class="song">
            <p>${cancion.title_short}</p>
            <p class="d-none">${cancion.artist.name}</p>
            <p>${album.title}</p> 
            <p>${cancion.rank}</p>
        </div>
        
        
        
        `
    }
    let artistId = album.artist.id

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/albums")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        let Albumes = data.data
        let contenedorAlbumes= document.querySelector(".fila3");
        console.log(Albumes);
        
        for (const albums of Albumes) {
             contenedorAlbumes.innerHTML += `
        
            
                <div class="contenedor-imagen">
                    <a href="detalles-album.html?id=${albums.id}"><img src="${albums.cover_big}" alt="Imagen de album"></a>
                    <h3 class="texto-album">${albums.title}</h3>
                </div>
                
        `
        }
       
        }).catch(function(error){
            console.error(error)
        })




    }).catch(function(error){
        console.error(error)
    })