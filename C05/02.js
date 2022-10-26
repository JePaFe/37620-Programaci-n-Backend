const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

// let nombres = [];

// for (let i = 0; i < productos.length; i++) {
//     nombres.push(productos[i].nombre);
// }

// let nombres = productos.map(item => item.nombre);

// productos.forEach((item) => nombres.push(item.nombre));

// console.log(nombres.join(", "));

// let total = 0;

// for (let i = 0; i < productos.length; i++) {
//   total += productos[i].precio;
// }

// console.log(total / productos.length);

// let total = productos.reduce((total, item) => (total += item.precio), 0);

// console.log(total);

let precios = productos.map((item) => item.precio);

let min = Math.min(...precios);
let max = Math.max(...precios);
console.log(min, max);

