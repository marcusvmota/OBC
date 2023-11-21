let pacientes = ["Andrea", "Pedro", "Joaquim", "Maria", "Ana","Vinicius","João","Rafael"];

let opcao = "";


  do {
    let lista = "lista de pacientes"+ "\n";
    for (let i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + ". " + pacientes[i] + "\n";
   
     }
    opcao =prompt(lista + "\nEscolha uma opção abaioxo"+"\n1 - Adicionar\n2 - Chamar proximo paciente\n3 - Sair");

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Qual o nome do paciente?")
      pacientes.push(novoPaciente) 
      break;
    case "2":
      let pacienteAtendido = pacientes.shift()
      if (pacienteAtendido) {
        alert("Paciente atendido: " + pacienteAtendido)
      }else {
        alert("Nenhum paciente para atender")
      }

      break;
    case "3":
      alert("Saindo do sistema")
      break;
    default:
      alert("Opcão inválida")
  }
  } 
  while (opcao !== "3")


