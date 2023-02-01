/*
e = enter
i = imes
a = ai
o = ober
u = ufat 
*/ 

const textarea = document.querySelector("textarea");
const salida = document.querySelector(".areadesalida");

textarea.addEventListener("keyup", e=>{
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});

function validarTexto(){
    let textoEscrito = document.querySelector(".texto-ingresado").value;
    let validador = textoEscrito.match(/^[a-z,0-9,ñ,¿,?,¡,!, ]*$/);

    if(!validador || validador === 0) {
        Swal.fire({
            icon: 'error',
            iconColor:'red',
            title: '¡Alto ahí!',
            html: 'Recuerda que sólo puedes usar letras minúsculas, vuelve a intenarlo.',
            showConfirmButton: false,
            timer: 3000,
             customClass: {
               title: 'tituloAlert',
                htmlContainer: 'htmlAlert'
            }
        })
        setTimeout(function(){
            location.reload();
         }, 3000);
        return true;
    }
}

function textoNoEncontrado(){
    document.querySelector(".mensaje-noencontrado").style.visibility = "visible";
}

function encriptar(){
    
    if (textarea.value != "" && !validarTexto()){
        var texto = document.getElementById("textoinicial").value.toLowerCase();
        var textoEncriptado = texto.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

        document.getElementById("salida").innerHTML= textoEncriptado;

        document.getElementById("salida").style.backgroundImage.visibility = "hidden";

        document.querySelector(".mensaje-noencontrado").style.visibility = "hidden";

        textarea.value = "";

    }else{
        document.querySelector(".mensaje-noencontrado").style.visibility = "visible";
        salida.value = "";
    }
    

}

var encryptbtn = document.querySelector("#encriptador");
encryptbtn.onclick = encriptar;

function desencriptar(){

    if(textarea.value != ""){
        var texto = document.getElementById("textoinicial").value.toLowerCase();
        var textoEncriptado = texto.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        document.getElementById("salida").innerHTML= textoEncriptado;

        document.getElementById("salida").style.backgroundImage.visibility = "hidden";

        document.querySelector(".mensaje-noencontrado").style.visibility = "hidden";

        textarea.value = "";

    }else{
        document.querySelector(".mensaje-noencontrado").style.visibility = "visible";
        salida.value = "";
    }
    

}

var decryptbtn = document.querySelector("#desencriptador");
decryptbtn.onclick = desencriptar;

function copiar() {
    let copia = document.querySelector(".areadesalida").innerHTML;
    navigator.clipboard.writeText(copia);
    Swal.fire({
        icon: 'success',
        iconColor:'#0A3871',
        title: '¡Hecho!',
        html: 'Mensaje Copiado',
        showConfirmButton: false,
        timer: 1500,
         customClass: {
           title: 'tituloAlert',
            htmlContainer: 'htmlAlert'
        }
    })
}

var btncopiar = document.querySelector(".botonCopiar");
btncopiar.onclick = copiar;
