window.addEventListener("load", function(){
    var menu = document.querySelector(".toggle-menu");

    var navegacion = document.querySelector(".contenedor-header");
    
    menu.addEventListener("click", function(){
        if( navegacion.style.display == "none"){
            navegacion.style.display = "block";
        }else{
            navegacion.style.display = "none";
        }
    
    })
    
})

