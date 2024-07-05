
    let textoMagico = document.querySelector("#textoMagico");
    let botonMagico = document.querySelector("#botonMagico");


    textoMagico.addEventListener("click", () => {
        textoMagico.style.visibility = 'hidden';
        botonMagico.style.visibility = 'visible';
    })

    botonMagico.addEventListener("click", () => {
        textoMagico.style.visibility = 'visible';
        botonMagico.style.visibility = 'hidden';
    })


