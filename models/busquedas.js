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
                    'access_token': process.env.MAPBOX_KEY,
                    'limit': 5,
                    'language': 'es'
                }
            })
            const response = await instance.get();
            // const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoic2FtdWVsNTgxIiwiYSI6ImNsNjRnZGNoNDAwbTczYm1xNTc2a21sNTYifQ.0Xbo38ktNxGjOfdpsCZlUQ`);
            // console.log(response.data.features);

            return response.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name_es,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); //Retorna los lugares
        } catch (error) {
            return [];
        }
    }

    async clima(lat, long) {

        try {
            //Peticion de http
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {
                    appid : process.env.OPENWHEATER_KEY,
                    lat : lat,
                    lon: long,
                    units : 'metric',
                    lang: 'sp'
                }
            })
            
            const response = await instance.get();
            const {weather, main} = response.data;

            return {
                desc: weather[0].description,
                icon: weather[0].icon,
                min: main.temp_min,
                max: main.temp_max,
                current: main.temp
            };
        } catch (error) {
            console.log(error);;
        }

    }

}

module.exports = Busquedas;