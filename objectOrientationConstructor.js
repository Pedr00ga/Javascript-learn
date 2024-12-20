

function concecionaria (marca, modelo, ano, km){

        this.carroMarca = marca;
        this.carroModelo = modelo;
        this.carroAno = ano;
        this.carroKm = km

}

const carro1 = new concecionaria("Ford", "Mustang", 2020, 15000);
const carro2 = new concecionaria("Mercedes", "G63", 2020, 1300);


console.log(carro1, carro2);