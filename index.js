var express = require('express'),
    app = express(),
    parser = require('./parser'),
    controllers = require('./controllers')(app, parser),
    routes = require('./routes')(app, controllers);

app.locals.members = [];

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});
