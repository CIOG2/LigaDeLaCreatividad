let Espacio = document.getElementById("space_background")
let Cielo = document.getElementById("cielo_background")
let Fuego1 = document.getElementById("fuego1")
let Fuego2 = document.getElementById("fuego2")


const observerEspacio = new IntersectionObserver(ApagarFuego, {threshold : 0.40});        
const observerCielo = new IntersectionObserver(EncenderFuego, {threshold : 0.25});        
observerEspacio.observe(Espacio);
observerCielo.observe(Cielo);


function EncenderFuego(Cielo){
    const cielos = Cielo[0];
    
    if (cielos.intersectionRatio >= 0.25) {
        Fuego1.classList.add("Fuego__animacion");
        Fuego2.classList.add("Fuego__animacion");  
    }
}

function ApagarFuego(Espacio) {
    const space = Espacio[0]; 

    if (space.intersectionRatio >= 0.40) {
        Fuego1.classList.remove("Fuego__animacion");
        Fuego2.classList.remove("Fuego__animacion");  
    }    
}