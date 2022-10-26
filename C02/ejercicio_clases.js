class Contador {
    constructor (nombre) {
        this.nombre = nombre;
        this.cantidadObjeto = 0;
    }

    static cantidadClase = 0;

    obtenerResponsable() {
        return this.nombre;
    }

    obtenerCuenteIndividual() {
        return this.cantidadObjeto;
    }

    obtenerCuentaGlobal() {
        return Contador.cantidadClase;
    }

    contar() {
        this.cantidadObjeto += 1;
        Contador.cantidadClase++;
    }
}

const juan = new Contador('Juan');
const maria = new Contador('Maria');

console.log(Contador, juan, maria);

juan.contar();
maria.contar();
maria.contar();
juan.contar();
maria.contar();

console.log(Contador, juan, maria);