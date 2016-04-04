import Ember from 'ember';

export function twitterImageResizer(width, height) {
  let adjustedHeight,
      adjustedWidth,
      maxHeight = 560,
      maxWidth  = 560;

  if (width && height) {
    // adjusted height = <user-chosen width>  * original height / original width
    // adjusted width  = <user-chosen height> * original width  / original height
    let aspectRatio = width / height;
    // aspectRatio = Math.round(aspectRatio * 10000) / 10000;

    if (height > maxHeight || width > maxWidth) {
      if (aspectRatio >= 1.5) {
        adjustedHeight = 600 * height / width;
        adjustedWidth = adjustedHeight * aspectRatio;
      } else if (aspectRatio > 1) {
        adjustedHeight = 600 * height / width;
        adjustedWidth = adjustedHeight * aspectRatio;
      } else if (aspectRatio === 0.25 && height > 1200) {
        adjustedWidth = 1200 * 0.26666666666667;
        adjustedHeight = adjustedWidth * height * .9375 / width;
      } else if (aspectRatio < 1) {
        adjustedWidth = 1200 * aspectRatio;
        adjustedHeight = adjustedWidth * height / width;
      }
    } else {
      adjustedWidth = width;
      adjustedHeight = height;
    }

    return {
      adjustedWidth: adjustedWidth,
      adjustedHeight: adjustedHeight
    }
  } else {
    throw new Error('Twitter Image Resizer: height and width required');
  }
}

export default Ember.Helper.helper(twitterImageResizer);
