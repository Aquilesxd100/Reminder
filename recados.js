const botaoAdicionar = document.querySelector(".botao-adicionar button");
const imgBotaoAdicionar = document.querySelector(".botao-adicionar img");
if (!sessionStorage.contaLogada && !localStorage.contaLogada) {
    window.open("index.html", "_self");
}
function adicionar() {
    let divAdicionar = document.querySelector(".botao-adicionar");
    function off () {
        divAdicionar.classList.remove("botao-maior");
    }
    divAdicionar.classList.add("botao-maior");
    setTimeout(off, 350);
}
function botaoDeslogar() {
    localStorage.removeItem("contaLogada");
    sessionStorage.removeItem("contaLogada");
    window.open("index.html", "_self");
}
function editar() {
}
function apagar() {
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