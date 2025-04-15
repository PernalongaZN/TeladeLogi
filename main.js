document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Coleta os valores dos campos
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Dados pra testar
    var usuarioValido = "bomfimvinicius065@gmail.com";
    var senhaValida = "12345";
  
    // Validar se o nome de usuário e senha estão corretos
    if (username === usuarioValido && password === senhaValida) {
      // Redireciona para a página principal de portifo
    location.href = "https://github.com/PernalongaZN/teladelogin.git"; 
    } else {
      alert("Usuário ou senha inválidos. Tente novamente.");
    }
  });