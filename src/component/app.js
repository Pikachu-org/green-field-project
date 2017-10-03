angular.module('app', [])
  .component('app', {
    controller: function() {
      this.dd = [];
      var y=this;
      this.btn=function(){
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
    fw
    }

});
      // setTimeout(function(){
        console.log(y.dd)
      // }, 3000)
//y.url = y.dd.webformatURL
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
<div class="input-group-btn">

    <button ng-click="$ctrl.btn()"  class="btn btn-default" class="button button2"><i class="glyphicon glyphicon-search"></i></button>
       </div>
    </div>

  <div class="responsive">
  <div class="gallery">
 <div class="maz" target="_blank" ng-repeat=" image in $ctrl.dd" >

<a href={{image.webformatURL}}> <img src="{{image.webformatURL }} class="borderimg" alt="Lights" width="300" height="200"  /></a><br><button class="lk"  ><span class="glyphicon glyphicon-thumbs-up"></span></button><br>

  <div class="desc">Likes:{{image.likes}}</div>
  </div>
</div>

    </body>
    </html>

    `
  })