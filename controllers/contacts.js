const Contact = require('../models/contact');

function contacts(req, res) {
  Contact.find({}, (error, contacts)=>{
    if (error) {
      res.status(500).send({error: 'Error find'});
    } else {
      res.status(200).json(contacts);
    }
  });
}

module.exports = {
  contacts
}