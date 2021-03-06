

// Funciones en JS

// const saludar = function( nombre ) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
}

const user = getUser();
console.log( user );


//Transformar a una funcion de flecha
//Retornar objeto implicito
//Pruebas
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Nicolas');
console.log( usuarioActivo );

