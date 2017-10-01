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
    
    }

});
      // setTimeout(function(){
        console.log(y.dd)
      // }, 3000)
y.url = y.dd.webformatURL
  }
    },
    template: `
    <!DOCTYPE html>
    <html>
    <head>
      <title></title>
    </head>
    <body>
  <label for="fname">Your Search</label>
<input type="text" name="searched" ng-module = "input" id="sr"/>
    <button ng-click="$ctrl.btn()" class="button button2">Submit Searched</button>

<div ng-repeat=" image in $ctrl.dd" >
 
 <img src="{{image.webformatURL }}" />

 
  </div>
    </body>
    </html>

    `
  })