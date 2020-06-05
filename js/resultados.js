
//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var resultado = objetoQuery.get('busqueda');





fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + resultado)
.then(function(response){
    return response.json()
})
.then(function(data){


let contenedorData = document.querySelector(".seccion-canciones")
let tracks = data.data
console.log(tracks);

for (const track of tracks) {
    

    contenedorData.innerHTML +=
    `
    <div>
        <div class="container1">
            <a href="detalles-tracks.html?id=${track.id}">
                <img class="imagen-perreo-sola" src="${track.album.cover_big}" alt="">
            </a>
            <a class="textos" href="detalles-tracks.html?id=${track.id}">${track.title_short}</a> 
            <a class="textos2" href="details.html?id=${track.artist.id}">${track.artist.name}</a>
            <div class="textos3">Ranking: ${track.rank}</div>
        </div>
    </div>
`
    }
}).catch(function(error){
        console.error(error)
    })