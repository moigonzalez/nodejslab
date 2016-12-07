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

var server = app.listen(settings.PORT);

app.use(routes);