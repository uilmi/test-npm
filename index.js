const os = require('os');
const fs = require('fs');
const luasSegitiga = require('./segitiga.js');
const sabrina = require('./create.js');

console.log('Free Memory:', os.freemem());
console.log('homedir:', os.homedir());
console.log('uptime:', os.uptime());

console.log(luasSegitiga(3, 4));

const isi = fs.readFileSync('./text.txt', 'utf-8');

console.log(isi);
fs.writeFileSync('./text.txt', "ini tambahan line");
console.log(isi);

// console.log(sabrina);
console.log(fs.readFileSync('./person.json', 'utf-8'));