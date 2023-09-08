let number1 = prompt("Digite o primeiro número");
let number2 = prompt("Digite o segundo número");

let soma = Number(number1) + Number(number2);
let subtracao = Number(number1) - Number(number2);
let multiplicacao = Number(number1) * Number(number2);
let divisao = Number(number1) / Number(number2);

let resultado = `A soma é ${soma}, a subtração é ${subtracao}, a multiplicação é ${multiplicacao}, e a divisão é ${divisao}.`;

alert(resultado);