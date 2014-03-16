 var express = require('express'),stylus=require('stylus');


 module.exports = function(app,config) {
     function compile(str, path) {
         return stylus(str).set('filename', path);
     }
     // Configuration
     app.configure(function() {
         app.set('views', config.rootPath + '/server/views');
         //app.set('view engine','jade');
         app.engine('.html', require('ejs').__express);
         app.set('view engine', 'html');
         app.use(express.logger('dev'));
         app.use(express.bodyParser());
         app.use(express.static(config.rootPath + '/public'));
         app.use(stylus.middleware({
             src: config.rootPath + '/public',
             compile: compile
         }));
     });
 }