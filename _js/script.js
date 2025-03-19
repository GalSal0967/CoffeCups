function irParaOutraPagina() {
    if (window.location.pathname.endsWith("login.html")) {
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html"; 
    }
}


function voltarPagina() {
        window.location.href = "index.html"; // Altere para a página desejada
    }


