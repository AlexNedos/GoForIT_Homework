var load = require('../js/script.js');


describe("mathPow", function() {
	it("pow", function() {
		var  result;
		result = load.pow(2, 2);
		expect(result).toEqual(4);
	});
});
