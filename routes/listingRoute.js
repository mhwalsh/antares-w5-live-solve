var router = require('express').Router();
var Listing = require('../models/listings');

router.get('/', function(req, res) {
  console.log('inside the listing get');
  Listing.find().then(function(listingRoute) {
    res.send(listingRoute);
  });
});

module.exports = router;
