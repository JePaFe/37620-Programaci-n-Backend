const fs = require('fs');

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) { throw new Error('Error al leer el archivo') }

    console.log(contenido)

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    }

    fs.writeFile('info.txt', JSON.stringify(info), error => {
        if (error) { throw new Error('Error al leer el archivo') }
    })
});