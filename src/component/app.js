angular.module('app', [])
  .component('app', {
    controller: function($scope) {
      this.dd = [];
      var y=this;
      $scope.change;
      this.btn=function(){
         $scope.change=true;
      var elem=document.getElementById('sr').value;
      console.log(elem)
      $.ajax({
    async: false,
    url: "/Search",
    method: "POST",
    data: {data:elem},
    success:function(data){
      for(var i=0;i<data.length;i++){
        y.dd.push(data[i]);
      }
    }
});


}

     this.btn2=function(){
       $scope.image=false;
      var elem=document.getElementById('sr').value;
      console.log(elem)
      $.ajax({
    async: false,
    url: "/Search2",
    method: "POST",
    data: {data:elem},
    success:function(data){
      for(var i=0;i<data.length;i++){
        y.dd.push(data[i]);
      }
    }
});


}

    },
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
    .borderimg {
    border: 10px solid transparent;
    padding: 15px;
   
}
   
    </style>
    <body>


  
  <div class="input-group">

<input type="text" class="form-control"  name="searched" ng-module = "input" id="sr" width="30" height="200"/>
    </div>

  <div  ng-show="change" class="responsive">
  <div class="gallery">
 <div class="maz" target="_blank" ng-repeat=" image in $ctrl.dd" >

<a href={{image.webformatURL}}> <img src="{{image.webformatURL }} "class="elmimg" alt="Lights" width="300" height="200"  /></a><br><button>Add to my favorit</button><button class="lk"  ><span class="glyphicon glyphicon-thumbs-up"></span></button><br>

  <div class="desc">Likes:{{image.likes}}</div>
  </div>
  </div>
</div>
<div ng-hide="change" class="maz" target="_blank" ng-repeat=" video in $ctrl.dd" >

<a href={{video.videos.large.url}} autoplay > <video src="{{video.videos.large.url}}" alt="Lights" width="300" height="200"  autoplay controls muted></video></a>

  <div class="desc">Add a description of the image here</div>
  </div>
<div>
<button ng-click=$ctrl.btn()>image</button> 
<button ng-click=$ctrl.btn2()>videos</button>
</div>
    </body>
    </html>

    `
  })