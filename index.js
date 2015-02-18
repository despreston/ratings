var express = require('express'),
    app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

var parser = require('./parser'),
    controllers = require('./controllers')(app, parser),
    routes = require('./routes')(app, controllers);

app.use(express.static(__dirname + '/ratings_static'));

app.locals.members = [];

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("listening for requests");
});
