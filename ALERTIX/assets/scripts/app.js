const formulario = document.getElementById("formularioContacto");
const txtNombre = document.getElementById("txtNombre");
const txtCorreo = document.getElementById("txtCorreo");
const txtTelefono = document.getElementById("txtTelefono");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar");
const preguntas = document.querySelectorAll(".btn-pregunta");
const btnDescargar = document.querySelector(".btn-principal");

document.addEventListener("DOMContentLoaded", iniciarEventos);

function iniciarEventos(){
    formulario.addEventListener("submit", validarFormulario);
    preguntas.forEach(function(boton){
        boton.addEventListener("click", mostrarRespuesta);
    });
    btnDescargar.addEventListener("click", descargarAplicacion);
}

function validarFormulario(event){
    event.preventDefault();
    let nombre = txtNombre.value.trim();
    let correo = txtCorreo.value.trim();
    let telefono = txtTelefono.value.trim();
    let mensaje = txtMensaje.value.trim();

    if(nombre == ""){
        alert("Ingrese su nombre.");
        txtNombre.focus();
        return;
    }

    if(correo == ""){
        alert("Ingrese su correo.");
        txtCorreo.focus();
        return;
    }

    if(!validarCorreo(correo)){
        alert("Correo electrónico inválido.");
        txtCorreo.focus();
        return;
    }

    if(telefono == ""){
        alert("Ingrese su teléfono.");
        txtTelefono.focus();
        return;
    }

    if(isNaN(telefono)){
        alert("El teléfono solo debe contener números.");
        txtTelefono.focus();
        return;
    }

    if(mensaje == ""){
        alert("Ingrese un mensaje.");
        txtMensaje.focus();
        return;
    }

    alert("Formulario enviado correctamente.");
    formulario.reset();
}

function validarCorreo(correo){
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

function mostrarRespuesta(){
    let respuesta = this.nextElementSibling;
    if(respuesta.style.display == "block"){
        respuesta.style.display = "none";

    }else{
        document.querySelectorAll(".respuesta").forEach(function(item){
            item.style.display = "none";
        });

        respuesta.style.display = "block";
    }
}

function descargarAplicacion(){
    let respuesta = confirm("¿Desea descargar Alertix?");

    if(respuesta){
        alert("La descarga iniciará en unos segundos.");

    }else{
        alert("La descarga fue cancelada.");
    }
}

const enlaces = document.querySelectorAll(".Menu-Horizontal a");

enlaces.forEach(function(enlace){
    enlace.addEventListener("click",function(event){
        event.preventDefault();
        let destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({
            behavior:"smooth"
        });
    });
});

window.addEventListener("scroll", cambiarMenu);

function cambiarMenu(){
    let menu = document.querySelector(".topheader");

    if(window.scrollY > 50){
        menu.style.background = "#1E293B";
        menu.style.transition = ".4s";

    }else{
        menu.style.background = "white";
    }
}

const btnArriba = document.getElementById("btnArriba");
window.addEventListener("scroll", mostrarBoton);
btnArriba.addEventListener("click", subirPagina);

function mostrarBoton(){

    if(window.scrollY > 300){
        btnArriba.style.display = "block";

    }else{
        btnArriba.style.display = "none";
    }
}

function subirPagina(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener("load", function(){
    console.log("Bienvenido al Landing Page de Alertix");
});