// Declaración de la variable para almacenamiento.
let amigos = [];

// Para capturar el valor de entrada.
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

// Para validar la entrada. Muestra Alert si esta vacio el campo.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
// Actualización del array amigo.
    amigos.push(nombre);
// Limpieza del campo de entrada.
    document.getElementById('amigo').value = "";
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento.
    let lista = document.getElementById('listaAmigos');
    // Limpieza de lista para evitar duplicados.
    lista.innerHTML = "";
    // Iterar sobre el arreglo.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    document.getElementById('resultado').textContent = "El amigo secreto es: " + amigoSecreto;
}