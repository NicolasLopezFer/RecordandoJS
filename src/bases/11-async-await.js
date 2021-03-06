



// const getImagenPromesa = () => new Promise( resolve => resolve('https://asdasdasd.com'));
// getImagenPromesa().then( console.log );


const getImage = async () => {
    
    try{
        const apiKey = 't2SnQePvNTvayUUiqQidQ35iYwnHXMEM';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const { data } = await peticion.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImage();








// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => { 
//         const { url } = data.images.original; 

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     } )
//     .catch( console.warn )
//     ;

