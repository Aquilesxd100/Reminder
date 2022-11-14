const inputLogin = document.querySelector(".input-login");
const inputSenha = document.querySelector(".input-senha");
const repitaSenha = document.querySelector(".repita-input-senha");
const formulario = document.querySelector("form");
// Criar Conta //
    if (formulario.name === "criacao-conta") {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
            let bancoDados = [];
            if (localStorage.contas) {
                bancoDados = JSON.parse(localStorage.getItem("contas"));
            }
            bancoDados.push({
                login: inputLogin.value,
                senha: inputSenha.value,
            });
            localStorage.contas = JSON.stringify(bancoDados);
            console.log(localStorage.getItem("contas"));
        });
    };
    function deletaConta() {
        localStorage.removeItem("contas");
        console.log(localStorage.getItem("contas"));
    }
// Entrar na Conta //  
    if (formulario.name === "logging") {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
            if (localStorage.contas) {
                let bancoDados = JSON.parse(localStorage.getItem("contas"));
                let posicao = bancoDados.findIndex((conta) => conta.login === inputLogin.value);
                console.log(posicao);
                console.log(bancoDados[posicao]);
                if (posicao !== -1) {
                    if (bancoDados[posicao].senha === inputSenha.value) {
                        alert("Login Efetuado com Sucesso!");
                    }
                    else {
                        alert("Login ou Senha Incorretos!");
                    }
                }
                else {
                    alert("Login ou Senha Incorretos!");
                }
            }
            else {
                alert("Nenhuma conta cadastrada no sistema!");
            }
        });
    };
// Efeitos Visuais //
function displayOn () {
    if (inputLogin.value === "") {
        document.querySelector("input.input-login").placeholder="Login";
    }
    if (inputSenha.value === "") {
        document.querySelector("input.input-senha").placeholder="Senha";
    }
    if (repitaSenha !== null) {
        if (repitaSenha.value === "") {
            document.querySelector("input.repita-input-senha").placeholder="Repita a Senha";
        }
    }
}
inputLogin.addEventListener("focusout", displayOn);
inputSenha.addEventListener("focusout", displayOn);

inputLogin.addEventListener("focusin", () => { 
    document.querySelector(".input-login").placeholder="";
});
inputSenha.addEventListener("focusin", () => {
    document.querySelector(".input-senha").placeholder="";
});
if (repitaSenha !== null) {
    repitaSenha.addEventListener("focusout", displayOn);
    repitaSenha.addEventListener("focusin", () => {
        document.querySelector(".repita-input-senha").placeholder="";
    });
}
// Animação Botão //
function botaoInput() {
    function off () {
        botao.classList.remove("botao-input");
    }
    const botao = document.querySelector("button");
    botao.classList.add("botao-input");
    setTimeout(off, 350);
}