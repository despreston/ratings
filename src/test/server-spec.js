'use strict';

var request = require('supertest'),
	expect = require('chai').expect,
	baseUrl = "http://localhost:3000/";

describe('Ratings Service', function() {
	describe('lookupPlayer', function() {
		it('should return correctly formatted results for player: "desmond preston"', function(done) {
			var expected =
			'[{"Member ID":"73084","Last Name":"Preston","First Name":"Desmond","Rating":"2047","State":"NY","Zip":"14604","Gender":"M","Expiration Date":"2/29/2016","Last Played Date":"10/25/2015"}]';

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