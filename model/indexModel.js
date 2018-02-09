var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../connection');
var common = require('./common');
var connection = require('../connection');

/*@author aditya gautam
# the common variable consists of the common function which is used for interating with mysql server
# the connection variable consists of the mysql configuration such as username and password etc

*/ 

module.exports = {
	/* the getPermission function is used to check whether or the user has permission
		for CRUD Operation it takes parameters in params and sends back the response in callback
	*/ 
	getPermission: function(params, callback) {
        try {
			var statement = "SELECT * FROM `user_auth` where auth_key=?"
			var paramsVal = [params.authorization];
			var q = mysql.format(statement, paramsVal);
			common.queryHandler(connection, q, function(response) {
				if (response.success === 1) {
					response.statusCode = 200;
					callback(response.data);
				} else {
					response.status = 501;
					callback(response);
				}
			});
        } catch (exc) {
            console.log("inside catch indexModel, getType, caught exception in model: ");
            console.log(exc);
            callback({
                'success': 0,
                'data': 'There was an internal error. Please try again later.',
                'status': 0,
                'error': 'There was an internal error. Please try again later.'
            });
        }
        return;
    },
    /* 
    the getAllBeer function is used for geting the list of all beers from the mysql database
    */ 
    getAllBeer: function(params, callback) {
        try {
			var statement = "SELECT * FROM `beer` where status=1"
			var q = mysql.format(statement);
			common.queryHandler(connection, q, function(response) {
				if (response.success === 1) {
					response.statusCode = 200;
					callback(response.data);
				} else {
					response.status = 501;
					callback(response);
				}
			});
        } catch (exc) {
            console.log("inside catch indexModel, getType, caught exception in model: ");
            console.log(exc);
            callback({
                'success': 0,
                'data': 'There was an internal error. Please try again later.',
                'status': 0,
                'error': 'There was an internal error. Please try again later.'
            });
        }
        return;
    },
    /* the insertBeer function is used to insert beer in the database it takes name price and count in the params field
    	and on successful insertion it responds back the success msg in the callback
    */ 
    insertBeer: function(params, callback) {
        try {
			var statement = "INSERT INTO `beer` (`id`, `beer_name`, `beer_price`, `count`, `status`) VALUES (NULL, ?, ?, ?, 1)"
			var paramsVal = [params.beer_name ,params.beer_price ,params.count];
			var q = mysql.format(statement, paramsVal);
			common.queryHandler(connection, q, function(response) {
				if (response.success === 1) {
					callback({
						msg:"you have successfully inserted one row",
						data:[],
						statusCode:200,
						success:1
					});
				} else {
					response.status = 501;
					callback(response);
				}
			});
        } catch (exc) {
            console.log("inside catch indexModel, getType, caught exception in model: ");
            console.log(exc);
            callback({
                'success': 0,
                'data': 'There was an internal error. Please try again later.',
                'status': 0,
                'error': 'There was an internal error. Please try again later.'
            });
        }
        return;
    },
    /* the updateBeer function is used to update beer in the database it takes name ,price ,count and id in the params field
    	and on successful update it responds back the success msg in the callback
    */ 
    updateBeer: function(params, callback) {
        try {
			var statement = "UPDATE `beer` SET `beer_name` = ? ,beer_price = ?, count = ? WHERE `beer`.`id` = ?;"
			var paramsVal = [params.beer_name ,params.beer_price ,params.count ,params.id];
			var q = mysql.format(statement, paramsVal);
			common.queryHandler(connection, q, function(response) {
				if (response.success === 1) {
					callback({
						msg:"you have successfully updated one row",
						data:[],
						statusCode:200,
						success:1
					});
				} else {
					response.status = 501;
					callback(response);
				}
			});
        } catch (exc) {
            console.log("inside catch indexModel, getType, caught exception in model: ");
            console.log(exc);
            callback({
                'success': 0,
                'data': 'There was an internal error. Please try again later.',
                'status': 0,
                'error': 'There was an internal error. Please try again later.'
            });
        }
        return;
    },
     /* the deleteBeer function is used to delete beer in the database it takes name in the params field
    	and on successful deletion it responds back the success msg in the callback
    */ 
    deleteBeer: function(params, callback) {
        try {
			var statement = "DELETE FROM `beer` WHERE `beer`.`beer_name` = ?"
			var paramsVal = [params.beer_name];
			var q = mysql.format(statement, paramsVal);
			common.queryHandler(connection, q, function(response) {
				if (response.success === 1) {
					callback({
						msg:"you have successfully deleted one row",
						data:[],
						statusCode:200,
						success:1
					});
				} else {
					response.status = 501;
					callback(response);
				}
			});
        } catch (exc) {
            console.log("inside catch indexModel, getType, caught exception in model: ");
            console.log(exc);
            callback({
                'success': 0,
                'data': 'There was an internal error. Please try again later.',
                'status': 0,
                'error': 'There was an internal error. Please try again later.'
            });
        }
        return;
    }
}