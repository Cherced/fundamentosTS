// type: object;
let user: object;
user = {}// object
user = {
    id: 1,
    username: 'luis',
    phone: 123,
    isPro: true
}
console.log('user', user);
//console.log('user.id', user.id); // no se puede acceder object a una propiedad cuando este se nombra en minuscula
// es diferente object a Object
// object es un tipo de dato que se usa para definir un objeto
// object es un tipo de dato para valores no primitivos
// Object es la clase de JS

// object Vs Object (el tipo de TS, vs la clase de JS )

const myObject = {
    id: 1,
    username: 'luis',
    phone: 123,
    isPro: true
}; // este es un objeto de JS, es una instancia de la clase Object

const instancia = myObject instanceof Object; // true

console.log('instancia', instancia);


