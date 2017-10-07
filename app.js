var User = require('./app/models/user')
var express = require('express');
var app = express();
var session = require('express-session')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var router = express.Router()
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); //so our frontend will have access to the publuic folder and everything in it.
app.use('/api',appRoutes); // to destinguish between backend and frontend routes we added api to the backend url
app.use(session({secret: "Shh, its a secret!"}));
var userr ;


//http://localhost:3000/
// mongoose.connect('mongodb://localhost:27017/green');
mongoose.connect('mongodb://mazendb:4462097Mm@ds151544.mlab.com:51544/mazendb', function (err){
// mongoose.connect('mongodb://localhost:27017/usersdb', function (err){
	if(err){
		console.log('Not connected to the Database:' + err);
	}
	else{
		console.log('Successfully connected to MongoDB');
	}

});




app.get('/previous', function(req, res){
  
    //find just one record
  
    
  User.findOne({username: userr},function(err,dad){
    if(err){ console.log(err)}
      console.log(dad.url)
    //parse the data in the database
    var x=JSON.parse(dad.url)
    // console.log(x.hits)
    //send the data to client
   res.json(x.hits)
  })
  
  
  });

  app.post('/logout', function(req, res){
    console.log(req.session)
    req.session.destroy(function(err) {
      console.log(err)
    })
    userr = null;
    console.log(req.session)
  })

//the star here means that no matter what the user types, feed them this html page.
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html')) // to send the user the file in the path that is created by joinging __dirname and the path of the index.html in the folders.

})


// login authentication:
app.post('/authenticate', function(req, res){
  User.findOne({username: req.body.username}).select('email username password').exec(function(err, user){
      if(err){
          throw err;
      };
      console.log(req.body.password)
      if(!user){
              res.json({success: false, message: "user doesn't exist!"});
      }
      else if(user){
          if(req.body.password){
          var validPass = user.comparePassword(req.body.password);
          }else{
              res.json({success: false, message: "No Password Provided!"})
          }
          if(!validPass){
              res.json({success: false, message: "incorrect password"})
          
          }else{
            req.session.regenerate(function(err) {
              // will have a new session here
              userr = req.body.username;
            })
            res.redirect('/home');
          }
      }
  });
});



var apikey = '6588039-5f30a9cbc3e4c9743f4ceaf57';

app.post('/Search', function (req, res) {
  console.log(req.session)
  console.log("==================================================================")
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
  // console.log(x.hits[0].webformatURL)
  		// res.send(x.hits[0].webformatURL);
      // console.log(x.hits.length)
    //   to send it to js component

    User.find({}, function(err, data){
      if (data.length === 0){
        console.log('hi')
        var user = new User ({
      url:body
    }).save(function(err,dad){
      if(err){ console.log(err)}
    
    })
    //else find the first one and update the new result 
      } else {User.findOneAndUpdate({username : userr},{url : body}, function(err,data){} )}
    })




      res.json(x.hits);
      console.log(x);

  });
 
}); 



app.post('/Searchvideo', function (req, res) {
	console.log(req.body.data)
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
  console.log(x.hits[0].webformatURL)
  		// res.send(x.hits[0].webformatURL);
      console.log(x.hits.length)
    //   to send it to js component
      res.json(x.hits);
      console.log(x);

  })
 
}); 





var port = process.env.PORT || 3000;
app.listen(port, function (){
	console.log('listening to App server')
});