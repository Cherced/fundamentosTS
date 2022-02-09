"use strict";
// corchetes []
// parentesis ()
// llaves {}
// punto y coma ;
// tipo explicito
let users;
users = ['luis', 'juan', 'pedro'];
console.log('users', users);
// error users = ['luis', 'juan', true, 1];
// uso tipo inferido
let otherUsers;
otherUsers = ['luis', 'juan', 'pedro'];
console.log('otherUsers', otherUsers);
// error otherUsers = ['luis', 'juan', true, 1];
// array de tipo any
let otherUsersAny;
otherUsersAny = ['luis', 'juan', 'pedro'];
console.log('otherUsersAny', otherUsersAny);
otherUsersAny = ['luis', 'juan', true, 1];
console.log('otherUsersAny', otherUsersAny);
