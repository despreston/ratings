function routes(app, controllers) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    });

    app.get('/', function(req, res, next) {
        res.sendfile('ratings_static/index.html');
    });

    app.get('/findPlayer/:playerName', function (req, res, next) {
        console.log('Request to lookup Player: ' + req.params.playerName);
        var playerName = req.params.playerName;
        var promise = controllers.lookupPlayer(playerName).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });
}

module.exports = routes;