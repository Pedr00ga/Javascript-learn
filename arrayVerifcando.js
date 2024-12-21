
let tempVariation = [21, 5, 32, 25, -5]

//const tempPositivo = tempVariation.every(function(value) { 
//    return value >= 0
//}
//)
const tempPositivo = tempVariation.filter(function(value) { 
    return value >= 0
}
)


console.log(tempPositivo)