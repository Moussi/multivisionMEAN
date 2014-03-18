var mongoose = require('mongoose');
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
        username: String
    });

    var User=mongoose.model('User',userSchema);

    User.find({}).exec(function (err,collection) {
    	if(collection.length === 0)
    	{
    	User.create({firstName: 'Moussi',lastName: 'Aymen',username: 'moussi'});
    	}
    }
    	);

}