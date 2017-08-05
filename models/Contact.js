const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
  fullName : String,
  phone : String,
  image : String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Contact', contactSchema );