function obtenerTexto(){
    textarea = document.getElementById("texto-encriptar");

    textoEncriptar = textarea.value;

    textoEncriptar = textoEncriptar.toLowerCase().split('');

    textoReemplazado = "";
    for (let i = 0; i < textoEncriptar.length; i++) {
        const char = textoEncriptar[i];
        let reemplazo = char;

        switch (char) {
            case 'a':
              reemplazo = 'ai';
              break;
            case 'e':
              reemplazo = 'enter';
              break;
            case 'i':
              reemplazo = 'imes';
              break;
            case 'o':
              reemplazo = 'ober';
              break;
            case 'u':
              reemplazo = 'ufat';
              break;
        }
        textoReemplazado += reemplazo;
    }
    console.log(textoReemplazado);

    textarea.value = "";
}

function desencriptar(){
    textarea = document.getElementById("texto-encriptar");

    textoEncriptado = textarea.value;

    textoEncriptado = textoEncriptado.toLowerCase();

    textoOriginal = "";
    
    for (let i = 0; i < textoEncriptado.length; i++) {
    const char = textoEncriptado[i];
    let reemplazo = char;

    switch (char) {
        case 'a':
        if (textoEncriptado[i + 1] === 'i') {
            reemplazo = 'a';
            i++;
        }
        break;
        case 'e':
        if (textoEncriptado.slice(i, i + 5) === 'enter') {
            reemplazo = 'e';
            i += 4;
        }
        break;
        case 'i':
        if (textoEncriptado.slice(i, i + 4) === 'imes') {
            reemplazo = 'i';
            i += 3;
        }
        break;
        case 'o':
        if (textoEncriptado.slice(i, i + 4) === 'ober') {
            reemplazo = 'o';
            i += 3;
        }
        break;
        case 'u':
        if (textoEncriptado.slice(i, i + 4) === 'ufat') {
            reemplazo = 'u';
            i += 3;
        }
        break;
    }

    textoOriginal += reemplazo;
    }

    console.log(textoOriginal); // Resultado: "Hola mundo"
    textarea.value = "";
}

function quitarInformacion() {
    obtenerTexto();
    
    var informacion = document.getElementById("informacion");
    var contenido = document.getElementById("contenido");
    
    informacion.style.display = "none";

    
    var nuevoDiv = document.createElement("textarea");
    nuevoDiv.textContent =  textoReemplazado;
    nuevoDiv.classList.add("nueva-informacion");
    contenido.appendChild(nuevoDiv);

    var botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.classList.add("boton-copiar");

    botonCopiar.addEventListener("click", function() {
        copiarTexto(nuevoDiv.textContent);
        nuevoDiv.textContent = "";
    });
    contenido.appendChild(botonCopiar);

    function copiarTexto(texto) {
        navigator.clipboard.writeText(texto)
          .then(function() {
        })
          .catch(function(error) {
            console.error("Error al copiar texto: ", error);
        });
    }
}

function mostrarMensajeOculto(){
    
    var informacion = document.getElementById("informacion");
    var contenido = document.getElementById("contenido");
    
    informacion.style.display = "none";

    
    var nuevoDiv = document.createElement("textarea");
    nuevoDiv.textContent =  textoOriginal;
    nuevoDiv.classList.add("nueva-informacion");
    contenido.appendChild(nuevoDiv);

    var botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.classList.add("boton-copiar");

    botonCopiar.addEventListener("click", function() {
        copiarTexto(nuevoDiv.textContent);
        nuevoDiv.textContent = "";
    });
    contenido.appendChild(botonCopiar);

    function copiarTexto(texto) {
        navigator.clipboard.writeText(texto)
          .then(function() {
        })
          .catch(function(error) {
            console.error("Error al copiar texto: ", error);
        });
    }
}