/** Se define la variable dom don se van a escribir los errores */
const mensajeError = document.getElementById("formulario-errores");
/** Se intercepta el evento posterior a la carga del DOM html. y define el evento "submit" */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario-contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let msgErr = "";


    /** validar nombre con getElementById del DOM*/
    let nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        msgErr += "El nombre no puede ser vacio \n";
    }

    /** validar email con una mascara y querySelector del DOM*/
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let email = document.querySelector("#email").value;
    if (!(validEmail.test(email))) {
        msgErr += 'email erroneo \n';
    }

    /** validar numero de telefono utilizando en DOM del form */
    let validTelefono = /^[6789]\d{8}$/
    let telefono = document.querySelector("#telefono").value;
    if (!validTelefono.test(telefono)) {
        msgErr += 'El numero de telefono debe tener 9 de longitud y ser numerico y empezar por 6 7 8 ó 9\n';
    }

    /** validar check */
    let check_envio = document.querySelector("#check-envio");


    if (check_envio.checked == false) {
        msgErr += "Debe previamente verificar el check de envio";
    }


    if (msgErr == "") {
        alert("Datos enviados");
        this.submit();
    }
    else {
        mensajeError.innerText = msgErr;
    }

}