let medida = prompt("Digite um valor em metros que deseja converter");

let options = prompt("Escolha uma das opções abaixo:\nA) converter em milimetros \nB) converter em centimetros\nC) converter em decímetros\nD) converter em decâmetros \nE) converter em hectometros\nF) converter em quilometros");

medida = Number(medida);
options = options.toUpperCase();

let cm = medida * 100
let ml = medida * 1000
let dm = medida * 10
let dm2 = medida / 10
let hm = medida / 100
let km = medida / 1000



switch (options) {
    case "A":
        alert(`${medida} metros equivalem a ${ml} milimetros `)
        break
    case "B":
        alert(`${medida} metros equivalem a ${cm} centimetros `)
        break
    case "C":
        alert(`${medida} metros equivalem a ${dm} decimetros`)
        break
    case "D":
        alert(`${medida} metros equivalem a ${dm2} decâmetros`)
        break
    case "E":
        alert(`${medida} metros equivalem a ${hm} hectometros`)
        break
    case "F":
        alert(`${medida} metros equivalem a ${km} quilometros`)
        break
        default:
        alert(`Finalizando...`)
}