const inputLogin = document.querySelector(".input-login");
const inputSenha = document.querySelector(".input-senha");
function displayOff (tipo) {
    document.querySelector(`li#${tipo}`).style.filter="opacity(0)";
}
function displayOn () {
    if (inputLogin.value === "") {
        document.querySelector("li#login").style.filter="opacity(1)";
    }
    if (inputSenha.value === "") {
        document.querySelector("li#senha").style.filter="opacity(1)";
    }
}
inputLogin.addEventListener("focusout", displayOn);
inputSenha.addEventListener("focusout", displayOn);