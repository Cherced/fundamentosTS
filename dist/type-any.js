"use strict";
// tipo explicito
let idUser;
idUser = 1; // number
idUser = 'luis'; // string
console.log('idUser', idUser);
idUser = true; // boolean
console.log('idUser', idUser);
//uso tipo inferido
let otherId;
otherId = 1; // number
otherId = 'luis'; // string
console.log('otherId', otherId);
otherId = true; // boolean
console.log('otherId', otherId);
let surprise = 'surprise';
const res = surprise.substring(6);
console.log('res', res);
