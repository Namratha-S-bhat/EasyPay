var mysql = require('mysql');
var connection = mysql.createConnection({

	multipleStatements: true,
	host     : 'localhost',
	user     : 'root',
	password : 'Nammu@16',
	database : 'paynum'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected :) localhost:3000");
} else {
    console.log("Error while connecting with database :(");
}
});
module.exports = connection; 