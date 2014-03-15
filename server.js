var express = require('express'),mongoose=require('mongoose'),stylus=require('stylus');
	

var env=process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var app=express();

// Configuration
app.configure(function() {
	app.set('views',__dirname+'/server/views');
	//app.set('view engine','jade');
	app.engine('.html', require('ejs').__express);
	app.set('view engine', 'html');

	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(__dirname+'/public'));
	app.use(stylus.middleware(
{
	src:__dirname + '/public',
	compile:compile
}		));
	
});

function compile (str,path) {
	return stylus(str).set('filename', path);
}

app.get('/partials/:partialPath',function  (req,res) {
res.render('partials/'+req.params.partialPath);
//res.sendfile('partials/'+req.params.partialPath);
});

app.get('*',function(req,res) {
	res.render('index');
	//res.sendfile('index');
});


if (env === 'development') {

mongoose.connect('mongodb://moussi:moussi@localhost/multivision');

}else
{
	mongoose.connect('mongodb://moussi:moussi@ds033669.mongolab.com:33669/moussimultivision');
}
var db=mongoose.connection;
db.on('error', console.error.bind(console,'connection error ...')) ;
db.once('open',function callback () {
	console.log('multivision db conected');
}); 

 

var port= process.env.PORT || 8888;
app.listen(port);
console.log('Listening on port '+port+' ...')

