let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
    if (inputEmail.value == "" || inputPassword.value == "") {
        alert("Campo Vazio!");
    }
    else {
        alert("Entrou!");
        window.open("./pages/dashboard.html");
    }
});