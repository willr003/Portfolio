const btn = document.getElementById("bt")

btn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rolagem suave
    });
});


document.addEventListener('scroll', ocultar)

function ocultar(){
    if (window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar ()