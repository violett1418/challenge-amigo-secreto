// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


    function agregarAmigo(){

    let nombre = document.getElementById('amigo').value;

        if(nombre === ''){
            alert('Por favor, inserte un nombre.');
        }

        amigos.push(nombre);
        console.log(nombre);

        document.getElementById('amigo').value = '';

            actualizarListaAmigos();
            
        return; 

    }

    function actualizarListaAmigos (){
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = " ";

        for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
 }

 function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    return;
}

