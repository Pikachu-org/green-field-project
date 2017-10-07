var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var UserSchema = new Schema({
  username: {type: String, lowercase: true, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, lowercase: true, required: true, unique: true},
  url: {type: String}

})

UserSchema.pre('save', function(next){
var user = this;
bcrypt.hash(user.password, null, null, function(err, hash){
  if(err) return next(err);
  user.password = hash;
  next();

  })

});

// here we are creating a method to compare the passwords when the user tries to login, the methods expresses the functions we'll create to enable us to authenticate. 
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
    // the first password is the one that comes from the user when they login, the second one is the one that is taken from the usersDB that is entered when registering.
}


module.exports = mongoose.model('User', UserSchema);
