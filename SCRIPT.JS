
// Validação do formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("message");

  // Validação básica
  if (nome === "" || email === "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
    return;
  }

  // Validação do formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensagem.textContent = "Por favor, insira um e-mail válido.";
    mensagem.style.color = "red";
    return;
  }

  // Se estiver tudo certo
  mensagem.textContent = `Obrigado, ${nome}! Seu formulário foi enviado com sucesso.`;
  mensagem.style.color = "green";

  // Limpar formulário
  this.reset();
});


