

function preco (){
    let total = 0
    for (let valor of arguments) 
        total += valor
    return total

}
console.log (preco(10, 20, 30))