const axios = require('axios');

const getweather = async ( lat, lon ) => {

    let appid = 'd9e72b71a9945b98bde4c86be188148b';
    let units = 'metric';
    let lang = 'es';

    let url = 'https://api.openweathermap.org/data/2.5/weather?';
        url += 'lat=' + lat;
        url += '&lon='+ lon;
        url += '&appid=' + appid;
        url += '&units=' + units;
        url += '&lang=' + lang;

        try {
            const resp = await axios.get(url)
              return (resp.data.main.temp);
        }
        catch (err){
            (error) => { throw new Error ('Error!!!' + error);
        };
    };

}

module.exports = {
    getweather
}