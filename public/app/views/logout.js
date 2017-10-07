angular.module('logOutController', [])
.controller('logOut',function($scope, $http) {


  $scope.logOutt = function() {
      console.log("hhhhhhhhhhhhhhhhh")

    
    $http.post("/logout")
      .then(function (err) {
        if(err){
        console.log(err)
        }
      })
  }

});