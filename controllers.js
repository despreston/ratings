var q = require('q');

module.exports = function (app, parser) {
    var module = {};
    var members = app.locals.members;

    module.lookupPlayer = function(name) {
        // This will be available 'outside'.
        var deferred = q.defer();
        var players = [];

        var getLowerCase = function(s) {
            return s.toLowerCase();
        };

        var combResults = function() {
            var start = console.time('player_lookup');

            for (var i = 0; i < members.length; i++) {
                var nameInList = getLowerCase(members[i]['Last Name'] + members[i]['First Name']),
                    reverseName = getLowerCase(members[i]['First Name'] + members[i]['Last Name'])
                    inputName = getLowerCase(name.replace(/\s/g, ''));

                if (nameInList.indexOf(inputName) != -1 || reverseName.indexOf(inputName) != -1) {
                    players.push(members[i]);
                }
            }

            deferred.resolve(players);
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
        return deferred.promise;

    };

    return module;
};