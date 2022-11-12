const inputLogin = document.querySelector(".input-login");
const inputSenha = document.querySelector(".input-senha");
function displayOff (tipo) {
    document.querySelector(`li#${tipo}`).style.filter="opacity(0)";
}
function displayOn() {
    if (inputLogin.value === "") {
        document.querySelector("li#login").style.filter="opacity(1)";
    }
    if (inputSenha.value === "") {
        document.querySelector("li#senha").style.filter="opacity(1)";
    }
}
inputLogin.addEventListener("focusout", displayOn);
inputSenha.addEventListener("focusout", displayOn);
inputLogin.addEventListener("focusin", () => {document.querySelector("li#login").style.filter="opacity(0)";});
inputSenha.addEventListener("focusin", () => {document.querySelector("li#senha").style.filter="opacity(0)";});
function botaoInput() {
    function off () {
        botao.classList.remove("botao-input");
    }
    const botao = document.querySelector("button");
    botao.classList.add("botao-input");
    setTimeout(off, 350);
}