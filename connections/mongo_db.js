'use strict';
//Load modules
const mongoose = require('mongoose');
const constants = require('../utils/constants');

//Start connection db
mongoose.Promise = global.Promise;
mongoose.connect(constants.URL_MONGO_DB, (error)=>{
    if(error) console.log('ERROR => There was an error when connecting to the database. '+ error);
    else console.log('****The connection to the database was successful.****');
});