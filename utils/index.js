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
      format.jsonFormatSecurity(res.data.data, (formattedData) => {
        callback(formattedData);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
}

const getBatteryLevel = (id, callback) => {
  axios.post('http://gmapi.azurewebsites.net/getEnergyService', {
    id: id,
    responseType: 'JSON'
  })
  .then((res) => {
    callback(res.data.data)
  })
}


module.exports = {
  getVehicleInfoById,
  getSecurityInfoById,
  getBatteryLevel
}












