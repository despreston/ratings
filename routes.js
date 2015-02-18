function routes(app, controllers) {

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