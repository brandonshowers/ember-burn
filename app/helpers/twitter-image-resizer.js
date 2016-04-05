import Ember from 'ember';

export function twitterImageResizer(width, height) {
  let adjustedHeight,
      adjustedWidth,
      maxHeight = 1200,
      maxWidth  = 600;

  if (!width || !height) {
    throw new Error('Twitter Image Resizer: height and width required');
  }

  // adjusted height = <user-chosen width>  * original height / original width
  // adjusted width  = <user-chosen height> * original width  / original height
  let aspectRatio = width / height;
  // aspectRatio = Math.round(aspectRatio * 10000) / 10000;

  if (width <= maxWidth && height <= maxHeight) {
    return {
      adjustedWidth: width,
      adjustedHeight: height,
    };
  }

  if (aspectRatio >= 1.5) {
    adjustedHeight = 600 * height / width;
    adjustedWidth = Math.round(adjustedHeight) * aspectRatio;

    if (adjustedWidth > 600) {
      adjustedWidth = 600;
    }
  } else if (aspectRatio > 1) {
    adjustedHeight = 600 * height / width;
    adjustedWidth = adjustedHeight * aspectRatio;
  } else if (aspectRatio <= 1 && aspectRatio > 0.5) {
    adjustedWidth = 600;
    adjustedHeight = adjustedWidth * height / width;
  } else if (aspectRatio <= 0.5) {
    adjustedWidth = 1200 * aspectRatio;
    adjustedHeight = Math.round(adjustedWidth) * height / width;

    if (adjustedHeight > 1200) {
      adjustedHeight = 1200;
    }
  }


  return {
    adjustedWidth: Math.round(adjustedWidth),
    // adjustedWidth: adjustedWidth,
    adjustedHeight: Math.round(adjustedHeight)
    // adjustedHeight: adjustedHeight
  }
}

export default Ember.Helper.helper(twitterImageResizer);
