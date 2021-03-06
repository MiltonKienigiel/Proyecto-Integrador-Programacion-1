
//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var trackId = objetoQuery.get('id');





fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +trackId)
.then(function(response){
    return response.json()
})
.then(function(data){


let contenedorData = document.querySelector(".fila1")
let track = data
console.log(track);

/***************************************************************************/
let playlist =[track];

/***************************************************************************/

    contenedorData.innerHTML =
        `
        <div class="columna1">
            <img class="imagen-cancion" src="${track.album.cover_big}" alt="Imagen de Album de ${track.artist.name}">
        </div>
        <div class="columna2">
            <h3 class="texto-gris">${track.type}</h3>
            <h2>${track.title}</h2>
            <div class="links">
                <a href="details.html?id=${track.artist.id}" class="texto-album">${track.artist.name}</a>
                <a href="detalles-album.html?id=${track.album.id}" class="texto-a">Album : ${track.album.title}</a>
                <h3 class="texto-gris">${track.duration} Seg</h3>
            </div>
            <ul class="acciones">
                <li class="añadir">Añadir</li>
                <li class="mix">Mix</li>
                
            </ul>
        </div>
        `
let contenedorPlaylist = document.querySelector(".playlist")
contenedorPlaylist.innerHTML += `
    <div class="song"> 
        <p><audio class="audios" src="${track.preview}" controls></audio></p>
        <p class="d-none">${track.title_short}</p>
        <p>${track.album.title}</p> 
        <p>${track.rank}</p>
    </div>
`
/*************************************************************************** */ 

let añadir =document.querySelector(".añadir");


añadir.addEventListener("click", function(){
    if (window.localStorage.getItem("playlist") === null){

        window.localStorage.setItem("playlist", JSON.stringify(playlist))
        
    }else{
        let cancionObjeto = JSON.parse(window.localStorage.getItem("playlist"))
        
        cancionObjeto.push(track)

        window.localStorage.setItem("playlist", JSON.stringify(cancionObjeto))
        
        console.log(cancionObjeto);
        
    }
})

/***************************************************************************/

let artistId = track.artist.id

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
})

/***************************************************************************/
function s() {
    if (window.localStorage.getItem("playlist") === null) {
        window.localStorage.setItem("playlist", JSON.stringify(playlist))
    }
}
/***************************************************************************/