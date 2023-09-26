let car1 = prompt("Digite o nome do primeiro carro");
let vel1 = prompt("Digite a velocidade do primeiro carro");
let car2 = prompt("Digite o nome do segundo carro");
let vel2 = prompt("Digite a velocidade do segundo carro");

vel1 = Number(vel1);
vel2 = Number(vel2);

if (vel1 > vel2) {
    alert(`O carro ${car1} é mais rapido e está a ${vel1}km/h e o carro ${car2} está a ${vel2}km/h`);
} else if (vel2 > vel1) {
    alert(`O carro ${car2} é mais rapido e está a ${vel2}km/h e o carro ${car1} está a ${vel1}km/h`);
}
else {
    alert("A velocidade dos carros são iguais");
}

