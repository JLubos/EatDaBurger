//Set up mysql/database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'rootpassword',
	database: 'burgers_db'
})

//Connecting
connection.connect(function(err){
	if (err) console.log(err);
	console.log("connected as id: " + connection.threadId)
});


// Export mysql connection
module.exports = connection;