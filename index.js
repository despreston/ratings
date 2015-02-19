var express = require('express'),
    cors = require('cors'),
    app = express(),
    parser = require('./parser'),
    controllers = require('./controllers')(app, parser),
    routes = require('./routes')(app, controllers);

app.all(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('test-header', 'fuck this needs to work');
    return next();
});
app.use(express.static(__dirname + '/ratings_static'));

app.locals.members = [];

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("listening for requests");
});
