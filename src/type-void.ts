// void es lo opuesto a anny, se usa cuando no retorna valores:

// void es un tipo de dato que no retorna ningun valor

function showInfo(user: any): any {
  console.log("showInfo " + user.id, user.username, user.phone);
  //return "hola";
}

showInfo({ id: 1, username: "luis", phone: 123 });

// uso inferido para any

function showFormattedInfo(user: any) {
  console.log(
    "showFormattedInfo ",
    `
    id: ${user.id}
    username: ${user.username}
    phone: ${user.phone}
    `
  );
  //return "hola";
}

showFormattedInfo({ id: 1, username: "luis", phone: 123 });

//tipo void, como tipo de dato en una variable:
// null y undefined son subtipos para la delcaracion de void, debo desabilitar el uso estricto
let unusable: void;
//unusable = null;
unusable = undefined;

//tipo never:

function handleError(code: number, message: string): never {
  //procesador de codigo
  // generamos un mensaje
  throw new Error(`${message} ${code}`);
}
try {
    handleError(404, "Not Found");
} catch (error) {
    
}

function sumNumbers (limit: number): never {
    let sum = 0;
    while(true){
        sum++;
    }
}

// sumNumbers(10); // el programa nunca termina;

