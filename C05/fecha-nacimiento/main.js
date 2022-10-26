const moment = require("moment");

const today = moment();
const fecha_nacimiento = moment("31-12-1995", "DD-MM-YYYY");

console.log(`Hoy es: ${today.format("DD/MM/YYYY")}`);

console.log(fecha_nacimiento.format("DD/MM/YYYY"));

console.log(today.diff(fecha_nacimiento, 'days'));
