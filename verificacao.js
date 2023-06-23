var form = window.document.getElementById("form");
var nome = window.document.getElementById("nome");
var sobrenome = window.document.getElementById("sobrenome");
var senha = window.document.getElementById("senha"); 
var email = window.document.getElementById("email");
var textoemail = window.document.getElementById("textoemail");
var telefone = window.document.getElementById("telefone");
var datadenascimento = window.document.getElementById("datadenascimento");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    validarFormulario();
});

function validarFormulario() {
    validarNome();
    validarSobrenome();
    validarEmail();
    validarSenha();
    if (!validaremail(emailValue)) {
        email.classList.add("formcontrol-error");
        return;
    }
    else {
        email.classList.remove("formcontrol-error");
        email.classList.add("formcontrol-success");
        return;
    }
}

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
    if (senha.value === "" &&  < 7) {
        senha.classList.add("formcontrol-error");
        return;
    }
    else {
        senha.classList.remove("formcontrol-error");
        senha.classList.add("formcontrol-success");
        return;
    }
}

function validarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
