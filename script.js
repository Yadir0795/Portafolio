let menuVisible = false;
//Funcion para ocultar y mostrar menu
function mostarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez se seleccione una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Java");
        habilidades[1].classList.add("Spring");
        habilidades[2].classList.add("CSharp");
        habilidades[3].classList.add("Htlm");
        habilidades[4].classList.add("Css");
        habilidades[5].classList.add("JavaScrip");
        habilidades[6].classList.add("Comunicacion");
        habilidades[7].classList.add("Trabajo");
        habilidades[8].classList.add("Adactabilidad");
        habilidades[9].classList.add("Metodologia");  
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 