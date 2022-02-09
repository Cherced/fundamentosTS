// explicita
let explicita: null;
explicita = null;
console.log('explicita', explicita);
//explicita = undefined; da error porque no es un tipo de dato valido

let othervariable= null;
console.log('othervariable', othervariable);
othervariable = undefined;
console.log('othervariable', othervariable);
othervariable = 1;
console.log('othervariable', othervariable);

// undefined

let undefinedVariable: undefined = undefined;
console.log('undefinedVariable', undefinedVariable);
// undefinedVariable = null; da error 
console.log('undefinedVariable', undefinedVariable);

let otherVarUndefined = undefined; // asi se infiere el tipo como any
console.log('otherVarUndefined', otherVarUndefined);
otherVarUndefined = null;
console.log('otherVarUndefined', otherVarUndefined);
otherVarUndefined = 1;
console.log('otherVarUndefined', otherVarUndefined);

// null y undefined como subtipos

let albumName: string;
// da error albumName = null;
//console.log('albumName', albumName);
 //da error albumName = undefined;
//console.log('albumName', albumName);

// strictNullChecks

