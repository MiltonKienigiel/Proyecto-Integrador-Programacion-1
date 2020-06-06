window.onload =function(){

let tracks =JSON.parse(window.localStorage.getItem("playlist"));

console.log(tracks);

let contenedorPlaylist = document.querySelector(".playlist");

tracks.forEach(track => {
    
    contenedorPlaylist.innerHTML +=`
    
    
<div class="song"> 
    <p> <audio class="audios" src="${track.preview}" controls ></audio></p>
    <p><a href="detalles-tracks.html?id=${track.id}" class="songArtista" >${track.title_short}</a></p>
    <p class="d-none">${track.album.title}</p> 
    <p><a href="details.html?id=${track.id}" class="songArtista" >${track.artist.name}</a></p>
</div>
    
    `
});

}