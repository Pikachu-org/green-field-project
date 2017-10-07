angular.module('appRoutes',['ngRoute', 'userControllers', 'searchController'])

.config(function($routeProvider, $locationProvider){  //anything used inside config needs to be injected here.

	$routeProvider

	.when('/home', {

		templateUrl: 'app/views/pages/home.html', // this is the default route
		controller: 'searcher'
	}) //when the user type / provide the file needed


	.when('/', {
		templateUrl: 'app/views/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'register' //nickname for the controller we use in the application

	})
    
    .when('/login', {
		templateUrl: 'app/views/pages/users/login.html'
		
	})
	
	.when('/logout', {
		templateUrl: 'app/views/pages/users/login.html'
		
	})
	

	.otherwise({redirectTo: '/home'}); // whenever the user types something else redirect them to the home page

	$locationProvider.html5Mode({
  	  enabled: true,
  	  requireBase: false
	});

})

// angular nobase to get rid of the # when sending the route to angular routes:



