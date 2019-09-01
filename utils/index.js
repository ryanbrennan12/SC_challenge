const axios = require('axios');
const format = require('./helpers');
const url = 'http://gmapi.azurewebsites.net/';

const http = axios.create({
  baseURL: url
})

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














