fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    
    let contenedorGeneros = document.querySelector(".seccion");
    let generos = data.data
    
    console.log(generos);
    
    
    for (const genero of generos) {
        contenedorGeneros.innerHTML +=
        `
            <div>    
                <div class="container1">
                    <a href="detalles-generos.html?id=${genero.id}">
                        <img class="imagen-perreo-sola" src="${genero.picture_big}" alt="Imagen de ${genero.name}">
                    </a>  
                    <a class="textos" href="details.html?id=${genero.id}">${genero.name}</a>
                </div>
            </div>
        
        `
    }
    
    
    }).catch(function(error){
        console.error(error)
    })