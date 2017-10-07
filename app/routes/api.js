var User = require('../models/user')



var request = require('request')
var bodyparser=require('body-parser')
var path=require('path');
var urlencodedParser = bodyparser.urlencoded({ extended: false })



// app.get('/',function(req,res){
// 	res.send('hello idiot Abeer');

// })

module.exports = function(router){
    
//User Registration Route:
    
router.post('/users', function(req, res){
	console.log(req.body)
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;

	if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == ''){
		//res.send('Ensure Email, Username and Password were provided!')
		res.json({success: false, message: 'Ensure Email, Username and Password were provided!' })

	}else{
		user.save(function(err){ //now that the data has passed, we need to make sure there are no conflicts in creating the user:
				if(err){
					//res.send('username o email already exists!');
					res.json({success: false, message: 'username or email already exists!'});
				} else {
					//res.send('user created!')
					res.json({success: true, message: 'user created!'});
					//cause we only want to see if the registration succeeded or not we don't need to display all the information in the response,
					// so we created the json object to pass only what we want.
					
			}
		});
	}

});

//User Login Route:
    

   
return router;
}
