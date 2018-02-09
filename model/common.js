var express = require('express');
var http = require('http');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../connection');

/*@author aditya gautam
	the query handler function is used for quering with the database
	it takes three parameters connection is the database credentials from connection.js file
	the statement is the mysql statement that you want to execute on mysql server
	and lastly the callback which returns the output response to the calling function.
*/ 

module.exports = {
	queryHandler: function(connection, statement, callback) {
	    try {
	        connection.query(statement, function(err, res) {
	            var response = {};
	            if (err) {
	                callback(response = {
	                    'success': 0,
	                    'status': 500,
	                    'error': "error : " + err
	                });
	            } else {
	                callback(response = {
	                    'success': 1,
	                    'status': 200,
	                    'data': res
	                });
	            }
	        });
	    } catch (exc) {

	        callback({
	            'success': 0,
	            'data': 'There was an internal error. Please try again later.',
	            'status': 0,
	            'error': exc
	        });
	    }
	}
}