let saldo = prompt("Qual seu saldo inicial?")
let opcao = ""
saldo = Number(saldo)

do {
    opcao = prompt("Saldo Disponível: R$" + saldo + "\nEscolha uma das opções abaixo:\n1 - Depositar\n2 - Sacar\n3 - Sair")
    switch (opcao) {
        case "1":

            saldo += Number(prompt("Qual o valor do depósito?"))
            break
        case "2":

            saldo -= Number(prompt("Qual o valor do saque?"))
            break
        case "3":
            alert("Sair")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "3")