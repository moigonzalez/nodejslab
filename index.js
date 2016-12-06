var express = require('express');
var settings = require('./settings');
var routes = require('./routes/router');

var app = express();

app.set('view engine', 'twig');

app.set("twig options", {
    strict_variables: false
});

var server = app.listen(settings.PORT);

app.use(routes);
