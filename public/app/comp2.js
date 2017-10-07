angular.module('searchController', [])
.controller('searcher',function($scope, $http) {

//     $scope.dd = [];
//     $scope.btn=function(){
//     var elem=document.getElementById('sr').value;
//     console.log(elem)
//   //   $http({
//   // async: false,
//   // url: "http://localhost:3000/api/Search",
//   // method: "POST",
//   // data: {data: elem},
//   // headers: {
//   //   'Content-Type': 'application/x-www-form-urlencoded'
//   // }
//   // }).then(function(response){
//   //   console.log(response)
//   //   for(var i=0;i<response.length;i++){
//   //     $scope.dd = y.dd.push(response[i]);
//   //   }
//   // }, function(error) {
//   //   console.log(error.data)});
  
//   $http.post("/Search", {data: elem})
//   .then(function (data) {
//     console.log($scope.dd)
//     $scope.dd = [];
//     for(var i=0;i<data.data.length;i++){

//           $scope.dd.push(data.data[i]);
//         }
//   })
  
//    }
// });
//http://localhost:3000/api/users
      $scope.array = [];
      $scope.photo;
      $scope.stat;
      $scope.vid;
      $scope.prev;

  $scope.btnimag = function() {

    //ajax request for search images and hide videos and static images
       $scope.vid = false;
        $scope.photo=true;
        $scope.stat=true;
        $scope.prev = false;
    var elem=document.getElementById('sr').value;
    console.log(elem)
    $http.post("/Search", {data: elem})
      .then(function (data) {
        console.log($scope.array)
        $scope.array = [];
        for(var i=0;i<data.data.length;i++){
    
              $scope.array.push(data.data[i]);
            }
      })
  }

  //ajax request for search video and hide images and previos and static images

  $scope.btnvideo = function() {
    
        //ajax request for search images and hide videos and static images
        $scope.array = [];
        $scope.vid = true;
        $scope.photo=false;
        $scope.stat=true;
        $scope.prev = false;
        var elem=document.getElementById('sr').value;
        console.log(elem)

        $http.post("/Searchvideo", {data: elem})
          .then(function (data) {
            $scope.array = [];
            for(var i=0;i<data.data.length;i++){
        
                  $scope.array.push(data.data[i]);
                }
                console.log($scope.array)
          })
      }



  //ajax request for button previous search images and hide the video and images and  static images

    $scope.btnprv=function(){
    $scope.array = [];
    $scope.prev = true;
    $scope.stat=true;
    $scope.photo=false;
    $scope.vid = false;

    $http.get("/previous")
    .then(function(data) {
      $scope.array = [];
      console.log("====================")
      console.log(data)
      for(var i=0;i<data.data.length;i++){
        $scope.array.push(data.data[i]);
      }
      console.log($scope.array)
    });

    }
  //   $.ajax({
  // async: false,
  // url: "/previous",
  // method: "GET",
  // //dataType: "json",
  // success:function(data){
  //   console.log(data[0])
  //   for(var i=0;i<data.length;i++){
  //     $scope.$ctrl.array.push(data[i]);
  //   }
  // }
  // })

  



      
    });

    


  
    

