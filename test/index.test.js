const expect = require('chai').expect;
const nock = require('nock');
const utils = require('../utils/index.js');
//mock axios responses being used with nock
const response = require('./response');
const url = 'http://gmapi.azurewebsites.net';
describe('GET User Vehicle Info', () => {
  // const url = 'http://gmapi.azurewebsites.net/getVehicleInfoService';
  beforeEach(() => {
    nock(url)
      .post('/getVehicleInfoService')
      .reply(200, response.mockVehicleResponse);
  });

  it('Reformats the data shape for Vehicle Info', (done) => {
    utils.getVehicleInfoById(1234, (err, result) => {
      if (err) { return done (err); }
      expect(typeof result).to.equal('object');
      expect(typeof result.doorCount).to.equal('number');
      expect(Object.keys(result).length === 4);
    })
    done();
  });
});

describe('GET Vehicle Security (doors) Info', () => {
  beforeEach(() => {
    nock(url)
      .post('/getSecurityStatusService')
      .reply(200, response.mockSecurityResponse);
  });

  it('Reformats the data shape for Security Info', (done) => {
    utils.getSecurityInfoById(1234, (err, result) => {
      if (err) { return done (err); }
      expect(typeof result).to.equal('object');
      expect(typeof result[0]).to.equal('object');
      expect(result.length).to.equal(4);
    });
    done();
  });
});

describe('GET Vehicle Battery Level', () => {
  beforeEach(() => {
    nock(url)
      .post('/getEnergyService')
      .reply(200, response.mockBatteryResponse);
  });

  it('Returns Battery level', (done) => {
    utils.getEnergyLevel(1234, (err, result) => {
      if (err) { return done (err); }
      expect(typeof result).to.equal('object');
      expect(typeof parseInt(result.batteryLevel.value)).to.equal('number');
    });
    done();
  });
});


describe('POST Start/Stop Engine', () => {
  beforeEach(() => {
    nock(url)
      .post('/actionEngineService')
      .reply(200, response.mockEngineResponse);
  });

  it(`Returns 'success' or 'error' for a given Action'`, (done) => {
    utils.startStopEngine(1234, 'START_VEHICLE', (err, result) => {
      if (err) { return done (err); }
      expect(typeof result).to.equal('object');
      expect(result.status).to.equal('success' || 'error');
    });
    done();
  });
});





