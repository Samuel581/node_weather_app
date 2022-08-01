const axios = require('axios').default;

class Busquedas {
    //Seran strings limitados a 6 opciones
    historial = [];

    constructor() {
        //TODO: Leer DB si existe

    }

    async ciudad(lugar = '') {
        //Peticion HTTP
        // console.log('Ciudad:', lugar);

        try {
            //Peticion de http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: {
                    'access_token': 'pk.eyJ1Ijoic2FtdWVsNTgxIiwiYSI6ImNsNjRnZGNoNDAwbTczYm1xNTc2a21sNTYifQ.0Xbo38ktNxGjOfdpsCZlUQ',
                    'limit': 5,
                    'language': 'es'
                    
                }
            })
            const response = await instance.get();
            // const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoic2FtdWVsNTgxIiwiYSI6ImNsNjRnZGNoNDAwbTczYm1xNTc2a21sNTYifQ.0Xbo38ktNxGjOfdpsCZlUQ`);
            console.log(response.data);

            return []; //Retorna los lugares
        } catch (error) {
            return [];

        }
    }

}

module.exports = Busquedas;