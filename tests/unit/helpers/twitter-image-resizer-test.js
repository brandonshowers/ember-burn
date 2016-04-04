import { twitterImageResizer } from 'ember-burn/helpers/twitter-image-resizer';
import { module, test } from 'qunit';

module('Unit | Helper | Twitter Image Resizer');

test('it works', function(assert) {
  let result = twitterImageResizer(1024, 668);
  assert.ok(result);
});

test('image resizing', function(assert) {
	let parseExpected,
			parseMessage,
			parseAssertEqual;

	parseExpected = function (width, height) {
		return {
			adjustedWidth: width,
			adjustedHeight: height
		}
	};

	parseMessage = function (original_width, original_height, new_width, new_height) {
		return original_width + " x " + original_height + " should be resized to " + new_width + " x " + new_height;
	}

	parseAssertDeepEqual = function (original_width, original_height, new_width, new_height) {
		assert.deepEqual(
			twitterImageResizer(original_width, original_height),
			parseExpected(new_width, new_height),
			parseMessage(original_width, original_height, new_width, new_height)
		);
	};

	// parseAssertDeepEqual(1024, 668, 599, 391);
	// parseAssertDeepEqual(1918, 1252, 600, 392);
	// parseAssertDeepEqual(1850, 1230, 600, 400);
	// parseAssertDeepEqual(3228, 2153, 600, 400);
	// parseAssertDeepEqual(140, 93, 140, 93);
	// parseAssertDeepEqual(450, 300, 450, 300);
	// parseAssertDeepEqual(960, 640, 600, 400);
	// parseAssertDeepEqual(1850, 1234, 600, 400);
	// parseAssertDeepEqual(800, 4943, 194, 1199);
	// parseAssertDeepEqual(640, 3954, 194, 1199);
	// parseAssertDeepEqual(480, 2996, 194, 1199);
	// parseAssertDeepEqual(320, 1977, 194, 1199);
	// parseAssertDeepEqual(800, 500, 600, 375);
	// parseAssertDeepEqual(800, 1000, 600, 750);
	// parseAssertDeepEqual(800, 1500, 600, 1125);
	// parseAssertDeepEqual(800, 2000, 480, 1200);
	// parseAssertDeepEqual(800, 2500, 384, 1200);
	// parseAssertDeepEqual(800, 3000, 320, 1200);
	// parseAssertDeepEqual(800, 3150, 305, 1200);
	parseAssertDeepEqual(800, 3200, 320, 1200);
	parseAssertDeepEqual(800, 3225, 298, 1200);
	parseAssertDeepEqual(800, 3250, 295, 1198);
	parseAssertDeepEqual(800, 3500, 274, 1199);
	parseAssertDeepEqual(800, 4000, 240, 1200);

});

// test('returns error if height and width not specified', function (assert) {
// 	assert.throws(twitterImageResizer(), Error(), 'Twitter Image Resizer: height and width required');
// });
