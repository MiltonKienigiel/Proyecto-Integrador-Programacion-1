//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var playlistId = objetoQuery.get('id');








fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + playlistId)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let playlist = data
    let contenedorData = document.querySelector(".fila1")

    contenedorData.innerHTML =`
    <div class="columna1">
        <img class="imagen-cancion" src="${playlist.picture_big}" alt="Imagen de Playlist de ${playlist.creator.name}">
    </div>
    <div class="columna2">
        <h3 class="texto-gris">${playlist.type}</h3>
        <h2>${playlist.title}</h2>
        <h3 class="texto-gris">De ${playlist.creator.name}</h3>
        <ul class="acciones">
            <li class="añadir">Añadir</li>
            <li class="mix">Mix</li>
        </ul>
    </div>
    
    `
    let tracks = playlist.tracks.data

    let contenedorPlaylist = document.querySelector(".playlist")
    console.log(tracks);
    
    for (const track of tracks) {
        contenedorPlaylist.innerHTML +=`
        
        <div class="song"> 
                <p> <audio class="audios" src="${track.preview}" controls ></audio></p>
                <p><a href="detalles-tracks.html?id=${track.id}" class="songArtista" >${track.title_short}</a></p>
                <p class="d-none">${track.album.title}</p> 
                <p><a href="details.html?id=${track.id}" class="songArtista" >${track.artist.name}</a></p>
            </div>
        
        
        `
    }
}).catch(function(error){
    console.error(error)
})
