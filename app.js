const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad sobre la que se quiere obtener el clima, por ejemplo\n node app -d "Cordoba Argentina"',
        demand: true
    }
}).argv;


let address = argv.direccion

const getInfo = async (address) => {

    try {
        const info = await location.getLocation(address);
        const clima = await weather.getweather(info.lat, info.lon)

        return `\nLa temperatura en ${ info.direccion } es de ${clima} ºC`
    }
    catch (err){
        return (`No se pudo determinar el clima para ${address}`)
    };



}
(getInfo(address))
    .then(console.log)
    .catch(console.log);

