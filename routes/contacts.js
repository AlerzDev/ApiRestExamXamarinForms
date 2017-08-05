const express = require('express');
const contactController = require('../controllers/contacts');
const api = express.Router();

//Routes for posts
api.get('/contacts', contactController.contacts);

module.exports = api;