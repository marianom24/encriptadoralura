function encriptador(string){
    var aux = Array.from(string);
    aux.forEach(function(letra){
        if (letra == "a"){
            aux[aux.indexOf(letra)] = "ai"
        }
        if (letra == "e"){
            aux[aux.indexOf(letra)] = "enter"
        }
        if (letra == "i"){
            aux[aux.indexOf(letra)] = "imer"
        }
        if (letra == "o"){
            aux[aux.indexOf(letra)] = "ober"
        }
        if (letra == "u"){
            aux[aux.indexOf(letra)] = "ufat"
        }
    })
    aux = aux.toString()
    aux = aux.replace(/,/g,"")
    return aux
}

function desencriptador(string){
    var newString = string.replace(/ai/g, "a");
    newString = newString.replace(/enter/g, "e");
    newString = newString.replace(/imer/g, "i");
    newString = newString.replace(/ober/g, "o");
    newString = newString.replace(/ufat/g, "u");
    return newString
    
}

const inputMensaje = document.querySelector("#input-text");
const mensajeFijo = document.querySelector("#textarea-fijo");

const botonEnc = document.querySelector("#boton1");
const botonDes = document.querySelector("#boton2");
const botonCopiar = document.querySelector("#boton-copiar");

const contenidoEmpty = document.querySelector(".contenido-empty");
const cotenidoFull = document.querySelector(".contenido-full");


botonEnc.addEventListener("click", function(){
    const textoEncriptado = encriptador(inputMensaje.value);
    if (textoEncriptado.length > 0){
        contenidoEmpty.classList.add("invisible");
        cotenidoFull.classList.remove("invisible");
        mensajeFijo.value = textoEncriptado;
    }

});

botonDes.addEventListener("click", function(){
    const textoDesencriptado = desencriptador(inputMensaje.value);
    if(textoDesencriptado.length > 0){
        contenidoEmpty.classList.add("invisible");
        cotenidoFull.classList.remove("invisible");
        mensajeFijo.value = textoDesencriptado;
    }
});


botonCopiar.addEventListener("click", function(){
    navigator.clipboard.writeText(mensajeFijo.value)
});
