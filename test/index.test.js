const expect = require('chai').expect;
const nock = require('nock');

const utils = require('../utils/index.js');
const response = require('./response');

describe('GET User Vehicle Info', () => {
  const url = 'http://gmapi.azurewebsites.net/getVehicleInfoService';
  beforeEach(() => {
    nock(url)
      .post('')
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



