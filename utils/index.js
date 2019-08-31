const axios = require('axios');
const format = require('./helpers');


const getVehicleInfoById = (id, callback) => {
  axios.post('http://gmapi.azurewebsites.net/getVehicleInfoService', {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      format.jsonFormatId(res.data.data, (formattedData) => {
        callback(formattedData);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
}

const getSecurityInfoById = (id, callback) => {
  axios.post('http://gmapi.azurewebsites.net/getSecurityStatusService', {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      console.log('we have a response ', res.data)
      format.jsonFormatSecurity(res.data.data, (formattedData) => {
        callback(formattedData);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
}


module.exports = {
  getVehicleInfoById,
  getSecurityInfoById
}












