;(function($) {
	// var
	// 	qs = 'bar=sneh&baz=blarg',
	// 	newUrl
	// ;
	// 
	// if(location.search.length === 1) {
	// 	newUrl = location.href + location.search + 
	// } else if(location.search.length > 1) {
	// 	
	// } else {
	// 	
	// }
	
	// Need a URL with query params to test functionality
	// TODO Add awareness of any QUNit query params
	if(location.search.length < 2) location.search = '?bar=sneh&baz=blarg';
	
	module('jQuery.getParam Plugin');

	test("Components exist", function() {
		expect(8);
	
		ok($._GET, "Private cache exists");
		ok($.GET,  "Public ache exists");
		
		ok($.getParam, "getParam");
		ok($.parseParams, "parseParams");
		
		ok($.isFunction($.getParam), "getParam === Function");
		ok($.isFunction($.parseParams), "parseParams === Function");
		ok($.isPlainObject($._GET), "_GET === Plain Object");
		ok($.isPlainObject($.GET), "GET === Plain Object");
	});

	test(".parseParams() Behavior", function() {
		// expect(1);
		
		ok($.isPlainObject($.parseParams()), "always returns an object");
		
		// var testUrl = 'http://www.foo.com/path/to/directory/page.html?bar=sneh&baz=blarg#hashtastic';
		var testUrl = 'http://www.foo.com/path/to/directory/page.html?bar=sneh&baz=blarg';
		equal($.parseParams(testUrl)['bar'], 'sneh', "Key accessible in returned object");
		
	});

	test(".getParam() Behavior", function() {
		// expect();
		
		ok($.isPlainObject($.getParam()), "Return whole collection (object): no arg");
		ok($.isPlainObject($.getParam(3)), "Return whole collection (object): int arg");
		ok($.isPlainObject($.getParam([])), "Return whole collection (object): array arg");
		ok($.isPlainObject($.getParam({})), "Return whole collection (object): obj arg");
		ok($.isPlainObject($.getParam(function() {})), "Return whole collection (object): func arg");

		equal($.getParam('bar'), 'sneh', "Pulls key from page URL");
	});
	
	test(".GET[] accessor", function() {
		// expect();

		ok($.isPlainObject($.GET), "Return whole collection (object): no key");
		
		equal($.GET['bar'], 'sneh', "Pulls key from page URL");
		equal($.GET['arg'], null, "null if key doesn't exist");
	});
	
})(jQuery);
