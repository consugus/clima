const axios = require('axios');

const getLocation = async (address) => {

    address = encodeURI(address);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${address}`,
        headers: {'X-RapidAPI-Key': '4a28ec14ddmshbb11ac60b7557dcp18730ajsn1805ed3004bf'}
    });

    let resp = await instance.get()

    if(resp.data.Results.length ===0){
        throw new Error (`No hay respuesta para ${address}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLocation
};