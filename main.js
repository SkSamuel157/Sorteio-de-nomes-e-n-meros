const btnSortear = document.querySelector('.sortear');
const textarea = document.querySelector('textarea');
const tagResultado = document.querySelector('.resultado p');
const popUpResultado = document.querySelector('.resultado');

function pegarDadosFormulario() {
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome]

    mostraResultado(nome);
    textarea.value = ""
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray-0)+0);
}

function mostraResultado(nome){
    tagResultado.innerHTML = `Resultado: ${nome}`
    popUpResultado.classList.add('Resultado');
}