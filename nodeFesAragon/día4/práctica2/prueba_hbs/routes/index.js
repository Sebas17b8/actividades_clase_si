var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//usando handerban
router.post('/', function(req, res, next){
  res.render('mi_pagina', {nombre: 'Sebastian', carrera:'ICO'});
});

module.exports = router;
