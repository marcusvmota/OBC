// Solicitar ao usuário uma palavra
var palavra = prompt("Informe uma palavra:");

// Remover espaços em branco e converter para minúsculas
var palavraTratada = palavra.toLowerCase().replace(/\s/g, '');

// Inicializar variável para armazenar a palavra invertida
var palavraInvertida = "";

// Inverter a palavra usando um loop for
for (var i = palavraTratada.length - 1; i >= 0; i--) {
    palavraInvertida += palavraTratada[i];
}

// Verificar se a palavra original e a invertida são iguais
if (palavraTratada === palavraInvertida) {
    alert(palavra + " é um palíndromo!");
} else {
    alert(palavra + " não é um palíndromo.");
    alert("Da esquerda para a direita: " + palavraTratada);
    alert("Da direita para a esquerda: " + palavraInvertida);
}
