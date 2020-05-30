fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
.then(function(response){
    return response.json()
}).then(function(data){

        let artistas = data.artists.data
        let contenedorArtistas = document.querySelector(".seccion-artista");
        
        for (const artista of artistas){
            
            
        
        contenedorArtistas.innerHTML += `
        <div> 
            <div class="container2">
                    <a href="details.html?id=${artista.id}">
                        <img class="imagen-drake" src="${artista.picture_big}" alt="">
                    </a>

                    <a class="textos" href="details.html?id=${artista.id}">${artista.name}</a>

                    <div class="textos2">Artista</div>
            </div>
        </div>
        `
    }   
        let albums = data.albums.data
        let contenedorAlbumes = document.querySelector(".seccion-album");

        for (const album of albums) {
            
        contenedorAlbumes.innerHTML += 
        `
        <div>    
            <div class="container1">
                    <a href="detalles-album.html?id=${album.id}">
                        <img class="imagen-perreo-sola" src="${album.cover_big}" alt="">
                    </a>
                    
                    <a class="textos" href="detalles-tracks.html?id=${album.id}">${album.title}</a>
                    <a href="details.html?id=${album.artist.id}" class="textos2">
                    ${album.artist.name}
                    </a>
                    
                    <div class="textos3"> ${album.record_type}</div>
            </div>
        </div>
        `
            
    }
        let tracks = data.tracks.data
        let contenedorTracks = document.querySelector(".seccion-canciones")
    
    
        for (const track of tracks) {
        contenedorTracks.innerHTML +=
        `
            <div>
                <div class="container1">
                    <a href="detalles-tracks.html?id=${track.id}">
                        <img class="imagen-perreo-sola" src="${track.album.cover_big}" alt="">
                    </a>
                    <a class="textos" href="detalles-tracks.html?id=${track.id}">${track.title_short}</a> 
                    <div class="textos2">de ${track.artist.name}</div>
                    <div class="textos3">Ranking: ${track.rank}</div>
                </div>
            </div>
        `
        }
        let playlists = data.playlists.data
        let contenedorPlaylists = document.querySelector(".seccion-playlist");
        console.log(playlists);

        
        for (const playlist of playlists) {
            contenedorPlaylists.innerHTML +=
            `
            <div>
                <div class="container3">
                    <a href="detalles-playlist.html?id=${playlist.id}">
                        <img class="imagen-colores" src="${playlist.picture_big}" alt="">
                    </a>
                    <a class="textos" href="detalles-playlist.html?id=${playlist.id}">${playlist.title}</a>
                    <div class="textos2">${playlist.user.name}</div>
                </div>
            </div>
            `
        }
        let podcasts = data.podcasts.data
        let contenedorPodcasts = document.querySelector(".seccion-podcast");

        console.log(podcasts);
        


        for (const podcast of podcasts) {

            
            let info = podcast.description
                if(info.length > 100){
                    console.log(info);

                    let infoParte = info.slice(0,100);
                    info = infoParte + '...'
                    
                }

            contenedorPodcasts.innerHTML+=
            `
            <div>
                <div class="container3">
                    <a href="detalles-album.html?id=${podcast.id}">
                        <img class="imagen-colores" src="${podcast.picture_big}" alt="">
                    </a>
                    <a class="textos" href="detalles-album.html?id=${podcast.id}">${podcast.title}</a>
                    <div class="textos2">${info} - ${podcast.fans} fans</div>
                </div>
            </div>
            `
        }
    })
    .catch(function(error){
        console.error(error)
    })