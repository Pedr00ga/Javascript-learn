//And  &&
//Or ||
//Not !

let idadeMinima = true
let temTitulo = false
let podevotar = idadeMinima && temTitulo

if (temTitulo && idadeMinima)
    console.log("Você pode votar")
else
    console.log("Você não pode votar")

console.log(podevotar)
