function routes(app, controllers) {

    app.get('/', function(req, res, next) {
        res.sendfile('ratings_static/index.html');
    });

    app.get('/findPlayer/:playerName', function (req, res, next) {
        console.log('***** REQUEST TO LOOKUP PLAYER ****** : ' + req.params.playerName);
        var playerName = req.params.playerName;
        var promise = controllers.lookupPlayer(playerName).then(function(result) {
            res.json(result);
        });
    });
}

module.exports = routes;