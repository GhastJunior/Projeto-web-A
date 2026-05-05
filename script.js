// Função chamada ao clicar no botão
function validarNumero() {

    // Captura o valor digitado no input
    let numero = document.getElementById("numero").value;

    // Captura o elemento onde será exibida a mensagem
    let mensagem = document.getElementById("mensagem");

    // Verifica se o campo está vazio
    if (numero === "") {

        // Mensagem de erro
        mensagem.textContent = "Por favor, insira um número.";

        // Cor vermelha
        mensagem.style.color = "red";

    } else {

        // Converte o valor para número inteiro
        numero = parseInt(numero);

        // Se for maior que 10
        if (numero > 10) {

            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";

        } 
        // Se for maior que 5
        else if (numero > 5) {

            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";

        } 
        // Caso contrário
        else {

            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";

        }
    }
}