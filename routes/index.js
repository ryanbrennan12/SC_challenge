const express = require('express');
const router = express.Router();
const utils = require('../utils')


// @route  GET /vehicles/:id
// @desc   get vehicle information by ID
router.get('/vehicles/:id', (req, res) => {

  utils.getVehicleInfoById(req.params.id, (vehicle) => {
    console.log(vehicle.data)
  })
});



module.exports = router;