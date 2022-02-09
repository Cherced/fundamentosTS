"use strict";
// <> // angle brackets syntax
let usernombre;
usernombre = 'luixaviles';
console.log('usernombre', usernombre);
//usernombre = 10;
console.log('usernombre', usernombre);
let mensaje = usernombre.length > 5 ? 'Hola ' + usernombre : 'No hay nombre';
console.log('mensaje', mensaje);
let usernombreWithID;
usernombreWithID = {
    id: 1,
    nombre: 'luixaviles'
};
//usernombre = (<string>usernombreWithID.nombre).substring(0, 5);
console.log('usernombre', usernombre);
console.log('usernombreWithID', usernombreWithID);
let message = usernombre.length > 5 ? 'Hola ' + usernombre : 'No hay nombre';
console.log('mensaje', message);
