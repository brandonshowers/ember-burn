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
    adjustedHeight = maxWidth / aspectRatio;
    adjustedWidth = Math.round(adjustedHeight) * aspectRatio;

    if (adjustedWidth > maxWidth) {
      adjustedWidth = maxWidth;
    }
  } else if (aspectRatio > 1) {
    adjustedHeight = maxWidth / aspectRatio;
    adjustedWidth = adjustedHeight * aspectRatio;
  } else if (aspectRatio <= 1 && aspectRatio > 0.5) {
    adjustedWidth = maxWidth;
    adjustedHeight = adjustedWidth / aspectRatio;
  } else if (aspectRatio <= 0.5) {
    adjustedWidth = maxHeight * aspectRatio;
    adjustedHeight = Math.round(adjustedWidth) / aspectRatio;

    if (adjustedHeight > maxHeight) {
      adjustedHeight = maxHeight;
    }
  }


  return {
    adjustedWidth: Math.round(adjustedWidth),
    adjustedHeight: Math.round(adjustedHeight)
  };
}

export default Ember.Helper.helper(twitterImageResizer);
