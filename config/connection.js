//Set up mysql/database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1Legend#',
	database: 'burgers_db'
})

//Connecting
connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id: " + connection.threadid)
});


// Export mysql connection
module.exports = connection;