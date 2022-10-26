const fs = require('fs');

// const datos = fs.readFileSync('C:/Users/User/Documents/C04/datos.txt', 'utf-8');
// console.log(datos);

// fs.readFile('datos.txt', 'utf-8', (error, dato) => {
//     if (error) { 
//         console.log(error)
//     } else {
//         console.log(dato)
//     }
// })

// fs.writeFileSync('datos.txt', 'Hola...', 'utf-8');

// fs.appendFileSync('./datos.txt', '\nmundo');

// try {
//     fs.unlinkSync('datos.txt');
// } catch(error) {
//     console.log(error.message);
// }

// fs.mkdir('ejemplo', error => {
//     if (error) { console.log(error) }
// })

// fs.readdir('./', (error, contenido) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(contenido)
//     }
// })

async function archivos() {
    try {
        const dato = await fs.promises.readFile('datos.txt', 'utf-8');
        console.log(dato);
        await fs.promises.writeFile('datos2.txt', 'hola');
        console.log('fin try');
        await fs.promises.rename('datos2.txt', 'info.txt');
    } catch (error) {
        console.log(error);
    }
}

archivos();

console.log('fin programa');