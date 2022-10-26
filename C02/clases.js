class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        Auto.cantidad++;
    }

    static cantidad = 0;

    acelerar() {
        this.velocidad = 60;
    }

    frenar() {
        this.velocidad = 0;
    }

    vender() {
        Auto.cantidad--
    }
}

const ford = new Auto('Ford', 'Focus');
ford.acelerar();
console.log(ford, Auto);

const chevrolet = new Auto('Chevrolet', 'Mondeo');
const fiat = new Auto('Fiat', '147');

console.log(Auto.cantidad);

ford.vender();
fiat.vender();
console.log(Auto.cantidad);