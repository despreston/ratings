//var baseUrl = 'http://ttratings.herokuapp.com/';
var baseUrl = 'http://localhost:3000/'

angular.module('ratings', [])

    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        if ($httpProvider.defaults.headers.common['X-Requested-With'])
        {
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    }])

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
            $scope.searched;
            $scope.players = [];

            $scope.findPlayer = function(playerName) {
                var promise = services.findPlayer(playerName);
                $scope.players = [];
                $scope.message = "Loading...";
                promise.then(function(data) {
                    if (data.length == 0) {
                        $scope.message = 'No players found. Remember: Search "Last name, First name"';
                    } else {
                        $scope.message = '';
                        $scope.players = data;
                    }
                    
                });
            };

            $scope.clear = function() {
                $scope.players = [];
            };

        }]);


