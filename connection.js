/* 	@author aditya gautam
	Here inside create pool just add your mysql dependencies 
	#your host name in host eg localhost,
	#your mysql dataBase name in database eg Beer
	#your mysql userid in user id
	#your mysql password in Password
	and you are good to go
*/ 

var mysql = require('mysql');

var conn = mysql.createPool({
	connectionLimit: 100,
	host: 'hostName',
	user: 'userId',
	password: 'password',
	database: 'beer',
	debug    :  false,
	queueLimit: 30,
	acquireTimeout: 1000000
});
module.exports = conn;
