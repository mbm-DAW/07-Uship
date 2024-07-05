/** validar numero de seguimiento */
let validSeguimiento = /^USP[0-9]{7}$/
let seguimiento = document.querySelector("#codigo-seguimiento");
let error = document.querySelector("#error-seguimiento");

seguimiento.addEventListener("input", validarSeguimiento);


function validarSeguimiento() {
    console.log('----');
    if (!validSeguimiento.test(seguimiento.value)) {
        error.innerHTML = 'El numero de seguimiento debe empezar por USP seguido de de 7 numeros';
    }
    else {
        error.innerHTML = '';
    }

}

