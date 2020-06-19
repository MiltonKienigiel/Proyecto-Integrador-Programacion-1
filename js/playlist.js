window.onload = function(){

let tracksArray = window.localStorage.getItem("playlist")

let tracks =JSON.parse(tracksArray);

console.log(tracks);

let contenedorPlaylist = document.querySelector(".playlist");

let cartel = document.querySelector(".cartelNoSongs");
let reproductor = document.querySelector(".reproductor")
let botonPlay = document.getElementsByClassName("play-cancion");


if(tracks === null){

cartel.style.display = "flex";
cartel.style.justifyContent = "center";
}else{
cartel.style.display = "none";



    tracks.forEach(track => {
    
    contenedorPlaylist.innerHTML +=`
        
        
    <div class="song"> 
        <p> <i class="fas fa-play play-cancion" id="${track.id}"></i></p>
        <p><a href="detalles-tracks.html?id=${track.id}" class="songArtista" >${track.title_short}</a></p>
        <p class="d-none">${track.album.title}</p> 
        <p><a href="details.html?id=${track.artist.id}" class="songArtista" >${track.artist.name}</a></p>
    </div>
        
        `
        


    });
    
    for (const cada of botonPlay) {
    cada.addEventListener("click", function(){

        let id = this.getAttribute("id")
        reproductor.style.display="block";
        reproductor.innerHTML=`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=100%&height=2&color=007FEB&layout=dark&size=medium&type=tracks&id=${id}&app_id=1" width="100%" height="62px"></iframe>`

    })
}
    
   
}

let clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    window.localStorage.clear("playlist")
    contenedorPlaylist.style.display ="none"
})





}
