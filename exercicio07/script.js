let opcao = ""

do {
    opcao = prompt ( "Escolha uma das opções abaixo:\n1 - \n2 - \n3 - \n4 - \n5 - Sair")



switch (opcao) {
    case "1":
        alert("Opção 1")
        break
    case "2":
        alert("Opção 2")
        break
    case "3":
        alert("Opção 3")
        break
    case "4":
        alert("Opção 4")
        break
    case "5":
        alert("Opção 5")
        alert("Obrigado!")
        break
        default:
            alert("Opção inválida")
}
}
while (opcao !== "5") 