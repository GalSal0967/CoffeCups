function irParaOutraPagina() {
    if (window.location.pathname.endsWith("login.html")) {
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html"; 
    }
}


//Nao serve pra nada, apagar dps

function voltarPagina() {
        window.location.href = "index.html"; // Altere para a página desejada
    }


function handleLogin() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login successful!"); // Simula o login

    }