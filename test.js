var assert = require('assert');
var sizer = require('./index.js');

describe('cover', function() {
	// outer size is 640 x 960
	it('should return 853.333... x 960 when image size is 640 x 720', function() {
		var size = sizer.cover(640, 960, 640, 720);
		assert.equal(size.height, 960);
		assert.equal(size.width.toFixed(3), '853.333');
	});

	it('should return 640 x 1920 when image size is 320 x 960', function() {
		var size = sizer.cover(640, 960, 320, 960);
		assert.equal(size.height, 1920);
		assert.equal(size.width, 640);
	});
});

