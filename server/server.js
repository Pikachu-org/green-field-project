var express = require('express');
var db=require('../database')
var request = require('request')
var app = express();
var bodyparser=require('body-parser')
var path=require('path');
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname, "../")));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

var apikey = '6588039-5f30a9cbc3e4c9743f4ceaf57';
//accept the request from client on search
app.post('/Search',urlencodedParser, function (req, res) {
  // TODO
    // console.log(req.body);
    //get the images from api by key and the data that client requested
  var options = {
    url:'https://pixabay.com/api/?key=6588039-5f30a9cbc3e4c9743f4ceaf57&q='+req.body.data +'=photo', 
  method:'GET',
 headers: {
    'User-Agent': 'mmmmmmmm',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
  }
 };
 //if happend error send 404
request(options,function(err,result,body){
  if(err){
    res.send('404')
  }
  //parse the bodey to make it oboj 
   var x=JSON.parse(body)
   //console.log(x.hits)
//when i searched i checked if no data intilize the database and put the images that i searched in the database
db.find({}, function(err, data){
  if (data.length === 0){
    console.log('hi')
    var dbase = new db ({
  url:body
}).save(function(err,dad){
  if(err){ console.log(err)}

})
//else find the first one and update the new result 
  } else {db.findOneAndUpdate({},{url : body}, function(err,data){} )}
})
  // send x  to js component to use it
      res.json(x.hits);
      // console.log(x);
 })
 });
//get the videos from api by key and the data that client requested
app.post('/Searchvideo',urlencodedParser, function (req, res) {
  // TODO

    // console.log(req.body);
  var options = {
    url:'https://pixabay.com/api/videos/?key=6588039-5f30a9cbc3e4c9743f4ceaf57&q='+req.body.data +'', 
  method:'GET',
 headers: {
    'User-Agent': 'mmmmmmmm',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
  }


 };
request(options,function(err,result,body){
  if(err){
    res.send('404')
  }
   var x=JSON.parse(body)

  //console.log(x.hits[0].webformatURL)
      //res.send(x.hits[0].webformatURL);
      // console.log(x.hits.length)
      //to send it to js component
      res.json(x.hits);
      // console.log(x);
})
 
});

//get the the previous images from database 
app.get('/previous', function(req, res){

  //find just one record
db.findOne({},function(err,dad){
  if(err){ console.log(err)}
    //console.log(dad.url)
  //parse the data in the database
  var x=JSON.parse(dad.url)
  console.log(x.hits)
  //send the data to client
 res.json(x.hits)
})


});



/////////////////////////
// var insa = new db ({
//  url:'www.Mazen.com'
// }).save(function(err,dasd){
//  if(err){ console.log(err)}
// })
//////////////////////
var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);

});


