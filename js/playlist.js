window.onload = function(){

let tracksArray = window.localStorage.getItem("playlist")

let tracks =JSON.parse(tracksArray);

console.log(tracks);

let contenedorPlaylist = document.querySelector(".playlist");

let cartel = document.querySelector(".cartelNoSongs");

if(tracks === null){

cartel.style.display = "flex";
cartel.style.justifyContent = "center";
}else{
cartel.style.display = "none";



    tracks.forEach(track => {
    
    contenedorPlaylist.innerHTML +=`
        
        
    <div class="song"> 
        <p> <audio class="audios" src="${track.preview}" controls ></audio></p>
        <p><a href="detalles-tracks.html?id=${track.id}" class="songArtista" >${track.title_short}</a></p>
        <p class="d-none">${track.album.title}</p> 
        <p><a href="details.html?id=${track.artist.id}" class="songArtista" >${track.artist.name}</a></p>
    </div>
        
        `
    });
}

let clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    window.localStorage.clear("playlist")
    contenedorPlaylist.style.display ="none"
})

}
