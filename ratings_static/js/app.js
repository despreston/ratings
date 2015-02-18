var baseUrl = 'http://ttratings.heroku.com';

angular.module('ratings', [])

    .service('services', function($http, $q) {
        this.findPlayer = function(data) {
            var deferred = $q.defer();
            $http.get(baseUrl + 'findPlayer/' + data).success(function(result) {
                deferred.resolve(result);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        };
    })

    .controller('ratingsController', ['$scope', 'services',
        function($scope, services) {
            $scope.players = [];

            $scope.findPlayer = function(playerName) {
                var promise = services.findPlayer(playerName);
                promise.then(function(data) {
                    $scope.players = data;
                });
            };


        }]);


