// corchetes []
// parentesis ()
// llaves {}
// punto y coma ;
// tipo explicito
let users: string[];
users = ['luis', 'juan', 'pedro'];
console.log('users', users);
// error users = ['luis', 'juan', true, 1];
// uso tipo inferido
let otherUsers: Array<string>;
otherUsers = ['luis', 'juan', 'pedro'];
console.log('otherUsers', otherUsers);
// error otherUsers = ['luis', 'juan', true, 1];
// array de tipo any
let otherUsersAny: any[];
otherUsersAny = ['luis', 'juan', 'pedro'];
console.log('otherUsersAny', otherUsersAny);
otherUsersAny = ['luis', 'juan', true, 1];
console.log('otherUsersAny', otherUsersAny);
