var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');



// ROUTE => GET : ALL TRIPS
// **** A RAJOUTER => LA CONDITION SUR LA DATE ****
router.get('/:departure/:arrival', (req, res) => {
    Trip.find({departure: req.params.departure, arrival: req.params.arrival}).then(tripsFounded => {
        res.json({allTripsFounded: tripsFounded})
    })
})







module.exports = router;
