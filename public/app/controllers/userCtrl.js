angular.module('userControllers',[])

.controller('regCtrl', function($http, $location){ //whatever we use inside we need to pass it here.

    var app = this;
    
	 this.regUser = function(regData) {
		
		//console.log(this.regData); //the data that we will save in the database

		//this is a request from angular that enables us to work on backend with http requests, post, get ...
		// we want to know if the registration worked: .then

		$http.post('/api/users', this.regData).then(function(data){
            app.errorMsg = false; //this here is to prevent the error message form showing when there is no error, it will read it as false from here but if there was an error, once it reaches the else part it will fetch the error from the data.data.success and change it to true the it will show the error.
			console.log("form submitted");
			
            if(data.data.success){ //this here is to get the message if the registration succeeded and the user is created.
            //this message will be shown to user later in the "div alert". 
                app.successMsg = data.data.message;
                // to redirect the user to the home page after registering:
                $location.path('/');
            }else{
                app.errorMsg = data.data.message; //this here is for when the registration is not succeeded. 
            }
            
		})


	};

});



//http://localhost:3000/api/users
