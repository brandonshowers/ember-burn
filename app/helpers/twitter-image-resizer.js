import Ember from 'ember';

export function twitterImageResizer(width, height) {
  let adjustedHeight,
      adjustedWidth,
      maxHeight = 1200,
      maxWidth = 600,
      aspectRatio = width / height;

  if (!width || !height) {
    throw new Error('Twitter Image Resizer: height and width required');
  }

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
    adjustedHeight: Math.round(adjustedHeight)
  }
}

export default Ember.Helper.helper(twitterImageResizer);
