const fs = require('node:fs');

const contenido= fs.statSync('./ejemplo.txt', 'utf-8');

console.log(contenido.isFile()); // 3
console.log(contenido.isDirectory()); // 2
console.log(contenido.size); // 2
console.log(contenido.isSymbolicLink()); // 2