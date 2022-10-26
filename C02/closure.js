function saludo(nombre) {
    const signos = '!!!'
    return function () {
        // console.log('Hola ' + nombre + signos);
        console.log(`Hola ${nombre}${signos}`);
    }
}

const mensaje = saludo('Juan');

mensaje();