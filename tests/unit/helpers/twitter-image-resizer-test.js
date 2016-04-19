import { twitterImageResizer } from 'ember-burn/helpers/twitter-image-resizer';
import { module, test } from 'qunit';

module('Unit | Helper | Twitter Image Resizer');

test('returns error if height and width not specified', function (assert) {
  assert.throws(function () { twitterImageResizer(); });
});

test('it works', function(assert) {
  let result = twitterImageResizer(1024, 668);
  assert.ok(result);
});

test('image resizing', function(assert) {
  let parseExpected,
      parseMessage,
      parseAssertDeepEqual,
      shouldShowAsTextLink;

  parseExpected = function (width, height) {
    return {
      adjustedWidth: width,
      adjustedHeight: height
    };
  };

  parseMessage = function (original_width, original_height, new_width, new_height) {
    return original_width + " x " + original_height + " should be resized to " + new_width + " x " + new_height;
  };

  parseAssertDeepEqual = function (original_width, original_height, new_width, new_height) {
    let result = twitterImageResizer(original_width, original_height);

    assert.deepEqual(
      {
        adjustedHeight: result.adjustedHeight,
        adjustedWidth: result.adjustedWidth
      },
      parseExpected(new_width, new_height),
      parseMessage(original_width, original_height, new_width, new_height)
    );
  };

  shouldShowAsTextLink = function (original_width, original_height, show_as_link) {
    let result = twitterImageResizer(original_width, original_height);

    assert.equal(
      result.showAsLink,
      show_as_link,
      original_width + " x " + original_height + ((show_as_link) ? " should " : " should not ") + "show as a text link"
    );
  };

  parseAssertDeepEqual(100, 1000, 100, 1000);
  parseAssertDeepEqual(100, 1200, 100, 1200);
  parseAssertDeepEqual(100, 1500, 80, 1200);
  parseAssertDeepEqual(140, 93, 140, 93);
  parseAssertDeepEqual(320, 1977, 194, 1199);
  parseAssertDeepEqual(400, 1200, 400, 1200);
  parseAssertDeepEqual(450, 300, 450, 300);
  parseAssertDeepEqual(480, 2996, 192, 1198);
  parseAssertDeepEqual(575, 800, 575, 800);
  parseAssertDeepEqual(600, 600, 600, 600);
  parseAssertDeepEqual(600, 1200, 600, 1200);
  parseAssertDeepEqual(600, 1300, 554, 1200);
  parseAssertDeepEqual(640, 3954, 194, 1199);
  parseAssertDeepEqual(700, 700, 600, 600);
  parseAssertDeepEqual(800, 4943, 194, 1199);
  parseAssertDeepEqual(800, 500, 600, 375);
  parseAssertDeepEqual(800, 800, 600, 600);
  parseAssertDeepEqual(800, 1000, 600, 750);
  parseAssertDeepEqual(800, 1200, 600, 900);
  parseAssertDeepEqual(800, 1500, 600, 1125);
  parseAssertDeepEqual(800, 1550, 600, 1163);
  parseAssertDeepEqual(800, 1600, 600, 1200);
  parseAssertDeepEqual(800, 1750, 549, 1200);
  parseAssertDeepEqual(800, 2000, 480, 1200);
  parseAssertDeepEqual(800, 2500, 384, 1200);
  parseAssertDeepEqual(800, 3000, 320, 1200);
  parseAssertDeepEqual(800, 3150, 305, 1200);
  parseAssertDeepEqual(800, 3169, 303, 1200);
  parseAssertDeepEqual(800, 3200, 300, 1200);
  parseAssertDeepEqual(800, 3225, 298, 1200);
  parseAssertDeepEqual(800, 3250, 295, 1198);
  parseAssertDeepEqual(800, 3500, 274, 1199);
  parseAssertDeepEqual(800, 4000, 240, 1200);
  parseAssertDeepEqual(960, 640, 600, 400);
  parseAssertDeepEqual(1000, 100, 600, 60);
  parseAssertDeepEqual(1000, 4000, 300, 1200);
  parseAssertDeepEqual(1000, 4625, 259, 1198);
  parseAssertDeepEqual(1000, 5000, 240, 1200);
  parseAssertDeepEqual(1500, 100, 600, 40);
  parseAssertDeepEqual(1024, 668, 599, 391);
  parseAssertDeepEqual(1850, 1230, 600, 399);
  parseAssertDeepEqual(1850, 1234, 600, 400);
  parseAssertDeepEqual(1918, 1252, 600, 392);
  parseAssertDeepEqual(3228, 2153, 600, 400);

  shouldShowAsTextLink(80, 80, true);
  shouldShowAsTextLink(90, 90, true);
  shouldShowAsTextLink(93, 140, true);
  shouldShowAsTextLink(99, 99, true);
  shouldShowAsTextLink(99, 200, true);
  shouldShowAsTextLink(100, 100, false);
  shouldShowAsTextLink(100, 200, false);
  shouldShowAsTextLink(100, 1000, true);
  shouldShowAsTextLink(100, 1200, true);
  shouldShowAsTextLink(100, 1500, true);
  shouldShowAsTextLink(140, 93, true);
  shouldShowAsTextLink(186, 280, false);
  shouldShowAsTextLink(200, 100, false);
  shouldShowAsTextLink(200, 99, true);
  shouldShowAsTextLink(320, 1977, true);
  shouldShowAsTextLink(400, 1200, false);
  shouldShowAsTextLink(450, 300, false);
  shouldShowAsTextLink(480, 2996, true);
  shouldShowAsTextLink(575, 800, false);
  shouldShowAsTextLink(600, 600, false);
  shouldShowAsTextLink(600, 1200, false);
  shouldShowAsTextLink(600, 1300, false);
  shouldShowAsTextLink(640, 3954, true);
  shouldShowAsTextLink(700, 700, false);
  shouldShowAsTextLink(800, 4943, true);
  shouldShowAsTextLink(800, 500, false);
  shouldShowAsTextLink(800, 800, false);
  shouldShowAsTextLink(800, 1000, false);
  shouldShowAsTextLink(800, 1200, false);
  shouldShowAsTextLink(800, 1500, false);
  shouldShowAsTextLink(800, 1550, false);
  shouldShowAsTextLink(800, 1600, false);
  shouldShowAsTextLink(800, 1750, false);
  shouldShowAsTextLink(800, 2000, false);
  shouldShowAsTextLink(800, 2500, false);
  shouldShowAsTextLink(800, 3000, false);
  shouldShowAsTextLink(800, 3150, false);
  shouldShowAsTextLink(800, 3169, false);
  shouldShowAsTextLink(800, 3200, true);
  shouldShowAsTextLink(800, 3225, true);
  shouldShowAsTextLink(800, 3250, true);
  shouldShowAsTextLink(800, 3500, true);
  shouldShowAsTextLink(800, 4000, true);
  shouldShowAsTextLink(960, 640, false);
  shouldShowAsTextLink(1000, 50, true);
  shouldShowAsTextLink(1000, 100, true);
  shouldShowAsTextLink(1000, 4000, true);
  shouldShowAsTextLink(1000, 4625, true);
  shouldShowAsTextLink(1000, 5000, true);
  shouldShowAsTextLink(1500, 100, true);
  shouldShowAsTextLink(1024, 668, false);
  shouldShowAsTextLink(1850, 1230, false);
  shouldShowAsTextLink(1850, 1234, false);
  shouldShowAsTextLink(1918, 1252, false);
  shouldShowAsTextLink(3228, 2153, false);

});
