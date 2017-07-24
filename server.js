var express = require('express');
var mongoose = require('mongoose');
var app = express();

var listingRoute = require('./routes/listingRoute');

mongoose.connect('mongodb://localhost:27017/realestate');

app.use(express.static('public'));

app.use('/listing', listingRoute);

app.listen(3000, function() {
  console.log('listening on 3000');
});
