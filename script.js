
// ===============================
// PROJETO AGRINHO - SCRIPT.JS
// ===============================

// Mensagem de boas-vindas
function mensagem() {
    alert("🌱 Bem-vindo ao Projeto Agrinho e ao mundo da Programação!");
}

// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================

const texto = "Tecnologia e Sustentabilidade Caminhando Juntas!";
let i = 0;

function efeitoDigitacao() {
    if (i < texto.length) {
        document.getElementById("digitando").innerHTML += texto.charAt(i);
        i++;
        setTimeout(efeitoDigitacao, 80);
    }
}

// Inicia o efeito quando a página carregar
window.onload = efeitoDigitacao;

// ===============================
// MODO ESCURO
// ===============================

function modoEscuro() {
    document.body.classList.toggle("dark-mode");
}

// ===============================
// MENSAGEM NO CONSOLE
// ===============================

console.log("Projeto Agrinho carregado com sucesso!");

// ===============================
// DATA E HORA
// ===============================

function mostrarData() {

    const data = new Date();

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    const hora = data.getHours();
    const minutos = data.getMinutes();

    const textoData =
        `${dia}/${mes}/${ano} - ${hora}:${minutos}`;

    document.getElementById("data").innerHTML =
        "📅 Data e Hora: " + textoData;
}

// Atualiza automaticamente
setInterval(mostrarData, 1000);

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.getElementById("topo");

window.onscroll = function () {

    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
