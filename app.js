require('dotenv').config()

const { leerInput,
    inquirerMenu,
    pausa, 
    listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");




const main = async () => {

    const busquedas = new Busquedas();
    let option = 1;
    while (option !== 0) {
        option = await inquirerMenu();

        switch (option) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');

                //Buscar lugar
                const lugares = await busquedas.ciudad(lugar);

                //Mostrar lugares
                const idSelecionado = await listarLugares(lugares);
                //Seleccionar lugar
                const lugarSeleccionado =  lugares.find(l => (l.id === idSelecionado));

                //Clima
                const climaLugar = await busquedas.clima(lugarSeleccionado.lat, lugarSeleccionado.lng);
                console.log(climaLugar);


                //Mostrar resultados
                
                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Cuidad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
                console.log('Estado: ', climaLugar.desc);
                console.log('Temperatura: ', climaLugar.current);
                console.log('Maxima: ', climaLugar.max);
                console.log('Minima: ', climaLugar.min);
                break;
            case 2:
                console.log('Hola que hace 2');
                // console.log(process.env.MAPBOX_KEY);
                break;
            default:
                break;
        }
        await pausa();
    }
}


main();