const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');
const loggedInUsers = require('../user-service/models/loggedInUsers');
// let HOST = 'http://15.206.70.154';
let HOST = 'http://localhost';
let PORT = 5001;

router.all('/api/:serviceType/*', (req, res) => {
  if(req.params.serviceType === 'user' || req.params.serviceType === 'backoffice') {
    PORT = 5001;
  } else if(req.params.serviceType === 'media') {
    PORT = 5002;
  } else {
    res.send('Service not found...')
  }
  console.log(HOST + ':' + PORT + req.url);
  console.log(`${req.method} --> ${req.url} --> ${new Date().toString().split(' ')[4]}`);
  
  axios({
    method: req.method,
    url: HOST + ':' + PORT +  req.url,
    headers: req.headers,
    data: req.body
  }).then(response => {
    res.send(response.data)
  }).catch(err => console.log(err.message))

});

module.exports = router;