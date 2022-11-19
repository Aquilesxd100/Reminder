if (!sessionStorage.contaLogada && !localStorage.contaLogada) {
    window.open("index.html", "_self");
}
function botaoDeslogar() {
    localStorage.removeItem("contaLogada");
    sessionStorage.removeItem("contaLogada");
    window.open("index.html", "_self");
}
// Animação Botão //
function botaoMaior(elemento) {
    function off () {
        botao.classList.remove("botao-maior");
    }
    const botao = document.querySelector(elemento);
    botao.classList.add("botao-maior");
    setTimeout(off, 350);
};
function botaoMenor(elemento) {
    function off () {
        botao.classList.remove("botao-menor");
    }
    const botao = document.querySelector(elemento);
    botao.classList.add("botao-menor");
    setTimeout(off, 350);
};