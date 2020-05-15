window.addEventListener("load", function(){
    var menu = document.querySelector(".toggle-menu");

    var navegacion = document.querySelector("div.main-nav2");
    
    menu.addEventListener("click", function(){
        if( navegacion.style.display == "none"){
            navegacion.style.display = "block";
        }else{
            navegacion.style.display = "none";
        }
    
    })
    
})

