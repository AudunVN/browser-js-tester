function tests() {
	it('should pass, but with dependencies', function() {
		assert(1 === 1);
	});

	it('should fail, but with dependencies', function() {
		assert(1 !== 1);
	});
}

loadScriptsAndRunTests(["your-code-for-testing.js"], tests);

it('should pass', function() {
	assert(1 === 1);
});

it('should fail', function() {
	assert(1 !== 1);
});