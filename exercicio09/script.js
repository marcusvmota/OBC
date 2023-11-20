let number = prompt("Digite um número");
 number = Number(number);

 let resultado = ""

 for (let i = 1; i <= 20; i++) {
     let tabuada = number * i
    resultado += number + " x " + i + " = " + tabuada  + "\n";
}

 alert("Tabuada de " + number + ":\n" + resultado);



// // Solicitar ao usuário um número para a tabuada
// var numero = prompt("Informe um número para a tabuada:");

// // Inicializar uma string para armazenar os resultados
// var tabuadaString = "";

// // Calcular a tabuada de 1 a 20 e armazenar na string
// for (var i = 1; i <= 20; i++) {
//     var resultado = numero * i;
//     tabuadaString += numero + " x " + i + " = " + resultado + "\n";
// }

// // Exibir os resultados
// alert("Tabuada de " + Number + ":\n" + resultado);

// // Fim do programa

