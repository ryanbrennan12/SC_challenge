const axios = require('axios');

jsonFormat = (json, callback) => {
  const results = {};
  console.log('I AM JSON', json)
  for (let key in json) {

    if (key === "vin" || key === "color") {
      results[key] = json[key].value;
    } else if (key === "fourDoorSedan") {
      if (json[key].value === "True") {
        results.doorCount = 4;
      } else {
        results.doorCount = 2;
      }
    } else if (key === "driveTrain") {
      results[key] = json[key].value;
    }
  }

  callback(results);
}

getVehicleInfoById = (id, callback) => {
  axios.post('http://gmapi.azurewebsites.net/getVehicleInfoService', {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      console.log("I AM FROM PLANET AXIOS", res.data.data)
      jsonFormat(res.data.data, (formattedData) => {
        console.log(formattedData)
        callback(formattedData);
      })
    })
    .catch((error) => {
      callback('we have an error', error);
    })
  }





module.exports = {
  getVehicleInfoById
}







