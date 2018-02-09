var express = require('express');
var router = express.Router();
/* @author aditya gautam
the model consists of the application logic for get, create, update or delete 

the routes will first confirm that whether you are an authentic user or not and then 
it will proceed with the CRUD operation 
*/ 
var model = require("../model/indexModel");

/* @author aditya gautam
get request to get the list of all beer available in mysql database 

Here model.getPermission ensures that or not you are an authentic user and then 
it proceeds with CRUD operation

Hence your request must contain header with 'Authorization' feild  set to authentication key
which is your auth key
*/
router.get('/', function(req, res, next) {
	model.getPermission(req.headers ,function(response){
		if(response[0] == null){
			res.send({
				error 	: 'sorry you dont have access',
				data  	: [],
				success	: 0,
				status 	: 200
			})
		}
		else{
			model.getAllBeer("",function(response){
				res.send(response);
			});
		}
	})
	
});

/* @author aditya gautam
 post request to insert a list of beer available in mysql database 
	the post request must be made in application/json format
	with headers containing "Authorization" feild set to authentication key in all requests
 */
router.post('/insert',function(req,res,next) {
	model.getPermission(req.headers ,function(response){
		if(response[0] == null){
			res.send({
				error 	: 'sorry you dont have access',
				data  	: [],
				success	: 0,
				status 	: 200
			})
		}
		else{
			model.insertBeer(req.body ,function(response){
				res.send(response);
			});
		}
	})
})
/* @author aditya gautam
 post request to update a beer available in mysql database using beer id*/
router.post('/update',function(req,res,next) {
	model.getPermission(req.headers ,function(response){
		if(response[0] == null){
			res.send({
				error 	: 'sorry you dont have access',
				data  	: [],
				success	: 0,
				status 	: 200
			})
		}
		else{
			model.updateBeer(req.body ,function(response){
				res.send(response);
			});
		}
	})
})

/* @author aditya gautam
 post request to delete a beer available in mysql database using beer name*/
router.post('/delete',function(req,res,next) {
	model.getPermission(req.headers ,function(response){
		if(response[0] == null){
			res.send({
				error 	: 'sorry you dont have access',
				data  	: [],
				success	: 0,
				status 	: 200
			})
		}
		else{
			model.deleteBeer(req.body ,function(response){
				res.send(response);
			});
		}
	})
})

module.exports = router