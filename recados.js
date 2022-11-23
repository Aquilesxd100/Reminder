const botaoAdicionar = document.querySelector(".botao-adicionar button");
const imgBotaoAdicionar = document.querySelector(".botao-adicionar img");
const formulario = document.querySelector("form");
const inputAcao = document.getElementById("input-acao");
const inputData = document.getElementById("input-data");
const inputHora = document.getElementById("input-hora");
const inputDescricao = document.getElementById("input-descricao");
const menuLembretes = document.querySelector(".menu");
const divAdicionar = document.querySelector(".botao-adicionar");
const nomeConta = document.getElementById("nome-usuario");
const localLembretes = document.getElementById("tabela-lembretes");
const avisoLembretesVazio = document.querySelector(".aviso-base");
let logado = {};
if (!sessionStorage.contaLogada && !localStorage.contaLogada) {
    window.open("index.html", "_self");
}
else {
    if (sessionStorage.contaLogada) {
        logado = JSON.parse(sessionStorage.contaLogada);
    }
    else {
        logado = JSON.parse(localStorage.contaLogada);
    }
    nomeConta.innerText = logado.login;
}
listarLembretes();
function listarLembretes() {
    let bancoDados = JSON.parse(localStorage.contas);
    let posicao = logado.posicao;
    if (bancoDados[posicao].lembretes.length !== 0) {
        avisoLembretesVazio.style.display="none";
        localLembretes.innerHTML = `
        <tr class="espacamento"> 
            <th colspan="4"></th>
        </tr>`;
        for (lembrete of bancoDados[posicao].lembretes) {
            localLembretes.innerHTML +=            
            `<tr>
                <th class="acao"><span>Ação: </span>${lembrete.acao}</th>
                <th><span>Data: </span>${lembrete.data}</th>
                <th><span>Hora(s): </span>${lembrete.hora}</th>
                <th class="botoes sombra">
                    <button class="botao-editar" onclick="editar('${lembrete.id}'); botaoMaior(this)">Editar</button>
                    <button class="botao-apagar" onclick="apagar('${lembrete.id}'); botaoMaior(this)">Apagar</button>
                </th>
            </tr>
            <tr>
                <th colspan="4" class="sombra"><span>Descrição: </span>${lembrete.descricao}</th>
            </tr>
            <tr class="espacamento"> 
               <th colspan="4"></th>
            </tr>`;
        }
    }
    else {
        localLembretes.innerHTML = "";
        avisoLembretesVazio.style.display="flex";
    }
}
function adicionarLembrete() {
    function off () {
        divAdicionar.classList.remove("botao-maior");
    }
    divAdicionar.classList.add("botao-maior");
    setTimeout(off, 350);
    menuLembretesON(true);
}
function botaoDeslogar() {
    localStorage.removeItem("contaLogada");
    sessionStorage.removeItem("contaLogada");
    window.open("index.html", "_self");
}
function editar() {
    menuLembretesON(true);
}
function apagar() {

}
function entradaLembrete() {
    let bancoDados = JSON.parse(localStorage.contas);
    let posicao = logado.posicao;
    bancoDados[posicao].lembretes.push({
        id: geradorID(),
        acao: inicialMaiuscula(inputAcao.value),
        data: (inputData.value).replaceAll("-", "/"),
        hora: inputHora.value,
        descricao: inicialMaiuscula(inputDescricao.value),
    }); 
    localStorage.contas = JSON.stringify(bancoDados);
    console.log(bancoDados[posicao].lembretes);
    menuLembretesON(false);
    formulario.reset();
    listarLembretes();
}
function cancelaLembrete() {
    menuLembretesON(false);
    formulario.reset();
}
// Funções Auxiliares //
function inicialMaiuscula(texto) {
    let letra1 = texto.substring(0, 1);
    return texto.replace(letra1, (letra1.toUpperCase()));
}
function geradorID() {
    let contador = 0;
    if (localStorage.identificador) {
      contador = Number(localStorage.identificador);
    }
    contador++;
    localStorage.identificador = contador;
    return ("id" + contador);
}
function menuLembretesON(tipo) {
    if (tipo === true) {
        menuLembretes.style.opacity="1";
        menuLembretes.style.pointerEvents="all";
    }
    else {
        menuLembretes.style.opacity="0";
        menuLembretes.style.pointerEvents="none";
    }
}
// Visual //
function botaoAdicionarHover(modo) {
    if (modo === "ON") {
        botaoAdicionar.style.filter="brightness(1.15)";
        botaoAdicionar.style.cursor="pointer";
        imgBotaoAdicionar.style.filter="brightness(1.15)";
        imgBotaoAdicionar.style.cursor="pointer";
    }
    else {
        botaoAdicionar.style.filter="brightness(1)";
        botaoAdicionar.style.cursor="none";
        imgBotaoAdicionar.style.filter="brightness(0.9)";
        imgBotaoAdicionar.style.cursor="none";
    }
}
// Animação Botão //
function botaoMaior(elemento) {
    function off () {
        elemento.classList.remove("botao-maior");
    }
    elemento.classList.add("botao-maior");
    setTimeout(off, 350);
};
function botaoMenor(elemento) {
    function off () {
        elemento.classList.remove("botao-menor");
    }
    elemento.classList.add("botao-menor");
    setTimeout(off, 350);
};