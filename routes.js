function routes(app, controllers) {
    app.get('/findPlayer/:playerName', function (req, res) {
        console.log('Request to lookup Player: ' + req.params.playerName);
        var playerName = req.params.playerName;
        var result = controllers.lookupPlayer(playerName);  //im just assuming you have a function called getPlayer
        res.json(result);
    });
}

module.exports = routes;