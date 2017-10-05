angular.module('app', [])
  .component('app', {
    controller: function($scope) {
     
     
      $scope.photo;
      $scope.stat;
      $scope.vid;
      $scope.prev;

      //ajax request for search images and hide videos and static images
      this.btnimag=function(){
         this.array = [];
          var y=this;
        $scope.vid = false;
         $scope.photo=true;
         $scope.stat=true;
         $scope.prev = false;
      var elem=document.getElementById('sr').value;
      console.log(elem)
      $.ajax({
    async: false,
    url: "/Search",
    method: "POST",
    data: {data:elem},
    success:function(data){
      for(var i=0;i<data.length;i++){
        y.array.push(data[i]);
      }
    }
});
}
//ajax request for search video and hide images and previos and static images
     this.btnvideo=function(){
        this.array = [];
        var y=this;
      $scope.vid = true;
      $scope.photo=false;
      $scope.stat=true;
      $scope.prev = false;
      var elem=document.getElementById('sr').value;
      console.log(elem)
      $.ajax({
    async: false,
    url: "/Searchvideo",
    method: "POST",
    data: {data:elem},
    success:function(data){
      for(var i=0;i<data.length;i++){
        y.array.push(data[i]);
      }
    }
});


}
//ajax request for button previous search images and hide the video and images and  static images
this.btnprv=function(){
    this.array = [];
  $scope.prev = true;
  $scope.stat=true;
  $scope.photo=false;
  $scope.vid = false;
      
      $.ajax({
    async: false,
    url: "/previous",
    method: "GET",
    //dataType: "json",
    success:function(data){
      console.log(data[0])
      for(var i=0;i<data.length;i++){
        y.array.push(data[i]);
      }
    }
})

   }},
    template: `
    <!DOCTYPE html>
    <html>
    <head>
      <title></title>
    </head>
    <style>
   
    .maz{
      float:left;
      position:relative;
      margin-left:30px;
    }
    
    .lk{
   
      position: absolute;
    right: 20px;
    }
    .btn btn-info{
       position: absolute;
    right: 20px;

    }
}
   
    </style>
    <body>
<!---------------------------this for header----------------------->
<div class="container">
  <div class="page-header">
    <h1>Pika Search </h1>      
  </div>
  <p>High Quality images&videos</p>      
       
</div>

<!---------------------this buttonstextbox--------------------->
  <button ng-click=$ctrl.btnprv()  class="btn btn-info"> Show Previous </button>
  <div class="form-group">

<input type="text" class="form-control"  name="searched" ng-module = "input" id="sr" />
    </div>

<div>
<button ng-click=$ctrl.btnimag() class="btn btn-primary btn-block">image</button> 
<button ng-click=$ctrl.btnvideo() class="btn btn-primary btn-block">videos</button>
</div>

<!--------------this for show images------------------------------------->
  <div  ng-show="photo" >
 
 <div class="maz" target="_blank"  ng-repeat=" image in $ctrl.array" >

<a href={{image.webformatURL}}> <img src="{{image.webformatURL }}  alt="Lights" width="300" height="200"  /></a><br>
<button class="btn btn-info" > fav</button>
<button class="lk"  ><span class="glyphicon glyphicon-thumbs-up"></span></button>
<br>



  <div>Likes:{{image.likes}}</div>
  
  </div>
</div>

<!-----------------------this for show privious search images-------------->
<div  ng-show="prev" >
 
 <div class="maz" target="_blank"  ng-repeat=" image in $ctrl.array" >

<a href={{image.webformatURL}}> <img src="{{image.webformatURL }}  alt="Lights" width="300" height="200"  /></a><br>
<button class="btn btn-info" > fav</button>
<button class="lk"  ><span class="glyphicon glyphicon-thumbs-up"></span></button>

<br>



  <div>Likes:{{image.likes}}</div>
  
  </div>
</div>

<!-----------------this for show video---------------------------------->
<div ng-show="vid" class="maz" target="_blank" ng-repeat=" video in $ctrl.array" >

<a href={{video.videos.large.url}} autoplay > <video src="{{video.videos.large.url}}"  alt="Lights" width="300" height="200"  autoplay controls muted></video></a>
  </div>

<!------------this for static picture-------------------------------------->

<div ng-hide ="stat">
<img src="http://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-mammals_0.jpg" alt="Lights" width="333" height="200"/>
<img src="https://wh1k8zidop.inscname.net/big/1078057.jpg?v=1493075154" width="330" height="200"/>
<img src="http://ingridkuhn.com/themes/petz/img/service1.jpg" width="330" height="200"/>
<img src=http://fotoartmagazine.gr/wp-content/uploads/2014/01/cherry-blossoms-night-japan.jpg alt="Lights" width="333" height="200"/>
<img src=https://www.wildlifearchives.com/wp-content/uploads/2017/05/hyperion-tree-14953962628nkg4.jpg alt="Lights" width="330" height="200"/>
<img src="http://i.dailymail.co.uk/i/pix/2015/04/21/10/27CE60B000000578-3042181-image-a-12_1429609310532.jpg" alt="Lights" width="333" height="200"/>
<img src="http://images.nationalgeographic.com/wpf/media-live/photos/000/910/overrides/hikers-baobab-trees-madagascar_91080_990x742.jpg" alt="Lights" width="330" height="200"/>
<img src="https://img.myswitzerland.com/681916/573" alt="Lights" width="333" height="200"/>

</div>

    </body>
    </html>

    `
  })