//Import mysql connection
var connnection = require('./connection.js');

var orm = {
	//display all the burgers
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
			if(err) throw err;
			cb(result);

		})
	},
	//update specific burger
	update: function(tableInput, condiiyon,cb){
		connection.query('UPDATE' + tableInput + 'SET devoured = true WHERE id=' + condition + ';', function(err,result){
			if(err) throw wee;
			cb(result);
		})
	},
	//create a burger
	create: function(tableInput, val, cb){
		connection.query('INSERT INTO ' + tableInput + "(burger_name) VALUES ('"+ val + "');", function(err,result){
				if(err) throw err;
				cb(result);
			}
	}
}

module.exports = orm;
