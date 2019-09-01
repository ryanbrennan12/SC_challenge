const axios = require('axios');
const moxios = require('moxios');
//My axios instance
const http = require('../utils').http;
const expect = require('chai').expect;
const utils = require('../utils');


describe('Users Services', () => {
  beforeEach(() => {
    moxios.install(http)
  })

  afterEach(() => {
    moxios.uninstall(http)
  })

  it('/GETS vehicle info by id', async () => {

    const expectedAPIresponse = {
      "service": "getVehicleInfo",
      "status": "200",
      "data": {
        "vin": {
          "type": "String",
          "value": "123123412412"
        },
        "color": {
          "type": "String",
          "value": "Metallic Silver"
        },
        "fourDoorSedan": {
          "type": "Boolean",
          "value": "True"
        },
        "twoDoorCoupe": {
          "type": "Boolean",
          "value": "False"
        },
        "driveTrain": {
          "type": "String",
          "value": "v8"
        }
      }
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith(expectedPosts) //mocked response
    });

      utils.getVehicleInfoById(1234, (results) => {
      expect(results).equal(expectedAPIresponse);
    });

  });
});




