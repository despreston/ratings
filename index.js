var express = require('express'),
    app = express(),
    parser = require('./parser'),
    controllers = require('./controllers')(app, parser),
    routes = require('./routes')(app, controllers);

app.locals.members = [];

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.configure(function() {
    app.use(allowCrossDomain);
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});
