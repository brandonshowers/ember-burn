import Ember from 'ember';

export function twitterImageResizer(width, height) {
  let adjustedHeight,
      adjustedWidth,
      aspectRatio = width / height;

  const MAX_HEIGHT = 1200,
      MAX_WIDTH = 600;

  if (!width || !height) {
    throw new Error('Twitter Image Resizer: height and width required');
  }

  if (width <= MAX_WIDTH && height <= MAX_HEIGHT) {
    return {
      adjustedWidth: width,
      adjustedHeight: height,
    };
  }

  if (aspectRatio >= 1.5) {
    adjustedHeight = MAX_WIDTH / aspectRatio;
    adjustedWidth = Math.round(adjustedHeight) * aspectRatio;

    if (adjustedWidth > MAX_WIDTH) {
      adjustedWidth = MAX_WIDTH;
    }
  } else if (aspectRatio > 1) {
    adjustedHeight = MAX_WIDTH / aspectRatio;
    adjustedWidth = adjustedHeight * aspectRatio;
  } else if (aspectRatio <= 1 && aspectRatio > 0.5) {
    adjustedWidth = MAX_WIDTH;
    adjustedHeight = adjustedWidth / aspectRatio;
  } else if (aspectRatio <= 0.5) {
    adjustedWidth = MAX_HEIGHT * aspectRatio;
    adjustedHeight = Math.round(adjustedWidth) / aspectRatio;

    if (adjustedHeight > MAX_HEIGHT) {
      adjustedHeight = MAX_HEIGHT;
    }
  }


  return {
    adjustedWidth: Math.round(adjustedWidth),
    adjustedHeight: Math.round(adjustedHeight)
  };
}

export default Ember.Helper.helper(twitterImageResizer);
