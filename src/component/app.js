angular.module('app', [])
  .component('app', {
    controller: function($scope) {
      this.array = [];
      var y=this;
      $scope.change;
      $scope.stat;
      this.btn=function(){
         $scope.change=true;
         $scope.stat=true;
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

     this.btn2=function(){
       $scope.image=false;
       $scope.stat=true;
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
    
}
   
    </style>
    <body>

<div class="container">
  <div class="page-header">
    <h1>Pika Search </h1>      
  </div>
  <p>High Quality images&videos</p>      
       
</div>
  
  <div class="form-group">

<input type="text" class="form-control"  name="searched" ng-module = "input" id="sr" />
    </div>

<div>
<button ng-click=$ctrl.btn() class="btn btn-primary btn-block">image</button> 
<button ng-click=$ctrl.btn2() class="btn btn-primary btn-block">videos</button>
</div>


  <div  ng-show="change" >
 
 <div class="maz" target="_blank"  ng-repeat=" image in $ctrl.array" >

<a href={{image.webformatURL}}> <img src="{{image.webformatURL }}  alt="Lights" width="300" height="200"  /></a><br>
<button>Add to my favorit</button>
<button class="lk"  ><span class="glyphicon glyphicon-thumbs-up"></span></button><br>

  <div class="desc">Likes:{{image.likes}}</div>
  
  </div>
</div>





<div ng-hide="change" class="maz" target="_blank" ng-repeat=" video in $ctrl.array" >

<a href={{video.videos.large.url}} autoplay > <video src="{{video.videos.large.url}}"  alt="Lights" width="300" height="200"  autoplay controls muted></video></a>
  </div>


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