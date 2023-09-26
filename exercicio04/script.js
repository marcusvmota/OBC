let person1 = prompt("Digite o nome do primeiro personagem");
let poder = prompt("Digite o poder do primeiro personagem (0 a 100)");

let person2 = prompt("Digite o nome do segundo personagem");
let defesa = prompt("Digite os pontos de defesa (0 a 100)");
let escudo = prompt("Possui escudo? (S/N)");

poder = Number(poder);
defesa = Number(defesa);

let resultado1 = poder - defesa;
let resultado2 = (poder - defesa) /2;

let life = 100

let newLife = life - resultado1


if (poder > defesa && escudo == "N") {
    alert(`O personagem ${person1} atacou com dano de ${resultado1} pontos. O personagem ${person2} tem ${life - resultado1} de vida`);
}
else if (poder > defesa && escudo == "S") {
    alert(`O personagem ${person1} atacou com dano de ${resultado2} pontos. O personagem ${person2} tem ${life - resultado2} de vida`);
    
}
else if (poder <= defesa ) {
    alert(`o dano causado foi 0`);
}

