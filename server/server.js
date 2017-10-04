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

app.post('/Search',urlencodedParser, function (req, res) {
  // TODO
    console.log(req.body);
  var options = {
    url:'https://pixabay.com/api/?key=6588039-5f30a9cbc3e4c9743f4ceaf57&q='+req.body.data +'=photo', 
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
      console.log(x.hits.length)
      //to send it to js component
      res.json(x.hits);
      console.log(x);
 })
 });

app.post('/Searchvideo',urlencodedParser, function (req, res) {
  // TODO
    console.log(req.body);
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
      console.log(x.hits.length)
      //to send it to js component
      res.json(x.hits);
      console.log(x);
})
 
});

// app.post('/add', function(req, res){
// var dbase = new db ({
//   url:req.body.data
// }).save(function(err,dad){
//   if(err){ console.log(err)}

// })
// //res.redirect('/')
// });

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


