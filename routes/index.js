const express = require('express');
const router = express.Router();
const utils = require('../utils');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const axios = require('axios');

const logger = pino({ prettyPrint: { colorize: true } });
const expressLogger = expressPino({ logger });


// @route  GET /vehicles/:id
// @desc   get vehicle information by ID
router.get('/vehicles/:id', (req, res) => {
  const errors = {};

  utils.getVehicleInfoById(req.params.id, (err, vehicle) => {
    const hasRecord = !!Object.keys(vehicle).length;
    if (err || !hasRecord) {
      errors.noprofile = `There is no record for vehicle id: ${req.params.id}`;
      res.status(404).json(errors);
    } else {
      res.status(200).json(vehicle);
    }
  });
});

// @route  GET /vehicles/:id/doors
// @desc   get lock status of vehicle by ID
router.get('/vehicles/:id/doors', (req, res) => {
  const errors = {};
  const mssg =  `There is no security record for this vehicle id: ${req.params.id}`

  utils.getSecurityInfoById (req.params.id, (err, vehicle) => {
    if (err || !Object.keys(vehicle).length) {
      errors.nosecurity = mssg;
      res.status(404).json(errors);
    } else {
      res.status(200).json(vehicle);
    }
  });
});


// @route  GET /vehicles/:id/battery
// @desc   gets battery level by vehicle id
router.get('/vehicles/:id/battery', (req, res, next) => {
  const errors = {};
  const mssg = `There is no battery reading for this vehicle id: ${req.params.id}`;

  utils.getEnergyLevel(req.params.id, (err, battery) => {
    if (err || battery.batteryLevel.value === 'null') {
      errors.nobattery = mssg;
      res.status(404).json(errors);
    } else {
      res.status(200).json({ percent: battery.batteryLevel.value });
    }
  });
});

// @route  GET /vehicles/:id/fuel
// @desc   gets fuel level by vehicle id
router.get('/vehicles/:id/fuel', (req, res) => {
  const errors = {};
  const mssg= `There is no fuel reading for this vehicle id: ${req.params.id}`;

  utils.getEnergyLevel(req.params.id, (err, battery) => {
    if (err || battery.tankLevel.value === 'null') {
      errors.nofuel = mssg;
      res.status(404).json(errors);
    } else {
      res.status(200).json({ percent: battery.tankLevel.value });
    }
  });
});

// @route POST /vehicles/:id/engine
// @desc  Turns car On/Off
// @desc  Pass action into your request body as { action: "START|STOP" }
router.post('/vehicles/:id/engine', (req, res) => {
  const errors = {};
  const mssg = `Error in completing action for vehicle id: ${req.params.id}`
  let action = req.body.action;

  (action === 'START') ? action = 'START_VEHICLE' : action = 'STOP_VEHICLE';

  utils.startStopEngine(req.params.id, action, (err, result) => {
    if (err || result.status === 'error') {
      errors.noaction = mssg;
      res.status(404).json(errors);
    } else {
      res.status(200).json(result);
    }
  });
});





module.exports = router;










