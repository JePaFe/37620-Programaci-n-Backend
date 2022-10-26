function mostrarLetras(palabra, cb) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < palabra.length) {
            console.log(palabra[i]);
            i++;
        } else {
            clearInterval(timer);
            cb();
        }
        
    }, 1000);
}

const fin = () => console.log('Fin...');

setTimeout(() => {
    mostrarLetras('mundo', fin);
}, 0);

setTimeout(() => {
    mostrarLetras('mundo', fin);
}, 250);

setTimeout(() => {
    mostrarLetras('mundo', fin);
}, 500);

