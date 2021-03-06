



const persona = {
    nombre: 'Nicolas',
    apellido: 'Lopez',
    edad: 45,
    direccion: {
        ciudad: 'Bogota',
        zip: 5512313,
        lat: 14.32,
        lng: 35.12313,
    },
}


// console.table( { persona } );

const persona2 = { ...persona };
persona2.nombre = 'Juan';

console.log( persona );
console.log( persona2 );




