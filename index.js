var express = require('express');
var settings = require('./settings');
var routes = require('./routes/router');

var app = express();

app.set('view engine', 'twig');

app.set("twig options", {
    strict_variables: false
});

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/twig', express.static(__dirname + '/node_modules/twig/'));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
	res.locals.static_files_prefix = settings.STATIC_FILES_PREFIX;
	res.locals.rendered_posts_ep = settings.RENDERED_POSTS_EP;
	next();
});

var server = app.listen(settings.PORT);

app.use(routes);