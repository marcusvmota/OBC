const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

continuar = continuar.toUpperCase();

while (continuar === "SIM") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
    continuar = continuar.toUpperCase();
  }

  alert(
    `Olá, ${turista}! Você visitou ${contagem} cidades.\n${cidades}`
  )
