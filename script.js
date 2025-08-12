function login() {
  const nome = document.getElementById("nome").value.trim();
  if (nome.length > 0) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    document.getElementById("saudacao").innerText = `Olá, ${nome}!`;
    localStorage.setItem("nomeFofo", nome);
  }
}

function escreverLivro() {
  alert("Em breve: tela para escrever livros! 💖 (Me peça para implementar!)");
}

// Mantém login se já fez antes
window.onload = function() {
  const nome = localStorage.getItem("nomeFofo");
  if (nome) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    document.getElementById("saudacao").innerText = `Olá, ${nome}!`;
  }
};
