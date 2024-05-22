//biblioteca de modulos nativos
//ctrl + . para convertir a modulo comun y será necesario cambiar la extension a .mjs

//const sistemaOperativo = require('node:os');

import { platform, homedir, hostname, cpus, totalmem, freemem, uptime } from 'node:os';


/*
console.log(sistemaOperativo.platform()); // linux
console.log(sistemaOperativo.homedir()); // /home/usuario
console.log(sistemaOperativo.hostname()); // ubuntu
console.log(sistemaOperativo.cpus()); // [ {}, {}, {} ]
console.log(sistemaOperativo.totalmem()/1024/1024); // 1234567890
console.log(sistemaOperativo.freemem()/1024/1024); // 1234567890
console.log(sistemaOperativo.uptime()); // 1234567890
*/

console.log(platform()); // linux
console.log(homedir()); // /home/usuario
console.log(hostname()); // ubuntu
console.log(cpus()); // [ {}, {}, {} ]
console.log(totalmem()/1024/1024); // 1234567890
console.log(freemem()/1024/1024); // 1234567890
console.log(uptime()); // 1234567890
