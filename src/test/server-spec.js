'use strict';

var request = require('supertest'),
	expect = require('chai').expect,
	baseUrl = "http://localhost:3000/";

describe('Ratings Service', function() {
	describe('lookupPlayer', function() {
		it('should return correctly formatted results for player: "desmond preston"', function(done) {
			var expected =
			'[{"Member ID":"73084","Last Name":"Preston","First Name":"Desmond","Rating":"2080","State":"NY","Zip":"2446","Gender":"M","Expiration Date":"4/30/2017","Last Played Date":"7/31/2016"}]';

   			request(baseUrl)
   				.get('findPlayer/Desmond%20Preston')
   				.expect(200)
   				.end(function(err, res) {
   					console.log(res.text);
   					expect(res.text).to.equal(expected);
   					done();
   				});
		});
	});
});