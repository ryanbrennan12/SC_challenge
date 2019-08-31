const express = require('express');
const router = express.Router();
const utils = require('../utils');


// @route  GET /vehicles/:id
// @desc   get vehicle information by ID
router.get('/vehicles/:id', (req, res) => {
  const errors = {};

  utils.getVehicleInfoById(req.params.id, (vehicle) => {

    if (!Object.keys(vehicle).length) {
      errors.noprofile = 'There is no record for this vehicle';
      res.status(404).json(errors);
    }
    res.status(200).json(vehicle);
  });
});

// @route  GET /vehicles/:id/doors
// @desc   get lock status of vehicle by ID
router.get('/vehicles/:id/doors', (req, res) => {
  const errors = {};

  utils.getSecurityInfoById (req.params.id, (vehicle) => {

    if (!Object.keys(vehicle).length) {
      errors.nosecurity = 'There is no security record for this vehicle';
      res.status(404).json(errors);
    }
    res.status(200).json(vehicle);
  });
});

router.get('/vehicles/:id/battery', (req, res) => {
  const errors = {};

  utils.getBatteryLevel(req.params.id, (battery) => {
    //if no battery, check for
    console.log('I am battery', battery.batteryLevel)
    if (battery.batteryLevel === 'null') {
      console.log('tup')
    }

  })
});




module.exports = router;