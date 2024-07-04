window.onload = () => {
    let texto = document.querySelector("#textoMagico");
    let crearboton =document.querySelector("#crearboton");


    texto.addEventListener("click", () =>{
        texto.setAttribute("hidden","true");
        let boton =document.createElement("button");
        boton.textContent="Pulsa para aperceder el texto";
        boton.addEventListener("click",mostrarTexto)
        crearboton.appendChild(boton);
        
     
    })


    function mostrarTexto(){
        texto.setAttribute("hidden","false");
            console.log("ggggggg");
    }
}
