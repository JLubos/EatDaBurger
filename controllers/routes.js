//Dependancies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req,res){
	burger.all(function(burger_data){
		res.render('index',{burger_data});


	})
	
})

//put route  to update burger
router.put('/burgers/update', function(req,res){
	burgers.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

//post route to create a burger
router.post('/burgers/create', function(req, res){
	burger.create(req.body.burger_name, function(result){
		res.redirect('/');
	})
})

module.exports = router;