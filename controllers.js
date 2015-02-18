module.exports = function (app, parser) {
    var module = {};
    var members = app.locals.members;

    module.lookupPlayer = function(name) {
        // This will be available 'outside'.

        var combResults = function() {
            var start = console.time('player_lookup');
            for (var i = 0; i < members.length; i++) {
                if (members[i].Name.indexOf(name) != -1) {
                    console.log(members[i]);
                }
            }
            console.timeEnd('player_lookup');
        };

        if(members === undefined) {
            parser.getMembers().then(function (d) {
                members = d;
                combResults();
            });
        } else {
            combResults();
        }
    };

    return module;
};





/*function controllers(app) {
    var lookupPlayer = function (name) {
        var start = console.time('player_lookup');

        for (var i = 0; i < members.length; i++) {
            if (members[i].Name.indexOf(name) != -1) {
                console.log(members[i]);
            }
        }

        console.timeEnd('player_lookup');
    };
}


    module.exports = {
        lookupPlayer: controllers.lookupPlayer
    };

    */