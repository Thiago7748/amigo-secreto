//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    

    if (nome == '') {
        alert('Por favor, insira um nome!');
        return; //'return' para fazer a parada da função.
    }

    amigos.push(nome);

    atualizarLista();

    document.getElementById('amigo').value ='';
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';  // Limpa a lista na tela antes de recriá-la

    for (let i = 0; i < amigos.length; i++) {
        // Para cada amigo no nosso array, cria um elemento de parágrafo
        let paragrafoAmigo = document.createElement('p');
        paragrafoAmigo.textContent = amigos[i];

        // Adiciona o parágrafo à lista na tela
        listaHTML.appendChild(paragrafoAmigo);
    }
}

atualizarLista()

function sortearAmigo() {
    const totalAmigos = amigos.length;
    const indiceSorteado = Math.floor(Math.random() * totalAmigos);

    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: ${amigoSorteado}`;
}

