var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
  cost: Number,
  sqft: Number,
  city: String
});

// listings as the collection
var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
