let todosAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == ''){
        alert('Você precisa digitar o nome de um amigo!');
        return;
    }
    if (todosAmigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    todosAmigos.push(nomeAmigo.value);
    if (lista.textContent == ''){
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = ' ';
}

function sortear(){
    if (todosAmigos.length < 4){
        alert('Adicione no minimo 4 pessoas!');
        return;
    }
 embaralha(todosAmigos);

 let sorteio = document.getElementById('lista-sorteio');
 for (let i = 0; i < todosAmigos.length; i++) {
     if (i == todosAmigos.length - 1) {
         sorteio.innerHTML = sorteio.innerHTML + todosAmigos[i] +' --> ' +todosAmigos[0] + '<br/>';
     } else {
         sorteio.innerHTML = sorteio.innerHTML + todosAmigos[i] +' --> ' +todosAmigos[i + 1] + '<br/>';
     }
 }
 

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    todosAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}