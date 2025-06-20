let listaNumeros = [];
let numeroLimite = 50;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Insira um número de 1 a 50');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número é menor.');
        } else {
            exibirTexto('p', 'O número é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)

    let quantidadeElementosLista = listaNumeros.length;

    if (quantidadeElementosLista == 10){
        listaNumeros = [];
    }
        if (listaNumeros.includes(numeroEscolhido)) {
            return numeroAleatorio();
        } else {
            listaNumeros.push(numeroEscolhido);
            console.log(listaNumeros);
            return numeroEscolhido;
        }
    }
