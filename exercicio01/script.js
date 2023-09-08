let firstname = prompt("Digite seu nome");
let lastname = prompt("Digite seu sobrenome");
let study = prompt("Digite seu curso");
let age = prompt("Digite seu ano de nascimento");

Number(age);

let newAge = 2023 - Number(age)

alert(`Olá, ${firstname} ${lastname}! Você está cursando ${study} e tem ${newAge} anos.`);