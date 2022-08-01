const { leerInput,
    inquirerMenu,
    pausa } = require("./helpers/inquirer");
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
                await busquedas.ciudad(lugar)

                //Buscar lugar

                //Mostrar lugares

                //Seleccionar lugar
                
                //Clima

                //Mostrar resultados
                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Cuidad: ');
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperaatura: ');
                break;
            case 2:
                console.log('Hola que hace 2');
                break;
            default:
                break;
        }
        await pausa();
    }
}


main();