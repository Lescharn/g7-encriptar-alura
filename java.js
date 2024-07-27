

function encriptar() {
   let mensaje = document.getElementById("palabrasIniciales").value;
   let textoEncriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
     document.getElementById("palabrasEncriptadas").innerText = textoEncriptado;
     document.getElementById("copiar").style.display = 'block';
     document.getElementById('palabrasIniciales').value='';
  
}

function copiar() {
     const elementoTemporal = document.createElement("textarea");
     // Obtener el texto del párrafo
     const texto = document.getElementById("palabrasEncriptadas").innerText;
     // Asignar el texto al elemento temporal
     elementoTemporal.value = texto;
     // Añadir el elemento temporal al documento
     document.body.appendChild(elementoTemporal);
     // Seleccionar el texto del elemento temporal
     elementoTemporal.select();
     // Copiar el texto seleccionado al portapapeles
     document.execCommand("copy");
     // Remover el elemento temporal del documento
     document.body.removeChild(elementoTemporal);

     // Seleccionar el texto del párrafo original
     const rango = document.createRange();
     const seleccion = window.getSelection();
     rango.selectNodeContents(document.getElementById("palabrasEncriptadas"));
     seleccion.removeAllRanges();
     seleccion.addRange(rango);
}


function desencriptar() {
    let mensaje2 = document.getElementById("palabrasIniciales").value;
    let textoSolucionado = mensaje2
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("palabrasEncriptadas").innerText = textoSolucionado;
    document.getElementById('palabrasIniciales').value='';
}



