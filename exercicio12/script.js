let baralho = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"]
let opcao = ""



do {
    opcao = prompt("Cartas no baralho: " + baralho.length + "\nEscolha uma opção:\n 1 - Adicionar carta \n2 - Puxar uma carta\n3 - Sair")
        

    switch (opcao) {
        case "1":
            let novaCarta = prompt("Qual o nome da nova carta?")
            baralho.unshift(novaCarta)
            break
        case "2":
           let cartaRemovida = baralho.shift()
           if (cartaRemovida) {
               alert("Carta removida: " + cartaRemovida)
           }else {
               alert("Baralho vazio")
           }
            break
        case "3":
            alert("Saindo do sistema")
            break
        default:
            alert("Opcão inválida")
    }

} while (opcao !== "3")