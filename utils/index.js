const axios = require('axios');
const format = require('./helpers');
const url = 'http://gmapi.azurewebsites.net/';

const http = axios.create({
  baseURL: url
})
//These helper functions are making Axios requests and
//when applicable, using functions imported from the format-module to
//change the data shape when applicable.
//All parameters labeled 'callback' are being invoked as functions on the Response Object
//in routes/index.js

const getVehicleInfoById = (id, callback) => {
   http.post('getVehicleInfoService', {
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
  http.post('getSecurityStatusService', {
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
  http.post('getEnergyService', {
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
  http.post('actionEngineService', {
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
  startStopEngine,
  http
};














