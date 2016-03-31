'use strict';

describe('Ratings Module', function() {
	var RatingsController, scope, self, mockService;

	describe('RatingsController', function() {
		beforeEach(function() {
			module('ratings'); 

			inject(function($controller, $rootScope, services, $q) {
				scope = $rootScope.$new();
				self = this;

				var deferred = $q.defer();
				
				mockService = {
					findPlayer: jasmine.createSpy().and.returnValue($q.when('test'))
				};

				RatingsController = $controller('RatingsController', {
					$scope: scope,
					services: mockService
				});
			});
		});

		describe('findPlayer()', function() {
			beforeEach(function() {
				scope.findPlayer('desmond preston');
			});

			it('should call the findPlayer function in the service', function() {
				expect(mockService.findPlayer).toHaveBeenCalledWith('desmond preston');
			});
		});
	});
});