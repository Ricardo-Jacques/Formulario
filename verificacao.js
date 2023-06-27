var form = window.document.getElementById("form");
var nome = window.document.getElementById("nome");
var sobrenome = window.document.getElementById("sobrenome");
var senha = window.document.getElementById("senha"); 
var confSenha = window.document.getElementById("confirmarsenha");
var email = window.document.getElementById("email");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    validarNome();
    validarSobrenome();
    validarSenha();
    confirmarSenha();
    validarEmail();
});

function validarNome() {
    if (nome.value === "") {
        nome.classList.add("formcontrol-error");
        return;
    }
    else {
        nome.classList.remove("formcontrol-error");
        nome.classList.add("formcontrol-success");
        return;
    }
}

function validarSobrenome() {
    if (sobrenome.value === "") {
        sobrenome.classList.add("formcontrol-error");
        return;
    }
    else {
        sobrenome.classList.remove("formcontrol-error");
        sobrenome.classList.add("formcontrol-success");
        return;
    }
}

function validarSenha() {
    if (senha.value === "" || senha.value.length < 7) {
        senha.classList.add("formcontrol-error");
        return;
    }
    else {
        senha.classList.remove("formcontrol-error");
        senha.classList.add("formcontrol-success");
        return;
    }
}

function confirmarSenha() {
    if (senha.value !== confSenha.value || confSenha.value === "") {
        confSenha.classList.add("formcontrol-error");
        return;
    }
    else {
        confSenha.classList.remove("formcontrol-error");
        confSenha.classList.add("formcontrol-success");
        return;
    }
}

function validarEmail() {
    var padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (padraoEmail.test(email.value) !== true) {
        email.classList.add("formcontrol-error");
        return;
    } 
    else {
        email.classList.remove("formcontrol-error");
        email.classList.add("formcontrol-success");
        return;
    }   
}

