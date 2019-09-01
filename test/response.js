const mockVehicleResponse = {
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

const mockSecurityResponse = {
  "service": "getSecurityStatus",
  "status": "200",
  "data": {
    "doors": {
      "type": "Array",
      "values": [
        {
          "location": {
            "type": "String",
            "value": "frontLeft"
          },
          "locked": {
            "type": "Boolean",
            "value": "False"
          }
        },
        {
          "location": {
            "type": "String",
            "value": "frontRight"
          },
          "locked": {
            "type": "Boolean",
            "value": "True"
          }
        },
        {
          "location": {
            "type": "String",
            "value": "backLeft"
          },
          "locked": {
            "type": "Boolean",
            "value": "False"
          }
        },
        {
          "location": {
            "type": "String",
            "value": "backRight"
          },
          "locked": {
            "type": "Boolean",
            "value": "True"
          }
        }
      ]
    }
  }
}

const mockBatteryResponse = {
  "service": "getEnergy",
  "status": "200",
  "data": {
    "tankLevel": {
      "type": "Number",
      "value": "30.2"
    },
    "batteryLevel": {
      "type": "Null",
      "value": "60.6"
    }
  }
}


const mockEngineResponse = {
  "service": "actionEngine",
  "status": "200",
  "actionResult": {
  "status": "EXECUTED"
  }
}


  module.exports = {
    mockVehicleResponse,
    mockSecurityResponse,
    mockBatteryResponse,
    mockEngineResponse
  };

