var passport = require('passport');

exports.authenticate = function (req,res, next) {
	console.log('login ...');
	var auth=passport.authenticate('local',function (err,user) {
		console.log('begin authenticating...');
		if(err)
		{
			console.log('error');
			return next(err);
		}
		if(!user){
			console.log(user.username+' not found');
		 res.send({success:false});}
		req.logIn(user,function(err) {
			console.log('User  found');
			res.send({success:true, user:user});

		});

	});

	auth(req,res,next);

}