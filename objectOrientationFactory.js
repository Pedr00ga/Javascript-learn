
function concecionaria (marca, modelo, ano, km){
    const carro = {
        carroMarca: marca,
        carroModelo: modelo,
        carroAno: ano,
        carroKm: km,

    }
    return carro;
}

const carro1 = concecionaria("Ford", "Mustang", 2020, 15000);
const carro2 = concecionaria("Mercedes", "G63", 2020, 1300);

carro1.cor = "Vermelho"

console.log(carro1, carro2);