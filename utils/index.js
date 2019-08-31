const axios = require('axios');
const format = require('./helpers');
const url = 'http://gmapi.azurewebsites.net/';

const getVehicleInfoById = (id, callback) => {
  axios.post(`${url}getVehicleInfoService`, {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      format.jsonFormatId(res.data.data, (formattedData) => {
        callback(null, formattedData);
      });
    })
    .catch((error) => {
      callback(error, null);
    });
}

const getSecurityInfoById = (id, callback) => {
  axios.post(`${url}getSecurityStatusService'`, {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      format.jsonFormatSecurity(res.data.data, (formattedData) => {
        callback(null, formattedData);
      });
    })
    .catch((error) => {
      callback(error, null);
    });
}

const getEnergyLevel = (id, callback) => {
  axios.post(`${url}getEnergyService`, {
    id: id,
    responseType: 'JSON'
  })
    .then((res) => {
      callback(null, res.data.data);
    })
    .catch((error) => {
      callback(error, null);
    })
}

const startStopEngine = (id, action, callback) => {
  axios.post(`${url}actionEngineService`, {
    id: id,
    command: action,
    responseType: 'JSON',
  })
    .then((res) => {
      format.jsonFormatEngineAction(res, (formattedData) => {
        callback(null, formattedData);
      });
    })
    .catch((error) => {
      callback(error, null);
    })
}

module.exports = {
  getVehicleInfoById,
  getSecurityInfoById,
  getEnergyLevel,
  startStopEngine
}














