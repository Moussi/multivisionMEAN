var mongoose = require('mongoose'),
    crypto=require('crypto');
//connect To database
module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error ...'));
    db.once('open', function callback() {
        console.log('multivision db conected');
    });
    //Create User Schema
    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        avatar:String,
        salt:String,
        hashed_pwd:String,
        roles:[String]
    }); 

    //add methods to our userSchema !
    userSchema.methods={
        authenticate:function (passwordToMatch) {
          return hashPWD(this.salt,passwordToMatch)=== this.hashed_pwd;
        }
    }

    var User=mongoose.model('User',userSchema);

    User.find({}).exec(function (err,collection) {
    	if(collection.length === 0)
    	{
            var salt=createSalt();
            var hash=hashPWD(salt,'moussi');
    	User.create({firstName: 'Moussi',lastName: 'Aymen',username: 'moussi',avatar:"http://www.gravatar.com/avatar/1e9b53930c309b0003d11a90673a5717.png",salt:salt,hashed_pwd:hash,roles:['admin']});
    	var salt=createSalt();
            var hash=hashPWD(salt,'malek');
        User.create({firstName: 'Malek',lastName: 'Malek',username: 'malek',avatar:"http://www.gravatar.com/avatar/1e9b53930c309b0003d11a9067235717.png",salt:salt,hashed_pwd:hash,roles:[]});
        
        }
    }
    	);

}

function createSalt () {
    return crypto.randomBytes(128).toString('base64');
}

//create hashed password
function hashPWD (salt,pwd) {
   var hmac = crypto.createHmac('sha1',salt);
   return hmac.update(pwd).digest('hex');  
}