
    let atacante = prompt("Digite o nome do atacante")
    let poderAtaque = Number(prompt ("Digite o valor do ataque (0 a 99)"))

    let defensor = prompt ("digite o nome do defensor")
    let pontosDeVida = Number(prompt ("digite a quantidade de pontos de vida"))
    let poderDefesa = Number(prompt("digite o valor do poder de defesa (0 a 99)"))
    let escudo = prompt("Possui escudo? (SIM ou NAO)")

    let dano = 0

    if ((poderAtaque > poderDefesa) && escudo === "NAO") {
        dano = poderAtaque - poderDefesa   
    } else if (poderAtaque > poderDefesa && escudo === "SIM") {
        dano = (poderAtaque - poderDefesa) / 2
    }

    pontosDeVida -= dano

    alert(
        atacante + "\nPoder de ataque: " + poderAtaque + "\n\n" +
        defensor + "\nPontos de vida: " + pontosDeVida +
        "\nPoder de defesa: " + poderDefesa + "\nPossui escudo: " + escudo )

   alert(`O dano do ${atacante} foi de ${dano}, \nO ${defensor} não tinha escudo ficando com ${pontosDeVida} pontos de vida`)






