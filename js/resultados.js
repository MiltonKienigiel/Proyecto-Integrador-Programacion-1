
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
        })
        .catch(function(error){
                console.error(error)
            })
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + resultado)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            console.log(data);
            let albums = data.data
            let contenedorAlbum= document.querySelector(".seccion-album")

            for (const album of albums) {
                

                contenedorAlbum.innerHTML +=
                `
                <div>    
                    <div class="container1">
                            <a href="detalles-album.html?id=${album.id}">
                                <img class="imagen-perreo-sola" src="${album.cover_big}" alt="">
                            </a>
                            
                            <a class="textos" href="detalles-album.html?id=${album.id}">${album.title}</a>
                            <a href="details.html?id=${album.artist.id}" class="textos2">
                            ${album.artist.name}
                            </a>
                            
                            <div class="textos3"> ${album.record_type}</div>
                    </div>
                </div>
                `
            }
        })
        .catch(function(error){
                console.error(error)
            })
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + resultado)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            console.log(data);
            let artistas = data.data
            let contenedorArtistas= document.querySelector(".seccion-artista2")

           
   for (let i = 0; i < 5 ; i++) {
    const artista = artistas[i];
    contenedorArtistas.innerHTML += 
    `
    <div>
        <div class="container2">
            <a href="details.html?id=${artista.id}">
                <img class="imagen-drake" src="${artista.picture_big}" alt="Imagen de ${artista.name}">
            </a>
            <a class="textosx" href="details.html?id=${artista.id}">${artista.name}</a>
            <div class="textos2">${artista.type}</div>
        </div>
    </div>
    
    
    `
}
        })
        .catch(function(error){
                console.error(error)
            })