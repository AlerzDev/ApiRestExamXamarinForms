'use strict';

//Modules
const express = require('express');
const bodyParse = require('body-parser');
const constants = require('./utils/constants');

const app = express();
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

//Load database
require('./connections/mongo_db');

//Load routes
const contactRoutes = require('./routes/contacts');


//Configure headers
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Allow-Request-Method' );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Load base routes
app.use('/api', contactRoutes);

//Running API
app.listen(constants.PORT, ()=>{
    console.log('************API running in the PORT: '+constants.PORT+'*************');
});