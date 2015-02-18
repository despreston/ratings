var express = require('express'),
    app = express(),
    parser = require('./parser'),
    controllers = require('./controllers')(app, parser),
    routes = require('./routes')(app, controllers);

app.locals.members = [];

var port = process.env.PORT | 3000;

var server = app.listen(port, function() {
    console.log("listening on " + port);
});
