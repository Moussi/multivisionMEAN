
module.exports=function(app)
{
app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
    //res.sendfile('partials/'+req.params.partialPath);
});
app.get('*', function(req, res) {
    res.render('index');
    //res.sendfile('index');
});
}
